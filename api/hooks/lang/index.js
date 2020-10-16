/**
 * @description :: The "lang" hook. Extends this app with custom language logic.
 * @docs        :: https://sailsjs.com/docs/concepts/extending-sails/hooks
 */

module.exports = function defineLangHook(sails) {

  return {

    routes: {

      /**
       * Runs before every matching route.
       *
       * @param {Ref} req
       * @param {Ref} res
       * @param {Function} next
       */
      before: {
        '/*': {
          skipAssets: true,
          fn: async function (req, res, next) {
            console.log(sails.helpers);
            let lang = sails.config.i18n.defaultLocale;

            const isLangCookie = req.cookies.lang && _.indexOf(sails.config.i18n.locales, req.cookies.lang) > -1;
            const isLangQuery = req.query.lang && _.indexOf(sails.config.i18n.locales, req.query.lang) > -1;

            if (isLangCookie || isLangQuery) {
              // if query param is present use it instead
              lang = req.query.lang || req.cookies.lang;

              // ignore on sockets or (wantsJSON) requests
              if (!req.isSocket)
                res.cookie('lang', lang);
            }

            req.setLocale(lang);
            req.dir = sails.config.i18n.dirMap[lang];

            return next();
          }
        }
      }
    }
  };
};
