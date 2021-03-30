<template>
	<el-container>
		<el-aside width="200px">
			<sub-menu ref="subMenu" :default-active="$route.meta.index" :menuList = "menuList" >
				
			</sub-menu>			
		</el-aside>
		<el-container>
			<el-header>
				头部
			</el-header>
			<el-main>
				主体
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import subMenu from './submenu.vue'
	import {mapMutations,mapActions,mapGetters} from 'vuex'
	export default{
		name:'Main',
		components:{
			subMenu
		},
		computed:{
			menuList(){
				console.log(12121212)
				console.log(this.$store.getters.menuList)
				return this.$store.getters.menuList
			},
		},
		data(){
			return{
				activeIndex:"1-1"
			}
		}
	}
</script>

<style>
	
</style>
