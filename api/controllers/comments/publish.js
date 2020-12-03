module.exports = {  
  fn: async function () {

    if (!this.req.isSocket)
      return this.res.badRequest();
    
    const meetingId = this.req.query.meetingId;

    // Have the socket which made the request join the "meetingComments" room.
    sails.sockets.join(this.req, `${meetingId}-meetingComments`);
  }
}