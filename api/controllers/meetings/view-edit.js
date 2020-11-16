module.exports = {


  friendlyName: 'View edit',


  description: 'Display "Edit" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/meetings/edit'
    }

  },


  fn: async function () {
    var res = this.res;
    const slug = this.req.param('slug');
    const meeting = await Meeting.findOne({slug}).populate('comments');
    const userId = this.req.me.id;
    if(meeting.creator !== userId)
      return res.notFound();
    // we're using ids not slugs since this is internal (and generally DB merciful)
    const ids = _.pluck(meeting.comments,'id');
    // get comments creators, neat!!
    meeting.comments = await Comment.find({id: ids}).populate('creator');

    // Pass the meeting which is coming by querying for it using the slug
    // in the req to be used by the view and JS (vue.js)
    return {
      meeting
    };

  }
};
