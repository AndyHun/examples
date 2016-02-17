module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'grunt-contrib-uglify/src/*.js',
        dest: 'build/grunt-contrib-uglify/index.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  // not need to load tasks manually, load-grunt-tasks will help auto load all tasks which are defined in package.json [dev]dependencies
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};