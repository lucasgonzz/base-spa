export default {
	properties: [
		{
			key: 'products',
			text: 'Productos',
			type: 'search',
			store: 'product',
			belongs_to_many: {
				props_to_show: [
					{
						text: 'Nombree',
						key: 'name',	
						show: true,
					},
					{
						text: 'Precio',
						key: 'price',
						show: true,	
					},
				],
				properties_to_set: [
					{
						text: 'Cantidad',
						key: 'amount',
						value: 1,
					}
				],
			}
		},
	],
	singular_model_name_spanish: 'Venta',
	plural_model_name_spanish: 'Ventas',
	create_model_name_spanish: 'Nueva',
	text_delete: 'la',
}