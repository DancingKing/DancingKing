<template>
	<el-menu @select="handleSelect" default-active="activeIndex" class="el-menu-vertical-demo" background-color="#545c64"
	 text-color="#fff" active-text-color="#ffd04b">
		<template v-for="item in menuList" >
			<template v-if="item.children && item.children.length === 1">
				<menu-item v-if="showChildren(item)" :parent-item="item"></menu-item>
				<el-menu-item v-else :index="item.index">{{item.children[0].meta.title}}</el-menu-item>
			</template>
			<template v-else>
				<menu-item v-if="showChildren(item)" :parent-item="item"></menu-item>
				<el-menu-item v-else :index="item.index">{{item.meta.title}}</el-menu-item>
			</template>			
		</template>		
	</el-menu>
</template>

<script>
	import mixin from './mixin.js'
	import menuItem from './menuItem.vue'
	export default{
		name:'submenu',
		mixins:[mixin],
		components:{
			menuItem
		},
		props:{
			menuList:{
				type:Array,
				default:() => []
			},
			activeIndex:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			handleSelect(){
				
			},
		}
	}
</script>

<style>
</style>
