module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            with_banner: {
                options: {
                    banner: '/* Minified CSS of <%= pkg.name %> */\n'
                },
                files: {
                    '../public/css/all.min.css': ['../styles/*.css']
                }
            },
        },
        uglify: {
            options: {
                banner: '/* Minified JavaScript of <%= pkg.name %> */\n'
            },
            my_target: {
                files: {
                    '../public/js/all.min.js': [
                        '../app/**/*.js',
                        '../app/*.js'
                    ]
                }
            }
        },
        typescript: {
            base: {
                src: ['lib/**/*.ts'],
                dest: 'js/server.js',
                options: {
                    module: 'amd',
                    target: 'es5'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
                spawn: false
            },
            css: {
                files: '../styles/*.css',
                tasks: ['cssmin']
            },
            js: {
                files: [
                    '../app/*.js',
                    '../app/**/*.js'
                ],
                tasks: ['uglify']
            },
            ts: {
                files: '**/*.ts',
                tasks: ['typescript']
            }
        },
        connect: {
            server: {
                options: {
                    port: 8082,
                    base: '../'
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:8082/index.html'
            }
        }
    });

    grunt.registerTask('default', ['connect', 'open', 'watch', 'cssmin', 'uglify']);
}