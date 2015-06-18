module.exports = function(grunt) {

   var sourcesFiles = [
      'src/intro.js',
      'src/core.js',
      'src/tonumber.js',
      'src/topercent.js',
      'src/tocurrency.js',
      'src/todate.js',
      'src/helpers/intro.js',
      'src/helpers/format.js',
      'src/helpers/date.js',
      'src/exports.js'
   ];

   grunt.initConfig({
      'pkg': grunt.file.readJSON('package.json'),
      'concat': {
         'dist': {
            'src': sourcesFiles,
            'dest': 'parse.js'
         }
      },
      'http-server': {
         'dev': {
            'port': 5000,
            'root': '/apps/ParseJS/'
         }
      },
      'jshint': {
         'files': ['gruntfile.js', 'parse.js']
      },
      'karma': {
         'unit': {
            'configFile': 'tests/tests.config.js'
         }
      },
      'uglify': {
         'options': {
            'sourceMap': true,
            'sourceMapName': 'parse.map'
         },
         'dist': {
            'files': {
               'parse.min.js' : ['<%= concat.dist.dest %>']
            }
         }
      },
      'watch': {
         'files': ['gruntfile.js', 'src/**/*.js', 'tests/**/*.js'],
         'tasks': ['concat', 'uglify', 'jshint', 'karma']
      }
   });

   // Loads the packages
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-http-server');
   grunt.loadNpmTasks('grunt-karma');

   // Register tasks
   grunt.registerTask('default', ['concat', 'uglify', 'jshint', 'karma', 'watch']);
   grunt.registerTask('dist', ['concat', 'uglify']);
   grunt.registerTask('tests', ['jshint', 'karma']);
   grunt.registerTask('tests-client', ['http-server']);
};
