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
    const userId = this.req.me.id;
    await Meeting.create({
      title,
      notes,
      time,
      creator: userId
    });
  }
};
