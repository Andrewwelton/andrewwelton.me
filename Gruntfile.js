module.exports = function(grunt) {
	grunt.initConfig({
		bowerFiles: [
			"bower_components/jquery/dist/jquery.js",
			"bower_components/foundation/js/foundation.js"
		],

		closurecompiler: {
			minify: {
				files: {
					"dist/compiled.js": ["<%= bowerFiles %>", "src/app.js"]
				}
			},
			options: {
				"compilation_level": "SIMPLE_OPTIMIZATIONS",
				"max_processes": 5
			}
		},

		sass: {
			options: {
				outputStyle: "compressed",
				includePaths: ["bower_components/foundation/scss"],
				imagePath: "src/images"
			},
			dist: {
				files: {
					"dist/styles.css": ["src/base.scss"]
				}
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, flatten: true, src: ["src/*.html", "src/foundation-icons.woff", "src/foundation-icons.css"], dest: "dist/"},
					{expand: true, cwd:"src/",  src:["images/*"], dest: "dist/"},
				],
			},
			publish: {
				files: [
					{expand: true, flatten: true, src: ["dist/*", "src/images/"], dest: "../site/",},
					{expand: true, flatten: true, src: ["src/images/*"], dest: "../site/images/",}
				],
			}
		},
	});

	grunt.loadNpmTasks("grunt-closurecompiler");
	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-contrib-copy");

	grunt.registerTask("default", [
		"closurecompiler:minify",
		"sass",
		"copy:main"
	]);
	grunt.registerTask("publish", [
		"copy:publish"
	]);
};
