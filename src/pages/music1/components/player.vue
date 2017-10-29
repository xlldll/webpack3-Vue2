/**
* Created by LinChuQiang on 2017/9/29.
*/
<template>
	<div class = "left_content">
		
		<div class = "title">
			<h1>{{ FLTcurrentTrackInfo.name }}</h1>
			<p>{{ FLTcurrentTrackInfo.artists | comboName }}</p>
		</div>
		
		<div class = "cover">
			<div class = "wrapper" :style = "{ transform:'rotate('+ rotateDeg+'deg)'}">
				<div class = "cd"></div>
				<img :src = "FLTcurrentTrackInfo.picurl" :alt = "FLTcurrentTrackInfo.name">
			</div>
		</div>
		
		<div class = "lrc">
			<div class = "inner" :style = "{transform:'translate3d(0px,'+lrcOffset_c+'px,0px)'}">
				<p v-for = "(lrc,index) in lrcs" :key = "'lrc-'+index" :id = "'line-'+index">{{ lrc.txt}}</p>
			</div>
		</div>
		
		<div class = "sound">
			<div class = "mute">
				<span class = "fa fa-volume-up fa-2x"></span>
			</div>
			<div class = "slider">
				<input type = "range" max = "1" v-model = "volume_c" step = "0.01">
			</div>
			<div class = "download">
				<a href = "#" class = "fa fa-download fa-2x"></a>
			</div>
		</div>
		<div class = "progress">
			<span>{{ FLTcurrentPos | time}}</span>
			<div class = "slider">
				<input type = "range" :max = "FLTdurationTime" v-model = "elapsed_c">
			</div>
			<span>{{ FLTdurationTime | time}}</span>
		</div>
		<ul class = "control">
			<li>
				<span class = "fa fa-retweet fa-2x"></span>
			</li>
			<li>
				<span class = "fa fa-backward fa-4x" @click = "playPrev_m"></span>
			</li>
			<li>
				<span class = "fa fa-play-circle fa-5x" @click = "togglePlay_m" :class = "{'fa-pause-circle':FLTplaying}"></span>
			</li>
			<li>
				<span class = "fa fa-forward fa-4x" @click = "playNext_m"></span>
			</li>
			<li>
				<span class = "fa fa-random fa-2x"></span>
			</li>
		</ul>
		
		<div class = "stick" :class = "{ playing:!FLTplaying}"></div>
		<div class = "mask">
			<div class = "cover-mask"></div>
			<div class = "album-cover" :style = "{'background-image':'url('+FLTcurrentTrackInfo.picurl+')'}"></div>
		</div>
		<!--音频标签-->
		<audio id = "audioPlay" :src = "audioSrc_c" @timeupdate = "timeUpd_m" @canplay = "canPlay_m" @error = "audioErr_m" @ended = "ended_m" />
	</div>
