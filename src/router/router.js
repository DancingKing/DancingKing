import Main from "@/components/main/main.vue"
export default [
	{
		path:'/login',
		name:'login',
		meta:{
			title:'Login - 登录',
			hideInMenu: true
		},
		component: () => import('@/view/login/login.vue')
	},
	{
	  path: '/',
	  name: '_home',
	  redirect: '/home',
	  component: Main,
	  meta: {
	    hideInMenu: true,
	    notCache: true
	  },
	  children: [
	    {
	      path: '/home',
	      name: 'home',
	      meta: {
	        hideInMenu: true,
	        title: '首页',
	        notCache: true,
	        icon: 'md-home'
	      },
	      component: () => import('@/components/approval/myapply.vue')
	    }
	  ]
	},
	{
		path:'/approval',
		name:'approval',
		meta:{
			title:'报账门户',
			icon:'',
			index:'1'
		},
		component:Main,
		children:[
			{
				path:'myapply',
				name:'myapply',
				meta:{
					title:'我的申请',
					index:'1-1'
				},
				component: () => import('@/components/approval/myapply.vue')
			},
			{
				path:'uncompleted',
				name:'uncompleted',
				meta:{
					title:'未完成',
					index:'1-2'
				},
				component: () => import('@/components/approval/myapply.vue')
			},
		]		
	},
]