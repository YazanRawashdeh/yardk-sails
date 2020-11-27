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
            options: {
                opts: {
                    autoRename: true,
                    stringMap: [
                        {
                            "name"    : "next-prev",
                            "search"  : ["next"],
                            "replace" : ["prev"],
                            'options' : {
                                'scope' : '*',
                                'ignoreCase' : true
                            }
                        }
                    ]
                }
            },
            expand : true,
            cwd    : '.tmp/public/',
            dest   : '.tmp/public/',
            src    : ['**/*.css'],
            ext    : '.rtl.css'
        }
    });

    grunt.loadNpmTasks('grunt-rtlcss');
};