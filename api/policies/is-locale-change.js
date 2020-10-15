/**
 * is-locale-change
 *
 * A simple policy that changes user language.
 */
module.exports = async function (req, res, proceed) {
  let lang = sails.config.i18n.defaultLocale;
  
  const isLangCookie = req.cookies.lang && _.indexOf(sails.config.i18n.locales, req.cookies.lang) > -1;
  const isLangQuery = req.query.lang && _.indexOf(sails.config.i18n.locales, req.query.lang) > -1;

  if (isLangCookie || isLangQuery) {
    // if query param is present use it instead
    lang = req.query.lang || req.cookies.lang;
    
    // ignore on sockets or (wantsJSON) requests
    if(!req.isSocket)
      res.cookie('lang', lang);
  }

  req.setLocale(lang);
  req.dir = sails.config.i18n.dirMap[lang];

  return proceed();
};