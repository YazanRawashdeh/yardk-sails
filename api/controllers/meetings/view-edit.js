module.exports = {


  friendlyName: 'View edit',


  description: 'Display "Edit" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/meetings/edit'
    }

  },


  fn: async function () {
    const meetingId = this.req.param('meetingId');
    const meeting = await Meeting.findOne(meetingId);
    // Pass the meetingId which is coming from the request 
    // to the view to be used by the view and JS (vue.js)
    return {
      meetingId,
      meeting
    };

  }
};
