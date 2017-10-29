/**
* Created by LinChuQiang on 2017/9/29.
*/
<template>
	<div class = "comments">
		<ul class = "animation-style-4">
			
			<li v-for = "( hotcomment,index ) in FLThotComments" :key = "'hot' + index">
				<img :src = "hotcomment.avatarUrl" :alt = "hotcomment.nickname">
				<div class = "info">
					<h3>{{ hotcomment.nickname }}</h3>
					<p>{{ hotcomment.content }}</p>
					<p>{{ hotcomment.time | date}}</p>
				</div>
				<p><span class="fa fa-heart animation-style-5"></span>{{ hotcomment.likedCount }}</p>
			</li>
			
			<li v-for = "( comment,index ) in FLTcomments" :key = "'comment' + index">
				<img :src = "comment.avatarUrl" :alt = "comment.nickname">
				<div class = "info">
					<h3>{{ comment.nickname }}</h3>
					<p>{{ comment.content }}</p>
					<p>{{ comment.time | date}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<style scoped = "true" lang = "scss">
	.comments {
		height: 85%;
		margin: 0;
		padding: 0;
		ul {
			height: 100%;
			overflow-x: hidden;
			overflow-y: scroll;
			margin: 0;
			padding: 0;
			
			li {
				display: flex;
				flex-flow: row nowrap;
				justify-content: flex-start;
				align-content: center;
				align-items: center;
				
				margin: 0;
				padding: 0.5% 0;
				border-bottom: 1px solid #3f3d34;
				
				color: white;
				background: #4a473c;
				font-size: 1.5rem;
				font-weight: 400;
				
				cursor: pointer;
				
				img {
					width: 10%;
					height: 10%;
					border-radius: 50%;
					margin: 0 5%;
				}
				.info {
					order: 0;
					flex-grow: 0;
					flex-shrink: 0;
					flex-basis: 70%;
					align-self: auto;
					
					margin-right: 3%;
				}
				.fa-heart{
					color: darkred;
				}
				span {
					align-self: center;
				}
			}
		}
	}
</style>
<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import * as type from '../store/constant.js'
	import * as util from '../assist/utils'
	export default {
		name      : 'Comments',
		data () {
			return {}
		},
		props     : [],
		components: {},
		beforeRouteEnter(to, from, next){
			next()
		},
		beforeRouteUpdate (to, from, next) {
			next()
		},
		beforeRouteLeave (to, from, next) {
			next()
		},
		beforeCreate(){},
		created(){},
		beforeMount(){
			console.log(`FLThotComments:`, this[type.FLT.hotComments])
			console.log(`FLThotComments:`, this[type.FLT.comments])
		},
		mounted(){},
		beforeUpdate(){},
		updated(){},
		activated(){},
		deactivated(){},
		beforeDestroy(){},
		destroyed(){},
		watch     : {},
		computed  : {
			...mapGetters([
				type.FLT.hotComments,
				type.FLT.comments,
			])
		},
		methods   : {},
		filters   : {
			date: function(val) {
				let date = new Date(val);
				let year = date.getFullYear() + '-';
				let month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				let day = (date.getDay()<10 ? '0'+date.getDay() :date.getDay()) + ' ';
				let hour = date.getHours() + ':';
				let minutes = date.getMinutes() + ':';
				let second = date.getSeconds();
				return year + month + day + hour + minutes + second;
			}
		}
	}
</script>

