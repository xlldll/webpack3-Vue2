/**
* Created by LinChuQiang on 2017/9/29.
*/
<template>
	<div class = "comments">
		<ul class = "animation-style-4">
			<li>
				<img src = "http://localhost:3334/static/cloudmusic/default_cover.png" alt = "#">
				<div class = "info">
					<h3>title</h3>
					<p>subtitle</p>
				</div>
				<span>number</span>
			</li>
			<li>
				<img src = "http://localhost:3334/static/cloudmusic/default_cover.png" alt = "#">
				<div class = "info">
					<h3>titletitletitle</h3>
					<p>subtitlesubtitlesubtitle</p>
				</div>
				<span>number</span>
			</li>
			<li>
				<img src = "http://localhost:3334/static/cloudmusic/default_cover.png" alt = "#">
				<div class = "info">
					<h3>titletitletitle</h3>
					<p>subtitlesubtitlesubtitle</p>
				</div>
				<span>number</span>
			</li>
			<li>
				<img src = "http://localhost:3334/static/cloudmusic/default_cover.png" alt = "#">
				<div class = "info">
					<h3>titletitletitle</h3>
					<p>subtitlesubtitlesubtitle</p>
				</div>
				<span>number</span>
			</li>
			<li>
				<img src = "http://localhost:3334/static/cloudmusic/default_cover.png" alt = "#">
				<div class = "info">
					<h3>titletitletitle</h3>
					<p>subtitlesubtitlesubtitle</p>
				</div>
				<span>number</span>
			</li>
			<li>
				<img src = "http://localhost:3334/static/cloudmusic/default_cover.png" alt = "#">
				<div class = "info">
					<h3>titletitletitle</h3>
					<p>subtitlesubtitlesubtitle</p>
				</div>
				<span>number</span>
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
				padding: 2.5% 0;
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
					flex-flow: 0;
					flex-shrink: 0;
					flex-basis: 68%;
					align-self: auto;
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
		beforeMount(){},
		mounted(){},
		beforeUpdate(){},
		updated(){},
		activated(){},
		deactivated(){},
		beforeDestroy(){},
		destroyed(){},
		watch     : {},
		computed  : {},
		methods   : {},
		filters   : {}
	}
</script>

