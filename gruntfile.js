module.exports = function(grunt){

//grab only one -> 'JS/script.js'
//grab everything in the folder JS

grunt.initConfig({
	// concat: {
	// 	// js: {
	// 	// 	src:['js/*.js']
	// 	// 	dest: 'build/scripts.js'
	// 	// },
	// 	// css: {
	// 	// 	src:['css/*.css']
	// 	// 	dest: 'build/styles.css'
	// 	// },
	// }
	less: {
		development: {
			options: {
				paths: ['css'],
				sourceMap: false
			},
			files: {
				'css/main.css': 'css/main.less'
			}
		}
	},
	watch: {
		css: {
			files: 'css/*.less',
			tasks: ['styles']
		  }
	  }
	
});

grunt.registerTask('styles', ['less']);
grunt.registerTask('watch', ['less']);

// grunt.registerTask('concat-js'[concat:js]);
// grunt.registerTask('concat-css'[concat:css]);



grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');

};

/*grunt.registerTask('run', function(){
console.log('i am runing')
});

grunt.loadNpmTasks('grunt-contrib-less');

grunt.registerTask('all', ['run', 'test'])*/ 
