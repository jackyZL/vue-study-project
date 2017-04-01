module.exports={
	entry:'./main.js',

	output:{
		path:__dirname, // node里面的当前路径
		filename:'build.js'
	},

	module:{
		loaders:[
			{test:/\.vue$/, loader:'vue'},  /* xxx.vue 文件，有vue-loader来编译成正常文件，多个loader，使用！ ，感叹号连接 */
			{test:/\.js$/, loader:'babel', exclude:/node_modules/}  /* 使用babel 解析 es6的js文件 */
		]
	},
	babel:{
		presets:['es2015'],
		plugins:['transform-runtime']
	}
};