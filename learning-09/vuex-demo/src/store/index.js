/*  index.js 是必须要有的，用来导入 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import mutations from './mutations'
import actions from './actions'


export default new Vuex.Store({
	modules:{
		mutations  // import 导入的mutations 是一个模块(是一个{}包着的东西？？？)，所以要放在modules中，这应该是vuex的语法要求，需要去确认
	},
	actions
});