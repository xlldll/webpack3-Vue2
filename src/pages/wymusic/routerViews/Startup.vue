/**
* Created by LinChuQiang on 2017/9/25.
*/
<template>
	<div>
		<!--启动页-面板1-->
		<div class = "slider">
			<swiper :options = "swiperOption">
				<swiper-slide>
					<img src = "../img/banner1.jpg" alt = "banner1" class = "banner-item">
				</swiper-slide>
				<swiper-slide>
					<img src = "../img/banner2.jpg" alt = "banner2" class = "banner-item">
				</swiper-slide>
				<swiper-slide>
					<img src = "../img/banner3.jpg" alt = "banner3" class = "banner-item">
				</swiper-slide>
				<swiper-slide>
					<img src = "../img/banner4.jpg" alt = "banner4" class = "banner-item">
				</swiper-slide>
				<div class = "swiper-pagination" slot = "pagination"></div>
				<div class = "swiper-button-prev" slot = "button-prev"></div>
				<div class = "swiper-button-next" slot = "button-next"></div>
			</swiper>
		</div>
		
		<div class = "mainbody">
			<mu-card>
				<mu-card-header title = "推荐歌单" subTitle = "2017-09-09">
					<mu-avatar src = "http://localhost:3334/static/cloudmusic/aef.png" slot = "avatar" />
				</mu-card-header>
				<mu-grid-list :padding = "20" :cols = "4" :cellHeight = "190">
					
					<mu-grid-tile v-for = "item in topPlayList" :key = "item.id">
						<router-link :to = "{name:'playListDetail',params:{coverid:item.id,name:item.name,coverImg:item.coverImgUrl,creator:item.creator,count:item.playCount,desc:item.description}}">
							<img :src = "item.coverImgUrl + '?param=230y230' " :alt = "item.name">
						</router-link>
						<span slot = "title">{{item.name}}</span>
						<span slot = "subTitle">by <b>{{item.creator.nickname}}</b></span>
					</mu-grid-tile>
				
				</mu-grid-list>
			</mu-card>
			
			<mu-card>
				<mu-card-header title = "推荐MV" subTitle = "2017-09-09">
					<mu-avatar src = "http://localhost:3334/static/cloudmusic/aee.png" slot = "avatar" />
				</mu-card-header>
				<mu-grid-list :padding = "20" :cols = "4">
					<mu-grid-tile v-for = "tile, index in list" :key = "index">
						<router-link :to = "{name:'playListDetail'}">
							<img :src = "tile.image" alt = "tile.title">
						</router-link>
						<span slot = "title">{{tile.title}}</span>
						<span slot = "subTitle">by <b>{{tile.author}}</b></span>
					</mu-grid-tile>
				</mu-grid-list>
			</mu-card>
		
		</div>
	</div>
</template>
<style scoped = "true" lang = "scss">
	
	.slider {
		height: 336px;
		overflow: hidden;
		margin: 20px 0;
	}
	
	.swiper-slide {
		text-align: center;
	}
	
	.mainbody {
		margin: 50px 50px 100px;
		.mu-card {
			margin: 20px 0;
			overflow: hidden;
		}
	}
	
	/*推荐歌单*/
	.mu-grid-tile {
		text-align: center;
		
	}

</style>
<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import * as type from '../store/constant.js'
	import * as util from '../assist/utils'
	export default {
		name      : 'Startup',
		data () {
			return {
				swiperOption: {
					pagination         : '.swiper-pagination',
					paginationClickable: true,
					nextButton         : '.swiper-button-next',
					prevButton         : '.swiper-button-prev',
					spaceBetween       : 30
				},
				list        : [
					{
						image : 'http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170',
						title : 'Breakfast',
						author: 'Myron'
					}, {
						image : 'http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170',
						title : 'Burger',
						author: 'Linyu'
					}, {
						image : 'http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170',
						title : 'Camera',
						author: 'ruolin'
					}, {
						image : 'http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170',
						title : 'Hats',
						author: 'kakali'
					}, {
						image : 'http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170',
						title : 'Honey',
						author: 'yuyang'
					}, {
						image : 'http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170',
						title : 'Morning',
						author: 'mokayi'
					}, {
						image : 'http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170',
						title : 'Vegetables',
						author: 'NUyyyyyyy'
					}, {
						image : 'http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170',
						title : 'water',
						author: 'TDDyyyyyyy'
					}],
				isloading   : true,
				topPlayList : []
			}
		},
		props     : [],
		components: {
			swiper,
			swiperSlide
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
		created(){
			this.getSongLists_m();
		},
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
		methods   : {
			getSongLists_m(){
				this.$load('http://musicapi.duapp.com/api.php', '?type=topPlayList&cat=全部&offset=0&limit=8').then((res) => {
					this.isloading = false;
					this.topPlayList = res.playlists
					// console.log(`playlists:`, res.playlists)
					
				})
			},
		},
		filters   : {}
	}
</script>

