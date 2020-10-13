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
    const meeting = await Meeting.findOne({slug});
    console.log(meeting)
    // Pass the meeting which is coming by querying for it using the slug 
    // in the req to be used by the view and JS (vue.js)
    return {
      meeting
    };

  }
};