</template>
<style scoped = "true" lang = "scss">
	.left_content {
		position: relative;
		float: left;
		width: 45%;
		height: 100vh;
		overflow: hidden;
		
		background-color: #e6e6e6;
		
		.title {
			position: relative;
			z-index: 13;
			padding: 10px;
			
			background-color: #94241B;
			text-align: center;
			
			box-shadow: inset 0 0 5px rgba(108, 11, 3, .8), inset 0 0 5px rgba(108, 11, 3, .8);
			
			h1 {
				margin: 0 0 10px 0;
				
				color: #000;
				font-size: 2.8rem;
				
				text-shadow: 0 0 4px white,
				0 -5px 4px #ff3,
				2px -10px 6px #fd3,
				-2px -15px 11px #f80,
				2px -25px 18px #f20; //使用阴影叠加出燃烧的文字特效
			}
			p {
				margin: 0;
				
				color: #D1D1D1;
				font-size: 1.8rem;
				
				text-shadow: -1px 0 black,
				0 1px black,
				1px 0 black,
				0 -1px black; //使用阴影叠加出文本描边特效
			}
		}
		.cover {
			position: relative;
			z-index: 11;
			overflow: hidden;
			.wrapper {
				position: relative;
				width: 50%;
				height: 50%;
				min-width: 256px;
				min-height: 256px;
				margin: 2rem auto;
				padding: .8rem .9rem;
				border-radius: 50%;
				background-color: rgba(107, 107, 107, 0.3);
				
				.cd {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					min-width: 256px;
					min-height: 256px;
					background: url('http://localhost:3334/static/cloudmusic/cd_wrapper.png') no-repeat center center;
					background-size: contain;
				}
				img {
					width: 100%;
					height: 100%;
					min-height: 256px;
					border-radius: 50%;
				}
			}
		}
		
		.lrc {
			position: absolute;
			bottom: 24%;
			left: 0;
			z-index: 10;
			
			width: 100%;
			height: 117px;
			margin: 0;
			padding: 0;
			border:0;
			overflow: hidden;
			
			.inner {
				text-align: center;
				overflow: hidden;
				transition: -webkit-transform 0.3s ease-out;
				transform-origin: 0 0 0;
				p {
					height: 19px;
					padding: 10px 0;
					margin: 0;
					font-size: 1.6rem;
					line-height: 1.6rem;
					font-weight: 600;
					color: white;
				}
			}
		}
		.sound {
			position: absolute;
			bottom: 22%;
			left: 0;
			z-index: 10;
			
			display: flex;
			flex-wrap: nowrap;
			flex-direction: row;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
			align-content: center;
			
			width: 100%;
			margin: 0;
			padding: 0;
			span {
				color: #DB6D65;
			}
			.slider {
				order: 0;
				flex-grow: 1;
				flex-shrink: 1;
				flex-basis: auto;
				align-self: auto;
				position: relative;
				
				height: 20px;
				margin: 0 1rem;
				
				vertical-align: middle;
				input {
					width: 100%;
					margin: 4px 0;
					border-radius: 5px;
					
					background: -moz-linear-gradient(left, #DB6D65, #680902); /*Mozilla*/
					background: -o-linear-gradient(left, #DB6D65, #680902); /*Opera11*/
					background: -webkit-gradient(linear, 0 50%, 100% 50%, from(#DB6D65), to(#680902)); /*Old gradient for webkit*/
					background: -webkit-linear-gradient(left, #DB6D65, #680902); /*new gradient for Webkit*/
					
					-webkit-appearance: none;
					-moz-appearance: none;
					appearance: none;
					
					&:focus {
						outline: none;
					}
					&::-webkit-slider-thumb {
						position: relative;
						width: 1rem;
						height: 1rem;
						border-radius: 50%;
						border: 1px solid #f9774e;
						background-color: #fff;
						
						cursor: pointer;
						transition: -webkit-transform 0.2s;
						transition: transform 0.2s;
						-webkit-appearance: none;
						-moz-appearance: none;
						appearance: none;
					}
					&::-webkit-slider-thumb:active,
					&::-webkit-slider-thumb:focus {
						transform: scale(1.5);
					}
					
					/*todo-css:进度条样式无效*/
					&::-webkit-slider-thumb:after {
						display: block;
						content: '';
						position: absolute;
						top: 50%;
						bottom: 0;
						right: 6px;
						
						width: 1rem;
						height: 1rem;
						margin-top: -4px;
						
						background: white;
						pointer-events: none;
						
					}
				}
				
			}
			a {
				color: #680902;
				
			}
		}
		.progress {
			position: absolute;
			bottom: 15%;
			left: 0;
			z-index: 10;
			
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-around;
			align-content: center;
			align-items: center;
			
			width: 100%;
			margin: 0;
			padding: 0;
			
			text-align: center;
			span {
				color: silver;
				font-size: 1.4rem;
				font-weight: 600;
				
			}
			.slider {
				order: 0;
				flex-grow: 1;
				flex-shrink: 1;
				flex-basis: auto;
				align-self: auto;
				position: relative;
				
				height: 16px;
				margin: 0 1rem;
				
				input {
					width: 100%;
					margin: 7px 0;
					border-radius: 5px;
					
					background: white;
					
					-webkit-appearance: none;
					-moz-appearance: none;
					appearance: none;
					
					&:focus {
						outline: none;
					}
					&::-webkit-slider-thumb {
						position: relative;
						width: 1px;
						height: 1px;
						border-radius: 50%;
						border: 1px solid silver;
						background-color: white;
						
						cursor: pointer;
						transform: scale(5);
						-webkit-appearance: none;
						-moz-appearance: none;
						appearance: none;
					}
					
					/*todo-css:进度条样式无效*/
					&::-webkit-slider-thumb:after {
						display: block;
						content: '';
						position: absolute;
						top: 50%;
						bottom: 0;
						right: 6px;
						
						width: 1rem;
						height: 1rem;
						margin-top: -4px;
						
						background: white;
						pointer-events: none;
						
					}
				}
				
			}
		}
		.control {
			position: absolute;
			bottom: 4%;
			left: 0;
			z-index: 10;
			
			display: flex;
			flex-wrap: nowrap;
			flex-direction: row;
			justify-content: space-around;
			align-content: center;
			align-items: center;
			
			width: 100%;
			margin: 0;
			padding: 0;
			
			li {
				list-style: none;
				
				span {
					color: #b6423a;
					&:hover {
						opacity: 0.8;
					}
				}
			}
		}
		
		.stick {
			position: absolute;
			top: 60px;
			right: 45%;
			width: 70PX;
			height: 100PX;
			background: url('http://localhost:3334/static/cloudmusic/stick_bg.png') no-repeat left -.4rem;
			background-size: cover;
			z-index: 12;
			transform: rotate(-26deg);
			&.playing {
				top: 7px;
				transform: rotate(-50deg);
			}
			transition: all 1s;
		}
		.mask {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 0;
			width: 100%;
			height: 100vh;
			min-height: 100%;
			overflow: hidden;
			
			.cover-mask {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				z-index: 4;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, .8);
				background: -moz-linear-gradient(top, rgba(50, 50, 50, .8), rgba(0, 0, 0, .8)); /*Mozilla*/
				background: -o-linear-gradient(top, rgba(50, 50, 50, .8), rgba(0, 0, 0, .8)); /*Opera11*/
				background: -webkit-linear-gradient(top, rgba(50, 50, 50, .8), rgba(0, 0, 0, .8)); /*new gradient for Webkit*/
				
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
		}
	}
</style>
<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import * as type from '../store/constant.js'
	import * as util from '../assist/utils'
	export default {
		name      : 'player',
		data () {
			return {
				rotateDeg: 0,
				lrcIndex : 0,
				lrcs     : [
					{
						txt: '歌词加载中......'
					}
				]
			}
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
			FLTplaying(nval, oval){
				if (nval) {
					this.timer = this.rotateTimer_m();
				} else {
					clearInterval(this.timer)
				}
			},
			FLTlrc(nval,oval){
				console.log(`nval:`, nval)
				if (nval) {
					this.lrcs = nval;
					this.loadLrc_m()
				}
			}
		},
		computed  : {
			...mapGetters([
				type.FLT.currentTrackInfo,
				type.FLT.audioSrc,
				type.FLT.playing,
				type.FLT.bufferedTime,
				type.FLT.currentPos,
				type.FLT.currentTime,
				type.FLT.durationTime,
				type.FLT.volume,
				type.FLT.nolyric,
				type.FLT.lrc,
			]),
			audioSrc_c(){
				return this[type.FLT.audioSrc];
			},
			elapsed_c: {
				get: function() {
					return this[type.FLT.currentPos];
				},
				set: function(val) {
					// todo:直接通过这种方式实现拖动进度条，之前的太复杂
					this[type.CHG.currentPos](val)
					let audio = document.querySelector('#audioPlay');
					audio.currentTime = val;
				}
			},
			volume_c : {
				get: function() {
					return this[type.FLT.volume];
				},
				set: function(val) {
					this[type.CHG.volume](val)
					let audio = document.querySelector('#audioPlay');
					audio.volume = val;
				}
			},
		    // 计算歌词偏移位置
			lrcOffset_c(){
				if (this.lrcs) {
					console.log(`计算歌词偏移位置`)
					// 1、根据时间获得歌词
					var current = Math.round(this[type.FLT.currentPos])
					// 2、根据时间得到歌词
					for (var i = 0; i < this.lrcs.length; i++) {
						if (this.lrcs[i].time === current) this.lrcIndex = i
					}
					return - (this.lrcIndex - 1 ) * 39
				}
			}
			
		},
		methods   : {
			...mapMutations([
				type.CHG.playing,
				type.CHG.bufferedTime,
				type.CHG.currentPos,
				type.CHG.durationTime,
				type.CHG.volume,
				type.CHG.nolyric,
				type.CHG.lrc,
			]),
			...mapActions([
				type.UPD.searchLrc
			]),
			// HTML5 Audio/Video 事件
			// 当浏览器可以播放音频/视频时
			// http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp
			canPlay_m(){
				this[type.CHG.playing](true)
			    this[type.UPD.searchLrc]()
				document.getElementById('audioPlay').play()
			},
			
			// 当目前的播放位置已更改时
			timeUpd_m(){
				let vm = this;
				let audio = document.querySelector('#audioPlay');
				let currentTime = parseInt(audio.currentTime);
				// 以秒计算，播放时间
				// console.log(`currentTime:`, currentTime)
				
				// 当浏览器刻意不获取媒体数据时
				audio.onsuspend = function() {
					let buffered = audio.buffered
					let duration = audio.duration
					if (buffered > 0 && duration > 0) {
						vm[type.CHG.bufferedTime](parseInt(buffered.end(0)))
					}
				}
				// 返回当前音频/视频的长度（以秒计）audio.duration
				this[type.CHG.durationTime](parseInt(audio.duration));
				this[type.CHG.currentPos](currentTime)
			},
			// 当在音频/视频加载期间发生错误时
			audioErr_m(){},
			// 当目前的播放列表已结束时
			ended_m(){},
			
			playPrev_m(){},
			// 用户点击播放暂停时
			togglePlay_m(){
				if (this[type.FLT.playing]) {
					document.querySelector('#audioPlay').pause()
					this[type.CHG.playing](false)
				} else {
					document.querySelector('#audioPlay').play()
					this[type.CHG.playing](true)
				}
			},
			playNext_m(){
			
			},
			// 旋转计时器
			rotateTimer_m(){
				return setInterval(() => {
					this.rotateDeg += 1
					if (this.rotateDeg > 360) {
						this.rotateDeg = 0
					}
				}, 50)
			},
			loadLrc_m(){
				if (this[type.FLT.nolyric]) {
					this.lrcs = [
						{
							txt: '歌词未收录或者无！'
						}
					]
				} else {
					let initLrc = this[type.FLT.lrc];
					console.log(`得到本地歌词列表:`, )
					let lrcs = initLrc.split('\n');
					// console.log(`lrcs:`, lrcs)
					let lrcsL = lrcs.length;
			/*
			 * lrcs=["[00:00.00] 作曲 : 金志文","[00:00.433] 作词 : 王耀光",""]
			 * */
					let lrcAr = [];
					let timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
					for (var i = 0; i < lrcsL; i++) {
						// 提取时间
						var timeRegExpArr = lrcs[i].match(timeReg);
						// console.log(`timeRegExpArr:`, timeRegExpArr)
						if (!timeRegExpArr) {continue}
						// 提取歌词
						var txt = lrcs[i].replace(timeReg, '').trim();
						// console.log(`txt:`, txt)
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
							lrcAr.push(obj)
						}
					}
					this.lrcs = lrcAr
				}
			}
		},
		filters   : {
			comboName: function(val) {
				if (!val) return ""
				let str = "";
				val.forEach((v, i) => {
					str += v.name + " / "
				})
				return str.slice(0, str.length - 3);
			},
			// 时间字符格式化
			time     : function(value) {
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

