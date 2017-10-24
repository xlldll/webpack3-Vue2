/**
* Created by LinChuQiang on 2017/9/22.
*/
<template>
	<!--迷你播放器-->
	<div class = "foot">
		<div class = "player-mini">
			<audio id = "audioPlay" :src = "audio_c.location" @timeupdate = "timeUpd_m" @canplay = "canPlay_m" @error = "audioErr_m" @ended = "ended_m" />
			<div class = "cover" @click = "coverClk_m">
				<mu-circular-progress v-show = "FLTloading" mode = "determinate" :size = "40" :value = "progval" />
				<img v-show = "!FLTloading" :src = "audio_c.albumPic + '?param=40y40'" :alt = "audio_c.name">
			</div>
			<div class = "info">
				<div class = "name xmpname">{{ FLTaudio.name }}</div>
				<div class = "artist xmpartist">{{ FLTaudio.singer }}</div>
			</div>
			<div class = "control">
				<mu-icon-button class = "mini-btn player-list" @click = "showList_m" />
				<mu-icon-button class = "mini-btn player" @click = "toggPlay_m" :class = "{pause:!FLTplaying}" />
				<mu-icon-button class = "mini-btn next" @click = "nextSong_m" />
			</div>
			<div class = "songProg">
				<div class = "pro-load proload" :style = "{'-webkit-transform':'translateX('+ FLTprBufferedTime +'%)'}"></div>
				<div class = "pro-play proplay" :style = "{'-webkit-transform':'translateX('+ FLTprCurrentTime +'%)'}"></div>
			</div>
		</div>
		<songLists ref = "songLists"></songLists>
	</div>
</template>
<style scoped = "true" lang = "scss">
	/*迷你播放器*/
	.foot {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 911;
		
		width: 100%;
		
	}
	
	.player-mini {
		position: relative;
		width: 100%;
		height: 5.1rem;
		
		background-color: rgba(205, 200, 200, .9);
		color: #333333;
		
		.cover {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			align-content: center;
			
			float: left;
			width: 5rem;
			height: 5rem;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
		
		.info {
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: flex-start;
			align-content: center;
			
			float: left;
			width: 15rem;
			height: 5rem;
			padding-left: 1rem;
			
			overflow: hidden;
			
			.name, .artist {
				display: block;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.name {
				font-weight: 600;
				font-size: 1.5rem;
				line-height: 1.8rem;
			}
			.artist {
				font-weight: 500;
				color: #8a8a8a;
				font-size: 1rem;
				line-height: 1.5rem;
			}
		}
		
		.control {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			align-content: center;
			
			float: right;
			height: 5rem;
			overflow: hidden;
			
			.mini-btn {
				width: 5rem;
				height: 5rem;
			}
		}
		
		/*迷你播放器-进度条*/
		.songProg {
			position: absolute;
			left: 0;
			bottom: 0;
			
			width: 100%;
			height: 1.6px;
			
			background-color: rgba(255, 255, 255, .5);
			
			.pro-load, .pro-play {
				position: absolute;
				left: -100%;
				width: 100%;
				height: .1rem;
			}
			.pro-load {
				background-color: rgba(0, 0, 0, .9);
				transform: translateX(50%);
			}
			.pro-play {
				background-color: rgba(255, 0, 0, .9);
				transform: translateX(10%);
			}
		}
		
	}
	
	.player-list {
		background: url("http://localhost:3334/static/cloudmusic/playbar_btn_playlist.png") no-repeat !important;
		background-size: contain !important;
		
	}
	
	.player {
		background: url("http://localhost:3334/static/cloudmusic/playbar_btn_play.png") no-repeat !important;
		background-size: contain !important;
	}
	
	.pause {
		background: url("http://localhost:3334/static/cloudmusic/playbar_btn_pause.png") no-repeat !important;
		background-size: cover !important;
	}
	
	.next {
		background: url("http://localhost:3334/static/cloudmusic/playbar_btn_next.png") no-repeat !important;
		background-size: contain !important;
	}
</style>
<script>
	import songLists from '../components/songLists.vue'
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import * as type from '../store/constant.js'
	import * as util from '../assist/utils'
	
	export default {
		name      : 'miniPlayer',
		data () {
			return {
				progval: 0,
			}
		},
		props     : [],
		components: {
			songLists
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
		mounted(){
			if (this[type.FLT.songList].length > 0 && ![type.FLT.showMiniAudio]) {
				// 封面圆形加载进度条
				this.timer = setInterval(() => {
					this.progval += 10
					if (this.progval > 100) {
						this.progval = 0
					}
				}, 1000)
			}
			
		},
		beforeUpdate(){},
		updated(){},
		activated(){},
		deactivated(){},
		beforeDestroy(){
			clearInterval(this.timer)
		},
		destroyed(){},
		watch     : {},
		computed  : {
			...mapGetters([
				type.FLT.audio,
				type.FLT.loading,
				type.FLT.playing,
				type.FLT.prBufferedTime,
				type.FLT.prCurrentTime,
				type.FLT.dragSong,
				type.FLT.dragSongTime,
				type.FLT.songList,
				type.FLT.showMiniAudio,
			]),
			audio_c: {
				get: function() {
					return this[type.FLT.audio];
				},
				set: function(newValue) {
					this[type.FLT.audio] = newValue;
				}
			},
		},
		methods   : {
			...mapMutations([
				type.CHG.play,
				type.CHG.pause,
				type.CHG.playnext,
				type.CHG.setCurrentTime,
				type.CHG.setDurationTime,
				type.CHG.setBufferedTime,
				type.CHG.loading,
				type.CHG.showMiniAudio,
				type.CHG.dragSong,
			]),
			timeUpd_m(){
				let vm = this
				let audio = document.getElementById('audioPlay')
				let currentTime = parseInt(audio.currentTime)
				audio.onsuspend = function() {
					let buffered = audio.buffered
					let duration = audio.duration
					if (buffered > 0 && duration > 0) {
						vm[type.CHG.setBufferedTime](parseInt(buffered.end(0)))
					}
				}
				this[type.CHG.setDurationTime](parseInt(audio.duration))
				// 是否拖动了播放进度条
				if (this[type.FLT.dragSong]) {
					audio.currentTime = this[type.FLT.dragSongTime]
					this[type.CHG.dragSong](false)
				} else {
					this[type.CHG.setCurrentTime](currentTime)
				}
			},
			canPlay_m(){
				this[type.CHG.loading](false)
				this[type.CHG.play]()
				document.getElementById('audioPlay').play()
			},
			audioErr_m(){
				if (document.getElementById('audioPlay').currentSrc) {
					this[type.CHG.loading](false)
				} else {
					console.log('Audio加载歌曲文件错误')
				}
			},
			ended_m(){
				this.toggPlay_m()
				this[type.CHG.playnext]()
			},
			
			coverClk_m(){
				this.$router.push({name: 'playerDetail', params: {id: this[type.FLT.audio].id}})
				this[type.CHG.showMiniAudio]()
				
			},
			showList_m(){
				this.$refs.songLists.openBottomSheet_m()
			},
			toggPlay_m(){
				if (this[type.FLT.playing]) {
					document.getElementById('audioPlay').pause()
					this[type.CHG.pause]()
				} else {
					document.getElementById('audioPlay').play()
					this[type.CHG.play]()
				}
			},
			nextSong_m(){
				this.toggPlay_m()
				this[type.CHG.playnext]()
			},
		},
		filters   : {}
	}
</script>

