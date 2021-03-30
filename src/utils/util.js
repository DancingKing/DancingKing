export const hasChild = (item) => {
  return item.children && item.children.length !== 0
}
export const getMenuByRouter = (list,access) => {
	let res = []
	console.log(123,list)
	list.forEach(item => {
		if(!item.meta || (item.meta && !item.meta.hideInMenu)){
			console.log(item)
			let obj = {
				icon:(item.meta && item.meta.icon) || '',
				name: item.name,
				index:item.meta.index,
				meta: item.meta
			}
			if(hasChild(item)){
				obj.children = getMenuByRouter(item.children,access)
			}
			if(item.meta){
				obj.href = item.meta.href?item.meta.href:''
				res.push(obj)
				console.log(res)
			}
		}
	})
	return res
}