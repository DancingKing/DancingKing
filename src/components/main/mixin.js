export default{
	methods:{
		showChildren(item){
			return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
		}
	}
}