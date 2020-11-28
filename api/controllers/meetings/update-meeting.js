module.exports = {
  friendlyName: 'Update meeting',


  description: 'Update the meeting for the logged-in user.',


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
    const slug = this.req.param('slug');
    await Meeting.updateOne({slug}).set({title,notes,time});
    console.log('done updating meeting');
  }
};
