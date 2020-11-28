module.exports = {


  friendlyName: 'Signup',


  description: 'Sign up for a new user account.',


  extendedDescription:
`This creates a new user record in the database, signs in the requesting user agent
by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
(if emailing with Mailgun is enabled) sends an account verification email.

If a verification email is sent, the new user's account is put in an "unconfirmed" state
until they confirm they are using a legitimate email address (by clicking the link in
the account verification message.)`,


  inputs: {

    emailAddress: {
      required: true,
      type: 'string',
      isEmail: true,
      description: 'The email address for the new account, e.g. m@example.com.',
      extendedDescription: 'Must be a valid email address.',
    },

    password: {
      required: true,
      type: 'string',
      maxLength: 200,
      example: 'passwordlol',
      description: 'The unencrypted password to use for the new account.'
    },

    firstName:  {
      required: true,
      type: 'string',
      example: 'Frida',
      description: 'The user\'s first name.',
    },

    lastName:  {
      required: true,
      type: 'string',
      example: 'Rivera',
      description: 'The user\'s last name.',
    }
    
  },


  exits: {

    success: {
      description: 'New user account was created successfully.'
    },

    invalid: {
      responseType: 'badRequest',
      description: 'The provided name, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },

  },


  fn: async function ({emailAddress, password, firstName , lastName}) {

    const newEmailAddress = emailAddress.toLowerCase();
    const nowDate = Date.now();

    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    const newUserRecord = await User.create(_.extend({
      firstName: firstName,
      lastName: lastName,
      emailAddress: newEmailAddress,
      password: await sails.helpers.passwords.hashPassword(password),
      tosAcceptedByIp: this.req.ip,
      userSince: nowDate
    }, sails.config.custom.verifyEmailAddresses? {
      emailProofToken: await sails.helpers.strings.random('url-friendly'),
      emailProofTokenExpiresAt: nowDate + sails.config.custom.emailProofTokenTTL,
      emailStatus: 'unconfirmed'
    }:{}))
    .intercept('E_UNIQUE', 'emailAlreadyInUse')
    .intercept({name: 'UsageError'}, 'invalid')
    .fetch();

    // If billing feaures are enabled, save a new customer entry in the Stripe API.
    // Then persist the Stripe customer id in the database.
    if (sails.config.custom.enableBillingFeatures) {
      let stripeCustomerId = await sails.helpers.stripe.saveBillingInfo.with({
        emailAddress: newEmailAddress
      }).timeout(5000).retry();
      await User.updateOne({id: newUserRecord.id})
      .set({
        stripeCustomerId
      });
    }

    // Log an action in the database that the user has signed up
    // done in background to avoid latency
    Log.create({
      fromUser: newUserRecord.id,
      toUser: newUserRecord.id,
      action: 'loggedIn',
      entity: (this.req.headers['user-agent'] || '') // TODO: change to appropriate client
    }).exec(err =>{
      if (err) {
        sails.log.error('Background task failed: Could not add Log entry for user (`'+newUserRecord.id+'`).  Error details: '+err.stack);
        return;
      }
      sails.log.verbose('Added a login Log entry for user `'+newUserRecord.id+'`.');
    });

    // add permission set for the new user.
    // done in background to avoid latency
    Permission.create({
      forUser: newUserRecord.id
    }).exec(err =>{
      if (err) {
        sails.log.error('Background task failed: Could not add Permissions for user (`'+newUserRecord.id+'`).  Error details: '+err.stack);
        return;
      }
      sails.log.verbose('Added Permission set for user `'+newUserRecord.id+'`.');
    });

    // add preference set for the new user.
    // done in background to avoid latency
    Preference.create({
      forUser: newUserRecord.id
    }).exec(err =>{
      if (err) {
        sails.log.error('Background task failed: Could not add Preferences for user (`'+newUserRecord.id+'`).  Error details: '+err.stack);
        return;
      }
      sails.log.verbose('Added Preferences set for user `'+newUserRecord.id+'`.');
    });

    // Store the user's new id in their session.
    this.req.session.userId = newUserRecord.id;

    if (sails.config.custom.verifyEmailAddresses) {
      // Send "confirm account" email
      await sails.helpers.sendTemplateEmail.with({
        to: newEmailAddress,
        subject: 'Please confirm your account',
        template: 'email-verify-account',
        templateData: {
          fullName: newUserRecord.firstName + " " + newUserRecord.lastName,
          token: newUserRecord.emailProofToken
        }
      });
    } else {
      sails.log.info('Skipping new account email verification... (since `verifyEmailAddresses` is disabled)');
    }

  }

};
