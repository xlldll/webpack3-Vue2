/**
* Created by LinChuQiang on 2017/9/11.
*/

<template>
	<!-- 详细播放器-->
	<div id = "container">
		<!--<img src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" class = "background" />-->
		<mu-appbar>
			<mu-icon-button icon = "arrow_back" slot = "left" @click = "back_m" />
			<div class = "play-title">
				<div class = "play-name">
					<span>{{FLTaudio.name}} </span>-<span> {{FLTaudio.singer}}</span>
				</div>
			</div>
			<mu-icon-button icon = 'share' slot = "right" />
		</mu-appbar>
		<div class = "stick" :class = "{'playing':!FLTplaying}"></div>
		<mu-flexbox orient = "vertical">
			<mu-flexbox-item>
				<div class = "cd-holder">
					<div class = "cd-wrapper" :style = "{'transform':'rotate('+rotateDeg+'deg)'}">
						<div class = "cd-mask"></div>
						<img class = "cd-img" :src = "FLTaudio.albumPic + '?param=500y500'" />
					</div>
				</div>
			</mu-flexbox-item>
			<mu-flexbox-item>
				<div class = "lyric-holder">
					<div class = "lrc-inner" style = "transition: -webkit-transform 0.3s ease-out; transform-origin: 0 0 0;" :style = "{'transform':' translate3d(0px,'+ lrcOffset_c +'px, 0px)'}">
						<p v-for = "(item, index) in afterLrc" :id = "'line-'+index" :key = "index">{{item.txt}}</p>
					</div>
				</div>
				<div class = "progess-bar">
					<div class = "prog">
						<div class = "prog-wrap">
							<mu-slider class = "song-slider" @change = "dragSong_m" v-model = "currentTime_c" />
						</div>
						<div class = "time">
							<time id = "cur">{{ FLTcurrentTime | time}}</time>
							<time id = "total">{{ FLTdurationTime | time}}</time>
						</div>
					</div>
				</div>
			</mu-flexbox-item>
		</mu-flexbox>
		
		<div class = "control-bar ">
			<mu-icon-button class = "btn d-mode" />
			<mu-icon-button class = "btn d-prev" @click = "playPrev_m" />
			<mu-icon-button class = "btn d-play btn-big" @click = "togglePlay_m" :class = "{'d-pause':FLTplaying}" />
			<mu-icon-button class = "btn d-next" @click = "playNext_m" />
			<mu-icon-button class = "btn d-list" @click = "showList_m" />
		</div>
		<div class = "mask">
			<div class = "cover-mask"></div>
			<div class = "album-cover" :style = "{'background-image':'url('+FLTaudio.albumPic+'?param=500y600)'}"></div>
		</div>
		<songLists ref = "songLists"></songLists>
	</div>
