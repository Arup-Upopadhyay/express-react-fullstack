const webpackConfig = require('./webpack.config.js');
const path = require('path');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            options: {
                configFile: 'conf/eslint.json'
            },
            target: ['src/**/*.js']
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd:'dist', src:'**', dest: 'public/'},
                ]
            }
        },
        webpack: {
            options: {
                stats: {
                    colors: true,
                    performance: false
                }
            },
            prod: webpackConfig,
            dev: Object.assign({ watch: false }, webpackConfig)
        },
        clean: ['dist','public/*'],
        prettier: {
            options: {
                singleQuote: true,
                useTabs: true
            },
            files: {
                'dest/default_options': ['/src/**/*.js'],
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js','server/**/*.js'],
                tasks: ['build'],
                options: {
                    interrupt: true,
                    debounceDelay: 250,
                    reload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-prettier');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('test', ['eslint']);
    grunt.registerTask('build', ['clean','prettier','webpack','copy','watch']);
};
