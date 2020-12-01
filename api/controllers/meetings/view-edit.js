module.exports = {


  friendlyName: 'View edit',


  description: 'Display "Edit" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/meetings/edit'
    }

  },


  fn: async function () {
    const slug = this.req.param('slug');
    const meeting = await Meeting.findOne({slug}).populate('comments');
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
