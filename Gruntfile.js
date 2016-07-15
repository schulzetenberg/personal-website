var fs = require('fs');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Check js for errors
    'jshint': {
      lib: [
        'lib/*.js'
      ]
    },

    'less': {
        // production config is also available
        theme: {
            options: {
                // Specifies directories to scan for @import directives when parsing.
                // Default value is the directory of the source, which is probably what you want.
                paths: ["lib/less/"],
            },
            files: {
                // compilation.css  :  source.less
                "public/css/aquatica.css": "lib/less/aquatica.less"
            }
        }
    },

    // Concatenate all files
    'concat': {
      options: {},
      styles: {
        src: [
          'node_modules/bootstrap/dist/css/bootstrap.min.css',
          'node_modules/font-awesome/css/font-awesome.min.css',
          'node_modules/flexslider/flexslider.css',
          'public/css/aquatica.css',
          'lib/css/font-cardo.css',
          'lib/css/custom.css'
        ],
        dest: 'public/css/styles.css',
        nonull: true
      },
      header: {
        src: [
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/angular/angular.min.js',
          'lib/js/google-analytics.js',
          'lib/js/loader.js',
          'node_modules/q/q.js',
          'node_modules/lodash/lodash.js',
          'node_modules/d3/build/d3.min.js',
          'node_modules/dimple/dist/dimple.latest.js'
        ],
        dest: 'public/js/header-plugins.js',
        nonull: true
      },
      footer: {
        src: [
          'node_modules/bootstrap/dist/js/bootstrap.min.js',
          'node_modules/flexslider/jquery.flexslider-min.js'
        ],
        dest: 'public/js/footer-plugins.js',
        nonull: true
      }
    },

    'uglify': {
      header: {
        src: 'public/js/header-plugins.js',
        dest: 'public/js/header-plugins.js'
      },
      footer: {
        src: 'public/js/footer-plugins.js',
        dest: 'public/js/footer-plugins.js'
      }
    },

    'cssmin': {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      styles: {
        files: {
          'public/css/styles.css': 'public/css/styles.css'
        }
      }
    },

    // Copy dependencies to public folder
    'copy': {
    fa: {
      nonull: true,
      expand: true,
      cwd: 'node_modules/font-awesome/fonts/',
      src: ['*.eot', '*.svg', '*.ttf', '*.woff', '*.woff2', '*.otf'],
      dest: 'public/fonts/'
    },
    bs: {
      nonull: true,
      expand: true,
      cwd: 'node_modules/bootstrap/fonts/',
      src: '**',
      dest: 'public/fonts/'
    }
  }

  });

  grunt.registerTask('default', ['jshint:lib', 'less:theme', 'concat:styles', 'concat:header', 'concat:footer', 'cssmin:styles', 'copy:fa', 'copy:bs']);

};
