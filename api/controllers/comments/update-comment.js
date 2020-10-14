module.exports = {


  friendlyName: 'Update comment',


  description: '',


  inputs: {
    text: {
      description: 'The new comment text.',
      example: 'my comment',
    },

    slug: {
      description: 'The meeting id in which this comment was added.',
      example: 'd94ed771bcecb16e12dc1fd0292358020368b22b',
    },
  },


  exits: {

  },


  fn: async function ({slug,text}) {
    await Comment.updateOne({
      slug
    }).set({text});
    // All done.
    return;

  }


};
