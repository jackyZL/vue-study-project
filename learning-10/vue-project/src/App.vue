<template>
	<div id="app">
		<loading v-show="loading"></loading>
		<NavView v-show="headerShow"></NavView>
		<transition name="slide-down">
			<keep-alive>  <!-- 如果当前状态ok，就保持现在状态 -->
				<router-view class="router-view"></router-view>
			</keep-alive>
		</transition>
		<FooterView></FooterView>
	</div>
</template>
<script>
	import NavView from './components/Nav.vue'
	import FooterView from './components/Footer.vue'

	import {mapGetters, mapActions} from 'vuex'

	export default{
		computed:mapGetters([
			'headerShow',
			'loading'
		]),
		watch:{
			$route(to,from){  //当路由发生变化的时候触发
				if(to.path=='/user-info'){
					this.$store.dispatch('hideHeader');  //this.$store 从 main.js 中来的
				}else{
					this.$store.dispatch('showHeader');
				}
			}
		},
		components:{
			NavView,
			FooterView
		}
	}
</script>
<style>
	@import './assets/css/index.css';
	.slide-down-enter-active,
	.slide-down-leave-active{
		transition: .4s all ease;
		opacity:0.2;
		transform: translate3d(0,6em,0);
	}
	.slide-down-enter,
	.slide-down-leave{
		opacity:1;
		transform: translate3d(0,6em,0);
	}
</style>