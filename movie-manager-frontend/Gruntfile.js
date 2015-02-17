module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-watch-nospawn');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    var appJsFiles = [
        'app/**/*.module.js',
        'app/**/*.js',
        '!app/**/*.spec.js'
    ];

    var appCssFiles = [
        'build/css/style.css'
    ];

    var ngTemplates = [
        'app/**/*.tpl.html'
    ];

    var vendorMinifiedJsFiles = [
        'vendor/angular/angular.min.js',
        'vendor/angular-route/angular-route.min.js',
        'vendor/angular-messages/angular-messages.min.js'
    ];

    var vendorFonts = [
        'vendor/bootstrap/fonts/*'
    ];

    var angularTemplateCache = 'build/app/template-cache.js';

    grunt.initConfig({
        ngtemplates: {
            moviemanager: { // "ccmonline" matches the name of the angular module defined in app.js
                src: ngTemplates,
                dest: angularTemplateCache
            }
        },
        express: {
            mock: {
                options: {
                    hostname: 'localhost',
                    port: 9000,
                    bases: 'build',
                    server: 'api/mock.js'
                }
            },
            proxy: {
                options: {
                    hostname: 'localhost',
                    port: 9000,
                    bases: 'build',
                    server: 'api/proxy.js'
                }
            }
        },
        watch: {
            ngTplCache: {
                files: ['app/**/*.tpl.html'],
                tasks: ['ngtemplates', 'injector:build']
            },
            appJsFiles: {
                files: appJsFiles,
                tasks: ['copy:build', 'injector:build']
            },
            index: {
                files: 'app/index.html',
                tasks: ['copy:build', 'injector:build']
            },
            styles: {
                files: 'app/css/**/*.less',
                tasks: ['less:build', 'injector:build']
            }
        },
        copy: {
            build: {
                files: [
                    {expand: true, src: appJsFiles, dest: 'build'},
                    {expand: true, src: vendorMinifiedJsFiles, dest: 'build'},
                    {expand: true, flatten: true, src: vendorFonts, dest: 'build/fonts'},
                    {expand: true, flatten: true, src: 'app/index.html', dest: 'build'}
                ]
            }
        },
        less: {
            build: {
                files: {
                    'build/css/style.css': 'app/css/main.less'
                }
            }
        },
        injector: {
            options: {
                template: 'build/index.html',
                ignorePath: 'build'
            },
            build: {
                files: {
                    'build/index.html': vendorMinifiedJsFiles.concat(appJsFiles).concat(appCssFiles).concat([angularTemplateCache])
                }
            }
        },
        clean: {
            build: {
                src: ['build']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: appJsFiles
        }
    });


    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['jshint', 'clean:build', 'copy:build', 'ngtemplates', 'less:build', 'injector:build']);
    grunt.registerTask('dev', ['build', 'express:mock', 'watch']);
    grunt.registerTask('proxy', ['express:proxy', 'watch']);
};