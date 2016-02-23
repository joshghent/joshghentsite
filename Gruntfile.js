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
                src: ['src/style.css']
            },
            lax: {
                options: {
                    import: false
                },
                src: ['src/style.css']
            }
        },
        inline: {
            dist: {
                src: 'src/index.html',
                dest: 'dist/index.html'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['src/style.css', 'src/critical.css'],
                    dest: '',
                    ext: '.min.css'
                }]
            },
            options: {
                keepSpecialComments: 0
            }
        },
        uglify: {
            options: {
                beautify: true,
                preserveComments: false
            },
            my_target: {
                files: {
                    'src/site.min.js': ['src/site.js'],
                    'src/portfolio.min.js': ['src/portfolio.js']
                }
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
            jpg: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: '*.jpg',
                    dest: 'dist/images'
                }]
            },
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: '*.png',
                    dest: 'dist/images'
                }]
            },
        },
        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 4000,
                    base: 'dist',
                    hostname: '0.0.0.0'
                }
            }
        },
        imageoptim: {
            myPngs: {
                options: {
                    jpegMini: false,
                    imageAlpha: true,
                    quitAfter: true
                },
                src: ['dist/images/*.png']
            },
            myJpgs: {
                options: {
                    imageAlpha: false,
                    quitAfter: true
                },
                src: ['dist/images/*.jpg']
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
                outfile: 'src/critical.css',
                css: 'src/style.css',
                url: 'http://localhost:4000',
                width: 1300,
                height: 900,
                skipErrors: false // this is the default
            },
        },
        watch: {
            html: {
                files: ['src/*.html'],
                tasks: ['htmlmin']
            },
            css: {
                files: ['src/*.css'],
                tasks: ['cssmin', 'inline']
            },
            js: {
                files: ['src/*.js'],
                tasks: ['uglify', 'inline']     
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-imageoptim');
    grunt.loadNpmTasks('grunt-penthouse');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-psi');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['csslint', 'cssmin', 'inline', 'htmlmin', 'imagemin', 'imageoptim', 'connect', 'penthouse', 'psi']);
    grunt.registerTask('speed', ['cssmin', 'uglify', 'inline', 'htmlmin', 'serve']);
    grunt.registerTask('images', ['imagemin', 'imageoptim']);
    grunt.registerTask('serve', ['connect:server', 'watch']);
}