export default{
	// 歌单
	tracks: [],
	// 正在播放歌曲在歌单中的索引
	currentTrack: -1,
	// 正在播放的歌曲的信息
	currentTrackInfo:{
		name:'Main theme',
		albumttl:'MuNiCa - Cry of Pluto (Original Sound Track)',
		artists:['lin'],
		picurl: 'https://zhangboyuan-10039837.cossh.myqcloud.com/loadingImg.png',
		pop:100,
		id:28921684
	},
	// 正在播放的歌曲地址
	audioSrc:'',
	// 是否正在播放
	playing:false,
	// 歌曲缓冲进度（进度条）
	bufferedTime:0,
	// 歌曲播放进度（进度条）
	currentPos: 0,
	// 歌曲总时间长度，秒计算
	durationTime:0,
	// 音量
	volume:0.6
};