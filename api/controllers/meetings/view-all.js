module.exports = {


  friendlyName: 'View all',


  description: 'Display "All" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/meetings/all'
    }

  },


  fn: async function () {

    const user = await User.findOne(this.req.me.id).populate('meetings');
    let meetings = [];

    if (user && user.meetings && user.meetings.length > 0)
      meetings = user.meetings;

    return {
      meetings
    };
  }
};
