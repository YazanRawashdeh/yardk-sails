/**
 * is-locale-change
 *
 * A simple policy that changes user language.
 */
module.exports = async function (req, res, proceed) {
  let lang = sails.config.i18n.defaultLocale;

  if (req.query.lang && _.indexOf(sails.config.i18n.locales, req.query.lang) > -1) {
    lang = req.query.lang;
  }

  req.setLocale(lang);
  req.dir = sails.config.i18n.dirMap[lang];

  return proceed();
};