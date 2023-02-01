<template>
	<div>
		<b-form-checkbox
		v-for="model_checkbox in modelsStoreFromName(prop.store)"
		:key="model_checkbox.id"
		:value="model_checkbox.id"
		v-model="model[prop.key+'_id']">
			{{ model_checkbox.name }}
		</b-form-checkbox>
	</div>
</template>
<script>
export default {
	props: {
		model: Object,
		prop: Object,
	}
}
</script>