/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"confirmEmail":{"verb":"GET","url":"/email/confirm","args":["token"]},"publish":{"verb":"GET","url":"/comments/publish","args":[]},"logout":{"verb":"GET","url":"/api/v1/account/logout","args":[]},"updatePassword":{"verb":"PUT","url":"/api/v1/account/update-password","args":["password"]},"updateProfile":{"verb":"PUT","url":"/api/v1/account/update-profile","args":["fullName","emailAddress"]},"updateBillingCard":{"verb":"PUT","url":"/api/v1/account/update-billing-card","args":["stripeToken","billingCardLast4","billingCardBrand","billingCardExpMonth","billingCardExpYear"]},"createAgent":{"verb":"POST","url":"/api/v1/account/create-agent","args":["firstName","lastName","emailAddress","password"]},"getAgents":{"verb":"GET","url":"/api/v1/account/get-agents","args":[]},"login":{"verb":"PUT","url":"/api/v1/entrance/login","args":["emailAddress","password","rememberMe"]},"signup":{"verb":"POST","url":"/api/v1/entrance/signup","args":["emailAddress","password","fullName","age"]},"sendPasswordRecoveryEmail":{"verb":"POST","url":"/api/v1/entrance/send-password-recovery-email","args":["emailAddress"]},"updatePasswordAndLogin":{"verb":"POST","url":"/api/v1/entrance/update-password-and-login","args":["password","token"]},"deliverContactFormMessage":{"verb":"POST","url":"/api/v1/deliver-contact-form-message","args":["emailAddress","topic","fullName","message"]},"createMeeting":{"verb":"POST","url":"/api/v1/meetings/create-meeting","args":["title","notes","time"]},"updateMeeting":{"verb":"PATCH","url":"/api/v1/meetings/update-meeting/:slug","args":["title","notes","time"]},"createComment":{"verb":"POST","url":"/api/v1/comments/create-comment","args":["text","id"]},"updateComment":{"verb":"PATCH","url":"/api/v1/comments/update-comment/:slug","args":["text","slug"]}}
  /* eslint-enable */

});
