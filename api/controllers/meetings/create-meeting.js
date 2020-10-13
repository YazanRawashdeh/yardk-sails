module.exports = {


  friendlyName: 'Create meeting',


  description: 'Create the meeting for the logged-in user.',


  inputs: {
    title: {
      description: 'The new meeting title.',
      example: 'my meeting',
    },

    notes: {
      description: 'The new meeting notes.',
      example: 'my meeting notes',
    },

    time: {
      description: 'The new meeting time.',
      example: 'my meeting timme',
    }
  },

  fn: async function ({title,notes,time}) {
    const hashedString = `${title}${notes}${time}${+new Date()}`;
    const slug = require('crypto').createHash('sha1').update(hashedString).digest('hex');
    const userId = this.req.me.id;
    await Meeting.create({
      title,
      notes,
      time,
      slug,
      creator: userId
    });
  }
};
