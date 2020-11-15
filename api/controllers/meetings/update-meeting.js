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
    // console.log(this.req.body,this.req.allParams())
    const res = this.res;
    const slug = this.req.param('slug');
    const meeting = await Meeting.findOne({slug});
    const userId = this.req.me.id;
    if(meeting.creator !== userId)
      return res.notFound();
    await Meeting.updateOne({slug}).set({title,notes,time});
    console.log('done updating meeting');
  }
};
