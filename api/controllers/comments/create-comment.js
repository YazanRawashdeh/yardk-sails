module.exports = {


  friendlyName: 'Create comment',


  description: '',


  inputs: {
    text: {
      description: 'The new comment text.',
      example: 'my comment',
    },

    id: {
      description: 'id in which this comment was added.',
      example: 'd94ed771bcecb16e12dc1fd0292358020368b22b',
    },
  },


  exits: {

  },


  fn: async function ({text,id}) {
    const userId = this.req.me.id;
    const hashedString = `${text}${userId}${+new Date()}`;
    const slug = require('crypto').createHash('sha1').update(hashedString).digest('hex');
    
    const comment = await Comment.create({
      text,
      slug,
      meeting: id,
      creator: userId
    }).fetch();

    // assume I'm the creator always
    comment.creator = this.req.me;

    sails.sockets.broadcast(`${id}-meetingComments`, 'comment', {comment});
    // All done.
    return;

  }


};
