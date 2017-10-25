export default{
	// 播放列表
	songList     : [],
	// 是否显示详细播放器
	showMiniAudio     : false,
	// 当前歌曲信息
	audio: {
      'id': 0,
      'name': '歌曲名称',
      'singer': '演唱者',
      'albumPic': '../../../static/cloudmusic/player-bar.png',
      'location': '',
      'album': ''
    },
	// 迷你播放器头像是否加载中
	loading:false,
	// 迷你播放器歌曲是否播放中
	playing:false,
	// 迷你播放器歌曲缓存进度（进度条）
	prBufferedTime: 0,
	// 迷你播放器歌曲播放进度（进度条）
	prCurrentTime: 0,
	// 迷你播放器歌曲播放进度
	currentTime: 0,
	// 迷你播放进度条是否拖动
	dragSong: 0,
	// 迷你播放进度条拖动位置
	dragSongTime: 0,
	// 当前播放的歌曲位置
	currentIndex: 0,
	// 歌曲总时间，秒计算
	durationTime:0,
};