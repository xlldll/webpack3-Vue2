/**
* Created by LinChuQiang on 2017/8/21.
*/
<template>
	<div class = "categories">
		<div class = "cover">
			<router-link v-for = "category in categories_c" :key = "category.id"  :to="{name:'categoryId',params:{id:0}}" :style = "`background-image: url('https://unsplash.it/270/374/?gravity=east&random=${category.id}');`">
				<h4>{{ category.name }}</h4>
				<p>{{ category.count }} Posts</p>
			</router-link>
		</div>
	</div>
</template>
<style scoped = "true" lang = "scss">
	.categories {
		position: relative;
		
		.cover {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			align-items: center;
			width: 70%;
			margin: 0 auto;
			a {
				display: inline-block;
				position: relative;
				width: 270px;
				height: 374px;
				color: black;
				
				background-color: #f7f7f7;
				text-decoration: none;
				box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .27);
				h4 {
					position: absolute;
					bottom: 25px;
					left: 20px;
					color: white;
				}
				p {
					position: absolute;
					bottom: 5px;
					left: 20px;
					color: white;
				}
				&:before {
					position: absolute;
					top: 0;
					left: 0;
					content: "";
					width: 100%;
					height: 100%;
					background-color: rgba(0, 0, 0, .27);
				}
				&:after {
					position: absolute;
					top: 5%;
					left: 5%;
					content: "";
					width: 90%;
					height: 90%;
					border: 1px solid rgba(255, 255, 255, .6);
				}
				&:hover {
					&:after {
						border: 2px solid rgba(255, 255, 255, .9);
					}
				}
			}
		}
		
	}

</style>

<script>
	import{mapGetters, mapActions} from 'vuex'
	import * as type from '../store/constant'
	
	export default {
		name      : 'categories',
		data () {
			return {}
		},
		props     : [],
		components: {},
	    beforeRouteEnter(to,from,next){
			next(vm=>{
				document.title=`文章分类 - ${vm[type.FLT.config].title}`
			    vm[type.UPD.headertitle]('文章分类 - Categories')
			})
			
	    },
		beforeCreate(){},
		created(){},
		beforeMount(){},
		mounted(){},
		beforeUpdate(){},
		updated(){},
		watch     : {},
		computed  : {
			...mapGetters([type.FLT.config]),
			categories_c(){
				const {[type.FLT.config]: {categories}} = this
				return categories;
			}
		},
		methods   : {
			...mapActions([type.UPD.headertitle])
		},
		filters   : {}
		
	}
</script>

