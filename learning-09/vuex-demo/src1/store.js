import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
	count: 10
};

const mutations = {
	increment(state) { //处理状态(数据)变化
		state.count++;
	},
	decrement(state) {
		state.count--;
	}
};

const actions = {
	increment: ({ //处理你要干什么，异步请求，判断，流程控制
		commit  // 此时的commit为 点击时，传递过来的对象， 使用的是解构的语法。将传递过来的对象中的commit取出来
	}) => {
		commit('increment')  // 需要把App.vue中对应的 increment函数，commit给mutations
	},
	decrement: ({
		commit
	}) => {
		commit('decrement');
	},
	clickOdd: ({
		commit,
		state
	}) => {
		if (state.count % 2 == 0) {
			commit('increment')
		}
	},
	clickAsync: ({
		commit
	}) => {
		new Promise((resolve) => {
			setTimeout(function() {
				commit('increment');

				resolve();
			}, 1000);
		});
	}
};

const getters = {
	count(state) {  // count是一个函数
		return state.count;
	},
	getOdd(state) {
		return state.count % 2 == 0 ? '偶数' : '奇数';
	}
};


//需要导出Store对象
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});