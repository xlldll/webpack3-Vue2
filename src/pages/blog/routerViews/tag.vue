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
	
	import {mapGetters, mapActions} from 'vuex'
	import * as type from '../store/constant'
	import {clone} from '../assist/utils'
	import Posts from '../components/posts.vue'
	export default {
		name      : 'tag',
		data () {
			return {
				total: ''
			}
		},
		props     : [],
		components: {
			Posts
		},
	    beforeRouteEnter(to,from,next){
			console.log(`路由进入:`, )
			next(vm=>{
				const {[type.FLT.config]: {tags}, routeId_c} = vm
			  console.log(`routeId_c:`, routeId_c)
			const {name} = tags.find(tag => tag.id == routeId_c)
			  		  console.log(`name:`, name)
				document.title = `${name} - 文章标签`
				vm[type.UPD.headertitle](`${name} - 文章标签`)
			 
			})
			
	    },
		beforeCreate(){},
		created(){
			const {[type.FLT.config]: {tags}, routeId_c, page_c, pagetotal_c} = this
			const {name, count} = tags.find(tag => tag.id == routeId_c)
			if (page_c > pagetotal_c) {
				this.$router.replace({name: 'tagId', params: {id: routeId_c}})
			}
			this.total = count
			this.getTags_m()
		},
		beforeMount(){},
		mounted(){},
		beforeUpdate(){},
		updated(){},
		watch     : {
			$route({name}, oldval){
				console.log(`$route watch:`, name)
				if (name === 'tagId' || name === 'tagPage') {
					this.getTags_m()
				}
			}
		},
		computed  : {
			...mapGetters([type.FLT.config, type.FLT.tags]),
			routeId_c(){
				return this.$route.params.id;
			},
			content_c(){
				const {tagsId_c, page_c} = this
				if (!tagsId_c.posts) {
					return [];
				}
				return tagsId_c.posts[page_c] || [];
			},
			tagsId_c(){
				const {$route: {params: {id}}} = this
				const tags = this[type.FLT.tags]
				return tags[id] || {};
			},
			page_c(){
				return +this.$route.params.page || 1;
			},
			pagetotal_c(){
				const {per_page, tags} = this[type.FLT.config]
				const {count} = tags.filter(tag => tag.id === this.routeId_c)[0] || {}
				if (count) {
					return Math.ceil(count / per_page);
				}
			},
		},
		methods   : {
			...mapActions([type.UPD.tags,type.UPD.headertitle]),
			prevPage_m(){
				const url = {name: 'tagId', params: {id: this.routeId_c}}
				const pageUrl = {name: 'tagPage', params: {id: this.routeId_c, page: this.page_c - 1}}
				return this.page_c === 2 ? this.router.push(url) : this.router.push(pageUrl);
			},
			nextPage_m(){
				const nextUrl = {name: 'tagPage', params: {id: this.routeId_c, page: this.page_c + 1}}
				return this.router.push(nextUrl);
			},
			prevDis_m(){
				return this.page_c <= 1;
			},
			nextDis_m(){
				return this.page_c >= this.pagetotal_c;
			},
			loadTags_m(){
				const {routeId_c, page_c} = this
				return this.$load(`tags/${routeId_c}/${page_c}`).then((res) => {
					return res;
				});
			},
			getTags_m(){
				const tags = this[type.FLT.tags];
				const {routeId_c, page_c} = this;
				const _tags = clone(tags)
				if (!tags[routeId_c]) {
					console.log(`getTags_m:`,)
					return this.loadTags_m().then((res) => {
						const {id, name, posts} = res
						_tags[id] = {id, name, posts: {}}
						_tags[id].posts[page_c] = posts
						console.log(`_tags:`, _tags)
						this[type.UPD.tags](_tags)
					})
				}
				
				if (!tags[routeId_c].posts[page_c]) {
					console.log(`getTags_m1:`,)
					
					this.loadTags_m().then((res) => {
						document.title = `【加载第二页】 ${res.name} - 标签`
					 
						_tags[routeId_c].posts[page_c] = res.posts
						this[type.UPD.tags](_tags)
					})
				}
				
			}
		},
		filters   : {}
	}
</script>
<style scoped>

</style>

