import {
	getMenuByRouter
} from '@/utils/util.js'
import router from '@/router'
import routes from '@/router/router'
export default{
	state:{
		
	},
	getters:{
		menuList:(state,getters,rootState) => getMenuByRouter(routes, rootState.user.access)
	},
	mutations:{},
	actions:{}
}