import * as types from './types'  /* es6 语法 */

export default {
	increment: ({
		commit
	}) => {
		commit(types.INCREMENT);
	},
	decrement: ({
		commit
	}) => {
		commit(types.DECREMENT);
	},
	clickOdd: ({
		commit,
		state
	}) => {
		if (state.mutations.count % 2 == 0) {  // 注意： 这里需要在state的mutations 中去取count，不是直接取。
			commit(types.INCREMENT);
		}
	},
	clickAsync: ({
		commit
	}) => {
		new Promise((resolve) => {
			setTimeout(function() {
				commit(types.INCREMENT);
			}, 1000);
		})
	}
}