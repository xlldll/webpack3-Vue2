/**
* Created by LinChuQiang on 2017/8/21.
*/
<template>
	<div>
		<Posts :posts = "contents_c"></Posts>
		<aside class = "pagination">
			<button @click = "prevPage_m" :disabled = "prevDis_m()">前一页</button>
			<button @click = "nextPage_m" :disabled = "nextDis_m()">后一页</button>
			<span>{{ page_c }} / {{ total_c }}</span>
		</aside>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
	import * as type from '../store/constant.js'
	import {clone} from '../assist/utils'
	
	import Posts from '../components/posts.vue'
	export default {
		name      : 'home',
		data () {
			return {}
		},
		props     : {},
		components: {
			Posts
		},
		beforeRouteEnter(to, from, next){
			console.log(`home_to:`, to)
			console.log(`home_from:`, from)
			next(vm=>{
				vm[type.UPD.headertitle]("NodeJs博客列表")
			});
		},
		beforeRouteUpdate (to, from, next) {
			console.log(`home_to:`, to)
			console.log(`home_from:`, from)
			next();
		},
		beforeRouteLeave (to, from, next) {
			console.log(`home_to:`, to)
			console.log(`home_from:`, from)
			next();
		},
		beforeCreate(){},
		created(){
			const {page_c, total_c, [type.FLT.config]: {title}} = this
			const posts = this[type.FLT.posts]
			const _posts = clone(posts)
			document.title = title
			if (page_c > total_c) {
				return this.$router.replace('/')
			}
			if (posts[page_c]) {
				return
			}
			// blog/mock/page/1 的五篇文章图文信息
			this.$load(`page/${page_c}`).then((res) => {
				_posts[page_c] = res
				// console.log(`created csl:`, _posts)
				this[type.UPD.posts](_posts)
			})
		},
		beforeMount(){},
		mounted(){},
		beforeUpdate(){},
		updated(){},
		watch     : {
			page_c(){
				this.getPosts_m()
			}
		},
		computed  : {
			// 1. 获得初始数据——config、posts
			...mapGetters([type.FLT.config, type.FLT.posts]),
			// 2. 当前页码
			page_c(){
				return +this.$route.params.page || 1;
			},
			// 3. 总页码
			total_c(){
				const {posts, per_page} = this[type.FLT.config]
				if (per_page === 0 || posts.length === 0) {
					return 1;
				}
				return Math.ceil(posts.length / per_page);
			},
			// 4. Posts内容
			contents_c(){
				const posts = this[type.FLT.posts]
				const {page_c} = this
				// console.log(`获取内容中`,posts)
				return posts[page_c];
			}
			
		},
		methods   : {
			...mapActions([type.UPD.posts,type.UPD.headertitle]),
			// 1.前一页
			prevPage_m(){
				const home = {name: 'home'}
				const homePage = {name: 'homePage', params: {page: this.page_c - 1}}
				this.$router.push(this.page_c === 2 ? home : homePage)
			},
			// 2.后一页
			nextPage_m(){
				this.$router.push({name: 'homePage', params: {page: this.page_c + 1}})
			},
			// 3.禁止上一页
			prevDis_m(){
				return this.page_c <= 1
			},
			// 4.禁止下一页
			nextDis_m(){
				return this.page_c >= this.total_c
			},
			// 5.重新获取下一页的文章列表
			getPosts_m(){
				const {
					      page_c,
					      [type.FLT.config]: {title}
				      } = this
				const posts = this[type.FLT.posts]
				if (posts[page_c]) {
					document.title = `【已缓存】 ${title}`
					return
				}
				
				const _posts = clone(posts)
				this.$load(`page/${page_c}`).then((res) => {
					_posts[page_c] = res
					this[type.UPD.posts](_posts)
				})
			}
		},
		filters   : {}
	}
</script>
<style scoped>

</style>

