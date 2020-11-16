/**
 * forbidden.js
 *
 * A custom response that content-negotiates the current request to either:
 *  • serve an HTML error page about the user having superAdmin rights or not.
 *
 * Example usage:
 * ```
 *     return res.forbidden(); // IT OVERRIDES THE ONE IN SAILS BY DEFAULT
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       badToken: {
 *         description: 'You don't have permissions to view the resource you requested.',
 *         responseType: 'forbidden'
 *       }
 *     }
 * ```
 */
module.exports = function forbidden() {

    var req = this.req;
    var res = this.res;
  
    sails.log.verbose('Ran custom response: res.forbidden()');
  
    if (req.wantsJSON) {
      return res.status(403).send('You have no permissions (Forbidden)');
    }
    else {
      return res.status(403).view('403');
    }
  
  };
  