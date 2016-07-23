module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jsonlint: {
      pkg: {
        src: ['package.json']
      }
    },

    copy: {
      sources: {
        src: './src/temtory.js',
        dest: './dist/temtory-<%= pkg.version %>.js',
      }
    },

    eslint: {
      src: ['./dist/temtory-<%= pkg.version %>.js']
    },

    uglify:{
      build: {
        src: './dist/temtory-<%= pkg.version %>.js',
        dest: './dist/temtory-<%= pkg.version %>.min.js'
      },

      options: {
        mangle: true,
        beautify: false,
        preserveComments: false,
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsonlint');
  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask(
    'default',
    [
      'jsonlint',
      'copy',
      'eslint',
      'uglify'
    ]
  );
};