</template>
<style scoped lang = "scss">
	#container {
		position: relative;
		min-height: 100vh;
		.background {
			position: relative;
			width: 100%;
			height: 100%;
			z-index: 0;
		}
		.mu-appbar {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 7;
			overflow: hidden;
		}
	}
	
	/*播放器的旋转指针*/
	.stick {
		position: absolute;
		top: 39px;
		right: 45%;
		width: 93PX;
		height: 148PX;
		background: url('http://localhost:3334/static/cloudmusic/stick_bg.png') no-repeat left -.4rem;
		background-size: cover;
		z-index: 6;
		transform: rotate(-26deg);
		&.playing {
			top: 7px;
			transform: rotate(-50deg);
		}
		transition: all 1s;
	}
	
	.mu-flexbox {
		position: absolute;
		top: 64px;
		left: 0;
		z-index: 5;
		// 唱片封面
		.cd-holder {
			position: relative;
			overflow: hidden;
			.cd-wrapper {
				position: relative;
				width: 50%;
				height: 50%;
				max-height: 500px;
				max-width: 500px;
				min-height: 320px;
				min-width: 320px;
				margin: 2rem auto 0;
				padding: .8rem .9rem;
				border-radius: 50%;
				background-color: rgba(107, 107, 107, 0.3);
				.cd-mask {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background: url('http://localhost:3334/static/cloudmusic/cd_wrapper.png') no-repeat center center;
					background-size: contain;
				}
				img {
					width: 100%;
					height: 100%;
					min-height: 80px;
					border-radius: 50%;
				}
			}
		}
		// 歌词区域
		.lyric-holder {
			position: relative;
			height: 13rem;
			
			margin-top: .6rem;
			overflow: hidden;
			.lrc-inner {
				position: absolute;
				left: 10px;
				right: 10px;
				overflow: hidden;
				p {
					
					height: 42px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					color: #fff;
					font-size: 16px;
					text-align: center;
				}
				.on {
					color: #fff;
					font-size: 16px;
				}
			}
		}
		// 进度条
		.prog {
			position: relative;
			
			.prog-wrap {
				position: relative;
				margin: 0 3.5rem;
				padding: 1rem 0 0;
				.song-slider {
					margin-bottom: 0;
				}
			}
			
			.time {
				color: #fff;
				font-size: 14px;
				font-weight: 600;
				time {
					position: absolute;
					top: 40%;
					opacity: .5;
				}
				#cur {
					left: 0;
				}
				#total {
					right: 0;
				}
			}
			
		}
	}
	
	// 控制按钮
	.control-bar {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 5;
		width: 100vw;
		text-align: center;
		
		.btn {
			width: 5rem;
			height: 5rem;
		}
		
		.d-mode {
			background: url("http://localhost:3334/static/cloudmusic/seq.png") no-repeat;
			background-size: cover;
		}
		.d-prev {
			background: url("http://localhost:3334/static/cloudmusic/prev.png") no-repeat;
			background-size: cover;
		}
		.d-play {
			background: url("http://localhost:3334/static/cloudmusic/play.png") no-repeat;
			background-size: cover;
		}
		.d-pause {
			background: url("http://localhost:3334/static/cloudmusic/pause.png") no-repeat;
			background-size: cover;
		}
		.d-next {
			background: url("http://localhost:3334/static/cloudmusic/next.png") no-repeat;
			background-size: cover;
		}
		.d-list {
			background: url("http://localhost:3334/static/cloudmusic/list.png") no-repeat;
			background-size: cover;
		}
	}
	
	// 遮罩层
	.mask {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		min-width: 100vw;
		height: 100%;
		
		overflow: hidden;
		/*todo-css:filter IE11表现很差*/
		.album-cover {
			position: absolute;
			top: 0;
			bottom: 0;
			z-index: 3;
			width: 100%;
			height: 100%;
			background-size: cover;
			background-position: center;
			
			transform: scale(1.05);
			/*filter: blur(12px);
			-webkit-filter: blur(12px); !* chrome, opera *!
			-ms-filter: blur(12px);
			-moz-filter: blur(12px);
			filter: progid:DXImageTransform.Microsoft.Blur(pixelRadius=12, MakeShadow=false);*/
			
		}
		
		.cover-mask {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			z-index: 4;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .8);
			
			/* older safari/Chrome browsers */
			/*-webkit-opacity: 0.6;*/
			/* Netscape and Older than Firefox 0.9 */
			/*-moz-opacity: 0.6;*/
			/* Safari 1.x (pre WebKit!) 老式khtml内核的Safari浏览器*/
			/*-khtml-opacity: 0.6;*/
			/* IE9 + etc...modern browsers */
			/*opacity: 0.6;*/
			/* IE 4-9 */
			/*	filter: alpha(opacity=60);*/
			
		}
		
	}

