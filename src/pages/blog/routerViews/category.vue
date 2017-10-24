/**
* Created by LinChuQiang on 2017/8/23.
*/
<template>
	<div>
		<Posts :posts = "content_c"></Posts>
		<aside class = "pagination">
			<button @click = "prevPage_m" :disabled = "prevDis_m()">前一页</button>
			<button @click = "nextPage_m" :disabled = "nextDis_m()">后一页</button>
			<span>{{ page_c }} / {{ pagetotal_c }}</span>
		</aside>
	</div>
</template>
<script>
	import{mapGetters, mapActions} from 'vuex'
	import * as type from '../store/constant'
	import {clone} from '../assist/utils'
	import Posts from '../components/posts.vue'
	
	export default {
		name      : 'category',
		data () {
			return {
				total: ''
			}
		},
		props     : [],
		components: {
			Posts
		},
		beforeRouteEnter(to, from, next){
			
			next(vm => {
				const {[type.FLT.config]: {categories}, $route: {params: {id}}} = vm
				const {name} = categories.find(category => category.id == id)
				document.title = `${name} - 文章分类`
				vm[type.UPD.headertitle](`${name} - 文章分类`)
			})
			
		},
		beforeCreate(){},
		created(){
			const {[type.FLT.config]: {title, categories}, $route: {params: {id}}, page_c, pagetotal_c} = this
			if (page_c > pagetotal_c) {
				this.$router.replace({name: 'categoryId', params: {id: id}})
			}
			
			const {name, count} = categories.find(category => category.id == id)
			this.total = count
			this.getCategories_m()
		},
		beforeMount(){},
		mounted(){},
		beforeUpdate(){},
		updated(){},
		watch     : {
			$route({name}, oldval){
				console.log(`$route watch:`, name)
				if (name === 'categoryPage') {
					this.getCategories_m()
				}
			}
		},
		computed  : {
			...mapGetters([type.FLT.config, type.FLT.categories]),
			content_c(){
				console.log(`content_c:`,)
				const {category_c, page_c} = this
				if (!category_c.posts) {
					return [];
				}
				return category_c.posts[page_c] || [];
			},
			category_c(){
				console.log(`category_c:`,)
				const {$route: {params: {id}}} = this
				const categories = this[type.FLT.categories]
				return categories[id] || {};
			},
			page_c(){
				console.log(`page_c:`, +this.$route.params.page || 1)
				return +this.$route.params.page || 1;
				
			},
			pagetotal_c(){
				console.log(`pagetotal_c:`,)
				if (this.$route === 'categoryId') {
					const {
						      [type.FLT.config]: {
							      categories,
							      per_page
						      },
						      $route           : {params: {id}}
					      } = this
					if (per_page === 0) {
						return 1;
					}
					const {count} = categories.filter(val => val.id == id)[0]
					return Math.ceil(count / per_page);
				}
				
			},
		},
		methods   : {
			...mapActions([type.UPD.categories, type.UPD.headertitle]),
			prevPage_m(){
				const baseUrl = {name: 'categoryId'}
				const prevUrl = {name: 'categoryPage', params: {page: this.page_c - 1}}
				if (this.page_c === 2) {
					this.$router.push(baseUrl)
				} else {
					this.$router.push(prevUrl)
				}
				
			},
			nextPage_m(){
				const nextUrl = {name: 'categoryPage', params: {page: this.page_c + 1}}
				this.$router.push(nextUrl)
			},
			prevDis_m(){
				return this.page_c <= 1;
			},
			nextDis_m(){
				return this.page_c >= this.pagetotal_c;
			},
			loadCategories_m(){
				const {$route: {params: {id}}, page_c} = this
				return this.$load(`categories/${id}/${page_c}`).then((res) => {
					return res;
				});
			},
			
			getCategories_m(){
				console.log(`getCategories_m:`,)
				const {$route: {params: {id}}, page_c} = this
				const categories = this[type.FLT.categories]
				const _categories = clone(categories)
				if (!categories[id]) {
					console.log(`getCategories_m1:`,)
					return this.loadCategories_m().then((res) => {
						const {name, posts} = res
						_categories[id] = {id, name, posts: {}}
						_categories[id].posts[page_c] = posts
						this[type.UPD.categories](_categories)
					});
				}
				if (!categories[id].posts[page_c]) {
					console.log(`getCategories_m2:`,)
					this.loadCategories_m().then((res) => {
						_categories[id].posts[page_c] = res.posts
						this[type.UPD.categories](_categories)
					})
				}
			}
		},
		filters   : {}
	}
</script>
<style scoped>

</style>

