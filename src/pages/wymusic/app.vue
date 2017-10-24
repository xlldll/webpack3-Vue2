/**
* Created by LinChuQiang on 2017/9/2.
*/
<template>
	<!--根布局页-->
	<div id = "page">
		<transition name = "slide-fade">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
		<miniPlayer v-show="ifshowMini"></miniPlayer>
	</div>
</template>
<style lang = "scss">
	/*rem 10 ÷ 16 × 100% = 62.5%*/
	html {
		font-size: 62.5%;
	}
	#page{
		position: relative;
	}
	.material-icons {
		font-family: 'Material Icons';
		font-weight: normal;
		font-style: normal;
		font-size: 24px;
		line-height: 1;
		letter-spacing: normal;
		text-transform: none;
		display: inline-block;
		white-space: nowrap;
		word-wrap: normal;
		direction: ltr;
		font-feature-settings: 'liga';
	}
	
	/*过渡的-CSS-类名*/
	.slide-fade-enter-active,
	.slide-fade-leave-active {
		transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide-fade-enter,
	.slide-fade-leave-to {
		transform: translateX(10px);
		opacity: 0;
	}
	
	/*请输入搜索内容*/
	.appbar-search-field {
		margin-bottom: 0;
		color: #FFF;
		&.focus-state {
			color: #FFF;
		}
		.mu-text-field-hint {
			color: #FFF;
		}
		.mu-text-field-input {
			color: #FFF;
		}
		.mu-text-field-line {
			background-color: #999;
		}
		.mu-text-field-focus-line {
			background-color: #FFF;
		}
	}
	

</style>
<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import * as type from './store/constant.js'
	import * as util from './assist/utils'
	import miniPlayer from './components/miniPlayer.vue'
	export default {
		name      : 'app',
		data () {
			return {}
		},
		props     : [],
		components: {
			miniPlayer
		},
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
		watch     : {},
		computed  : {
			...mapGetters([
					type.FLT.songList,
					type.FLT.showMiniAudio
			])
		},
		methods   : {
			ifshowMini(){
				return this[type.FLT.songList].length > 0 && !this[type.FLT.showMiniAudio]
			}
		},
		filters   : {}
	}
</script>

