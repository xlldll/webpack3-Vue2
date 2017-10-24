/**
* Created by LinChuQiang on 2017/8/22.
*/
<template>
	<ul>
		<li v-for = "post in posts">
			<h2>
				<router-link :to = "{name:'post',params:{id:post.id}}">{{ post.title}}</router-link>
			</h2>
			<p v-html = "post.summary"></p>
			<p>{{ post.created | timeFormat}}</p>
		</li>
	</ul>
</template>
<style lang = "scss" scoped>
	ul {
		width: 70%;
		margin: 0 auto;
		li {
			padding: 20px 0;
			
			list-style: none;
			
			border-bottom: 1px solid #e7e1cd;
			a {
				color: black;
				text-decoration: none;
				&:hover {
					color: #00a2ed;
				}
				transition: color 500ms;
			}
			p {
				font-size: 14px;
				line-height: 1.5;
			}
			p:last-child {
				font-size: 10px;
				color: #e7e1cd;
			}
		}
	}
</style>
<script>
	export default {
		name      : 'posts',
		data () {
			return {}
		},
		props     : ['posts'],
		components: {},
	  	beforeRouteEnter(to, from, next){
			console.log(`to:`, to)
			console.log(`from:`, from)
			next();
		},
		beforeRouteUpdate (to, from, next) {
			console.log(`to:`, to)
			console.log(`from:`, from)
			next();
		},
		beforeRouteLeave (to, from, next) {
			console.log(`to:`, to)
			console.log(`from:`, from)
			next();
		},
		beforeCreate(){},
		created(){},
		beforeMount(){},
		mounted(){},
		beforeUpdate(){},
		updated(){},
		watch     : {},
		computed  : {},
		methods   : {},
		filters   : {}
	}
</script>
<style scoped>

</style>

