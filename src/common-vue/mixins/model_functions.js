import dates from '@/common-vue/mixins/dates'
export default {
	methods: {
		getFunctionValue(prop, model) {
			return this[prop.function](model)
		},
		totalOrder(order) { 
			let total = 0
			let total_item = 0
			order.products.forEach(product => {
				total += this.totalProduct(product)
			})
			if (order.discount) {
				total -= total * order.discount / 100
			}
			return this.price(total)
		},
		totalProduct(product) {
			let price, total_product 
			if (product.pivot.price) {
				price = Number(product.pivot.price) 
			} else {
				price = Number(product.price) 
			}
			total_product = price * product.pivot.amount
			if (product.pivot.discount) {
				total_product -= total_product * product.pivot.discount / 100 
			}
			return total_product
		}
	}
}