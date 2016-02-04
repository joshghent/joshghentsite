/* 
-- ORDER --
* CSSlint
* JSHint 
* Critical
* Uncss
* Uglify
* Imagemin
* CSSmin
* Inline
* HTMLmin
* PSI

*/

module.exports = function(grunt) {

    grunt.initConfig({
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['style.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['style.css']
            }
        },
        inline: {
            dist: {
                options: {
                    uglify: true,
                    htmlmin: true
                },
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['style.css', 'critical.css'],
                    dest: '',
                    ext: '.min.css'
                }]
            },
            options: {
                keepSpecialComments: 0
            }
        },
        uglify: {
            target: {
                src: '*.js'
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['*.{png,jpg}'],
                    dest: 'dist/images'
                }]
            }
        },
        connect: {
            server: {
                options: {
                    port: 4000,
                    base: 'dist',
                    keepalive: true,
                    hostname: '0.0.0.0'
                }
            }
        },
        psi: {
            localhost: {
                options: {
                    port: 4000
                }
            }
        },
        penthouse: {
            extract: {
                outfile: 'critical.css',
                css: 'style.css',
                url: 'http://localhost:4000',
                width: 1300,
                height: 900,
                skipErrors: false // this is the default
            },
        },
        watch: {
            css: {
                files: ['style.css'],
                tasks: ['cssmin']
            },
            html: {
                files: ['index.html'],
                tasks: ['htmlmin']
            },
            dev: {
                files: ['Gruntfile.js'],
                tasks: ['psi', 'penthouse']
            },
            options: {
                livereload: {
                    host: '0.0.0.0',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-penthouse');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-psi');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['csslint', 'cssmin', 'inline', 'htmlmin', 'imagemin', 'connect', 'penthouse', 'psi']);
}