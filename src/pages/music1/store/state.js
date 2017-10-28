export default{
	// 歌单
	tracks          : [],
	// 正在播放歌曲在歌单中的索引
	currentTrack    : -1,
	// 正在播放的歌曲的信息
	currentTrackInfo: {
		name    : 'Main theme',
		albumttl: 'MuNiCa - Cry of Pluto (Original Sound Track)',
		artists : ['lin'],
		picurl  : 'https://zhangboyuan-10039837.cossh.myqcloud.com/loadingImg.png',
		pop     : 100,
		id      : 28921684,
	},
	// 正在播放的歌曲地址
	audioSrc        : '',
	// 是否正在播放
	playing         : false,
	// 歌曲缓冲进度（进度条）
	bufferedTime    : 0,
	// 歌曲播放进度（进度条）
	currentPos      : 0,
	// 歌曲总时间长度，秒计算
	durationTime    : 0,
	// 音量
	volume          : 0.6,
	//热门评论
	hotComments     : [
		{
			user      : {
				nickname : '东京事变_',
				avatarUrl: 'https://p1.music.126.net/0u9Ghdw53WAyg72FpRsIjw==/19244752021151488.jpg',
			},
			beReplied : [
				{
					user: {
						nickname : 'Lanarains',
						avatarUrl: 'https://p1.music.126.net/uQHTwiPBmqtJD9tH9w89Pg==/18623527953341853.jpg',
					}
				},
			],
			likedCount: 7206,
			time      : 1460388764483,
			content   : '每个人都是一颗小星球，逝去的亲友是身边的暗物质。我愿能再见你，我知我再见不到你。但你的引力仍在。我感激我们的光锥曾彼此重叠，而你永远改变了我的星轨。纵使再不能相见，你仍是我所在的星系未曾分崩离析的原因，是我宇宙之网的永恒组成。所以，有一天我也会失了光和热，冷却后回到你身边。'
		},
	],
	// 普通评论
	comments        : [
		{
			user:{
				nickname:"野百合也有春天1704",
				avatarUrl:"https://p1.music.126.net/T80tnAtLOTIVLuqXYcRt5Q==/18572950418473725.jpg"
			},
			beReplied : [
				{
					user: {
						nickname : 'Lanarains',
						avatarUrl: 'https://p1.music.126.net/uQHTwiPBmqtJD9tH9w89Pg==/18623527953341853.jpg',
					}
				},
			],
			likedCount:3,
			time:1509025324419,
			content:"不要把孤独扩大，不要让悲伤蔓延，活着，就该像行尸走肉，那样才没有情感，不会难过"
		},
	],
	
};