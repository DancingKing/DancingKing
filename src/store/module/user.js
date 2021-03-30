export default {
	state: {
		userName: '',
		userId: '',
		userImg: '',
	},
	getters: {

	},
	mutations: {
		setUserName(state, name) {
			state.userName = name
		},
		setUserId(state, id) {
			state.userId = id
		},
		setUserImg(state, img) {
			state.img = img
		}
	},
	actions: {}
}
