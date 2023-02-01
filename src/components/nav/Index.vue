<template>
	<nav-component
	:routes="routes"></nav-component>
</template>
<script>
export default {
	components: {
		NavComponent: () => import('@/common-vue/components/nav/Index')
	},
	computed: {
		routes() {
			return [
				{
					model_name: 'product',
				},
				{
					model_name: 'sale',
				},
			]
		},
	},
}
</script>