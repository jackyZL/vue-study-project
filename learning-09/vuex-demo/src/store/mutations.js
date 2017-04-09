import {
	INCREMENT,
	DECREMENT
} from './types'
import getters from './getters'

const state = {
	count: 20
};

const mutations = {
	[INCREMENT](state) {  /* INCREMENT 是一个import的变量，需要用方括号括起来，才能使用 */
		state.count++;
	},
	[DECREMENT](state) {
		state.count--;
	}
};

export default {
	state,
	mutations,
	getters
}