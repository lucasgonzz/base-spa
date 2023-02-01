<template>
<view-component
show_filter_modal
previus_days
model_name="sale"></view-component>	
</template>
<script>
export default {
	components: {
		ViewComponent: () => import('@/common-vue/components/view/Index')
	}
}
</script>