export default {
	properties: [
		{
			key: 'images',
			text: 'Imagenes lindas',
			type: 'images',
			show: true,
		},
		{
			key: 'first_image',
			text: 'Primera imagen',
			type: 'image',
			show: true,
		},
		{
			key: 'name',
			text: 'Nombre',
			type: 'text',
			is_title: true,
			required: true,
		},
		{
			text: 'Precio',
			key: 'price',
			type: 'number',
			is_price: true,
			required: true, 
			show: true,
		},
		{
			text: 'Es bueno',
			key: 'is_good',
			type: 'checkbox',
			show: true,
		},
		{
			key: 'second_image',
			text: 'Segunda imagen',
			type: 'image',
			show: true,
		},
	],
	singular_model_name_spanish: 'Producto',
	plural_model_name_spanish: 'Productos',
	create_model_name_spanish: 'Nuevo',
	text_delete: 'el',
}