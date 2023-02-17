export default [
	{
		model_name: 'product',
		path: '/productos',
		name: 'product',
		component: '@/views/Product',
		can: 'product.index',
	},
	{
		model_name: 'sale',
		path: '/productos',
		name: 'sale',
		component: '@/views/Sale',
		can: 'sale.index',
	},
	// {
	// 	text: 'ABM',
	// 	name: 'abm',
	// 	params: {
	// 		view: 'aseguradora',
	// 	},
	// },
	{
		model_name: 'employee',
		name: 'employee',
		path: '/empleados',
		component: '@/common-vue/views/Employee',
		check_is_owner: true,
	}
]