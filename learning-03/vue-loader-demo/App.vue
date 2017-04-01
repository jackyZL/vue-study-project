<template>
	<h1>welcome Vue</h1>
	<h2 @click="change">{{msg}}</h2>cpom
	<my-menu></my-menu>
</template>
<script>
	import Menu from './components/Menu.vue'

	export default {  // 这里的导出，其实是为了在本 xx.vue文件中 template标签中使用的
		data(){
			return {
				msg:'welcome Vue ^_^'
			}
		},
		methods:{
			change(){
				console.log("click-------===>");
				this.msg='nihaoya '
			}
		},
		components:{
			'my-menu':Menu
		}	
	}
</script>
<style>
	body{
		background: #ccc
	}
</style>