</style>
<script>
	import songLists from '../components/songLists.vue'
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import * as type from '../store/constant.js'
	import * as util from '../assist/utils'
	
	export default {
		name      : 'playerDetail',
		data () {
			return {
				lrc      : '',
				afterLrc : '',
				lrcIndex : 0,
				rotateDeg: 0,
			}
		},
		props     : [],
		components: {
			songLists
		},
		beforeRouteEnter(to, from, next){
			next(vm => {
				if (parseInt(to.params.id) !== parseInt(vm[type.FLT.audio].id)) {
					console.log(`没有正确匹配歌曲ID:`,)
					vm.loadLrc_m(vm[type.FLT.audio].id)
				}
			})
		},
		beforeRouteUpdate (to, from, next) {
			next()
		},
		beforeRouteLeave (to, from, next) {
			next()
		},
		beforeCreate(){},
		created(){
			this.loadLrc_m(this[type.FLT.audio].id)
		},
		beforeMount(){},
		mounted(){
			if (this[type.FLT.playing]) {
				// 封面圆形加载进度条
				this.timer = this.rotateTimer_m()
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
		watch     : {
			FLTplaying(newval, oldval){
				if (newval) {
					this.timer = this.rotateTimer_m();
				} else {
					clearInterval(this.timer)
				}
				
			}
		},
		computed  : {
			...mapGetters([
				type.FLT.audio,
				type.FLT.currentTime,
				type.FLT.prCurrentTime,
				type.FLT.durationTime,
				type.FLT.playing,
			]),
			lrcOffset_c(){
				if (this.afterLrc) {
					// 1、根据时间获得歌词
					var current = Math.round(this[type.FLT.currentTime])
					// 2、根据时间得到歌词
					for (var i = 0; i < this.afterLrc.length; i++) {
						if (this.afterLrc[i].time === current) this.lrcIndex = i
					}
					return -(this.lrcIndex) * 58
				}
			},
		/*
		 Computed property "FLTprCurrentTime" was assigned to but it has no setter
		 这是由于v-model不能直接绑定computer属性
		 */
			currentTime_c: {
				// getter
				get: function() {
					return this[type.FLT.prCurrentTime]
				},
				// setter
				set: function(newValue) {
					// console.log(`new:`, newValue)
				}
			}
		},
		methods   : {
			...mapMutations([
				type.CHG.dragSong,
				type.CHG.dragSongTime,
				type.CHG.play,
				type.CHG.pause,
				type.CHG.showMiniAudio,
				type.CHG.playprev,
				type.CHG.playnext,
			]),
			back_m(){
				this.$router.go(-1)
				// this.$router.push({name:'playListDetail',params:{id:this[type.FLT.audio].id}})
				this[type.CHG.showMiniAudio]()
			},
			playPrev_m(){
				this[type.CHG.playprev]()
				this.loadLrc_m(this[type.FLT.audio].id)
				
			},
			togglePlay_m(){
				if (this[type.FLT.playing]) {
					this[type.CHG.pause]();
					
					document.getElementById('audioPlay').pause()
					
				} else {
					this[type.CHG.play]();
					
					document.getElementById('audioPlay').play()
				}
			},
			playNext_m(){
				this[type.CHG.playnext]()
				this.loadLrc_m(this[type.FLT.audio].id)
			},
			showList_m(){
				this.$refs.songLists.openBottomSheet_m()
			},
			loadLrc_m(id){
				let vm = this;
				this.afterLrc = [
					{'txt': '正在加载中...'}
				]
				if (!id) {
					this.afterLrc = [{'txt': '这里显示歌词哦！'}]
					return
				}
				this.$load(null, `?type=lyric&id=${id}`).then((res) => {
					// console.log(`res:`, res)
					if (res.nolyric) {
						this.afterLrc = [{'txt': '暂无歌词'}]
					} else {
						this.lyric = res.lrc.lyric
						this.getLrc_m()
					}
				}, (res) => {
					console.log('加载歌词失败')
					this.afterLrc = [{'txt': '加载歌词失败'}]
				}).catch(error => {
					console.log('加载歌词失败!')
					console.log(`error:`, error)
					vm.afterLrc = [{'txt': '暂无歌词'}]
				})
			},
			getLrc_m(){
				if (this.lyric) {
					let lyrics = this.lyric.split('\n')
					let lrcObj = []
					let timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g
					for (var i = 0; i < lyrics.length; i++) {
						// 提取时间
						var timeRegExpArr = lyrics[i].match(timeReg)
						if (!timeRegExpArr) continue
						// 提取歌词
						var txt = lyrics[i].replace(timeReg, '')
						// console.log(txt);
						// 处理时间
						for (var k = 0; k < timeRegExpArr.length; k++) {
							var obj = {}
							var t = timeRegExpArr[k]
							var min = Number(String(t.match(/\[\d*/i)).slice(1))
							var sec = Number(String(t.match(/\:\d*/i)).slice(1))
							// 转换成秒数
							var time = min * 60 + sec
							obj.time = time
							obj.txt = txt
							lrcObj.push(obj)
						}
					}
					this.afterLrc = lrcObj
				}
			},
			dragSong_m(val){
				let time = (val * this[type.FLT.durationTime]) / 100
				// console.log(`tiem:`, time)
				this[type.CHG.dragSong](true)
				this[type.CHG.dragSongTime](time)
			},
			rotateTimer_m(){
				return setInterval(() => {
					this.rotateDeg += 1
					if (this.rotateDeg > 360) {
						this.rotateDeg = 0
					}
				}, 50)
			}
		},
		filters   : {
			// 时间字符格式化
			time (value) {
				var length = Math.floor(parseInt(value))
				var minute = Math.floor(value / 60)
				if (minute < 10) {
					minute = '0' + minute
				}
				var second = length % 60
				if (second < 10) {
					second = '0' + second
				}
				return minute + ':' + second
			}
		}
	}
</script>

