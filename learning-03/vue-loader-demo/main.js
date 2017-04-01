import Vue from 'vue'
import App from './App.vue'


/*  xx.vue文件，就需要vue-loader来读懂，然后通过webpack来编译成浏览器能够看得懂的东西 */

new Vue({
	el:'body',
	components:{
		app:App
	}
});

