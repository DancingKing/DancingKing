<template>
	<el-submenu :index="parentIndex">
		<template slot="title">
			<i class="el-icon-location"></i>
			<span slot="title">{{parentItem.meta.title}}</span>
		</template>
		<template v-for="item in children" >
			<template v-if="item.children && item.children.length === 1">
				<menu-item v-if="showChildren(item)" :parent-item="item"></menu-item>
				<el-menu-item v-else :index="item.index">{{item.children[0].meta.title}}</el-menu-item>
			</template>
			<template v-else>
				<menu-item v-if="showChildren(item)" :parent-item="item"></menu-item>
				<el-menu-item v-else :index="item.index">{{item.meta.title}}</el-menu-item>
			</template>
		</template>
	</el-submenu>
</template>

<script>
	import mixin from './mixin.js'
	export default {
		name:'menuItem',
		mixins:[mixin],
		props: {
			parentItem: {
				type: Object,
				default: () => {}
			}
		},
		computed: {
			parentIndex() {
				return this.parentItem.index
			},
			parentName() {
				return this.parentItem.name
			},
			children() {
				return this.parentItem.children
			}
		}
	}
</script>

<style>
</style>
