<template>
	<div id = "app">
		<action-sheet></action-sheet>
		<search></search>
		<swiper :options = "swiperOption">
			<swiper-slide class = "swiper-item">
				<h1>1</h1>
			</swiper-slide>
			<swiper-slide class = "swiper-item">
				<h1>2</h1>
			</swiper-slide>
			<div class = "swiper-pagination" slot = "pagination"></div>
		</swiper>
		<!--迷你播放器-->
		<transition name="bar-slide">
			<div id="play-bar">
				<!--audio#music-->
				<audio id = "music" src="#" @timeupdate="timeupdate_m" @ended="ended_m" autoplay></audio>
				<!--歌曲封面-->
				<div class="play-bar-image-container">
					<img src="#" alt="#" class = "play-bar-image">
				</div>
				<!--歌曲名称-->
				<p class = "play-bar-text">
					name
				</p>
				<!--播放暂停-->
				<img src="#" alt="#" class = "play-bar-button">
			</div>
		</transition>
	</div>
</template>
<script>
	import ActionSheet from './components/ActionSheet'
	import Search from './components/Search'
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	const TAB_NAME = ['推荐', '排行榜']
	export default{
		data(){
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
				    paginationClickable: true,
				    paginationBulletRender(swiper, index, className){
						return `<span class="${className} swiper-pagination-bullet-custom">${TAB_NAME[index]}</span>`
				    }
				}
			}
		},
		components: {
			ActionSheet,
			Search,
			swiper,
			swiperSlide
		},
		methods:{
			timeupdate_m(){},
			ended_m(){},
		}
	}
</script>
<style lang="scss">
	
	*{
		margin: 0;
		padding:0;
	}
	html{
		overflow-x: hidden;
		background: #42b983;
	}
	body{
		display: flex;
		overflow-x: hidden;
	}
	/*主页样式*/
	#app{
		width: 100%;
		height: 100%;
		
		font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
		a{
			color: #42b983;
			text-decoration: none;
		}
	}
	
</style>