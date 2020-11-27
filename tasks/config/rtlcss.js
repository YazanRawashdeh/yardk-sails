/**
 * `tasks/config/rtl`
 *
 * ---------------------------------------------------------------
 *
 * Compile your LTR CSS file into a RTL CSS stylesheet.
 *
 *
 */
module.exports = function(grunt) {
    grunt.config.set('rtlcss', {
        dev: {
            expand : true,
            cwd    : '.tmp/public/',
            dest   : '.tmp/public/',
            src    : ['**/*.css'],
            ext    : '.rtl.css'
        }
    });

    grunt.loadNpmTasks('grunt-rtlcss');
};