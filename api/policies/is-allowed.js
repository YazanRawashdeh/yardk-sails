/**
 * is-allowed
 *
 * A simple policy that allows only allowed users to edit meetings.
 *
 * For more about how to use policies, see:
 *   https://sailsjs.com/config/policies
 *   https://sailsjs.com/docs/concepts/policies
 *   https://sailsjs.com/docs/concepts/policies/access-control-and-permissions
 */
module.exports = async function (req, res, proceed) {
  // First, check whether the request comes from a logged-in user.
  // > For more about where `req.me` comes from, check out this app's
  // > custom hook (`api/hooks/custom/index.js`).
  if (!req.me) {
    return res.unauthorized();
  }//•
  const slug = req.param('slug');
  const meeting = await Meeting.findOne({slug});

  if(!meeting)
    return res.notFound();

  if (meeting.creator !== req.me.id){
    return res.forbidden();
  }
  return proceed();
};
