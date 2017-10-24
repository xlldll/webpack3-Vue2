// 主页内容
import Home from '../routerViews/home.vue';

/*
 const Archives = resolve => {
 require.ensure(['../routerViews/archives.vue'], () => {
 resolve(require('../routerViews/archives.vue'));
 });
 };
 */

/*
 const About = resolve => require(['../routerViews/about.vue'], resolve);
 */

// 歌单中的歌曲列表
const playListDetail = resolve => {
	require.ensure(['../routerViews/playListDetail.vue'], () => {
		resolve(require('../routerViews/playListDetail.vue'));
	});
};

// 详情播放器
const playerDetail = resolve => require(['../routerViews/playerDetail.vue'], resolve);

// 启动页-面板1
const Startup = resolve => require(['../routerViews/Startup.vue'], resolve);
// 所有推荐歌单-面板2
const SongLists = resolve => require(['../routerViews/SongLists.vue'], resolve);

const NotFound = reslove => {
	reslove(require('../routerViews/notFound.vue'));
};

export default [
	{
		path     : '/',
		component: Home,
		name     : 'home',
		children : [
			{
				path     : 'Startup',
				component: Startup,
				name     : 'Startup',
				meta     : {keepAlive: true},
			},
			{
				path     : 'SongLists',
				component: SongLists,
				name     : 'SongLists',
				meta     : {keepAlive: true},
			},
		],
	},
	{
		path     : '/playListDetail',
		component: playListDetail,
		name     : 'playListDetail',
	},
	{
		path     : '/playerDetail',
		component: playerDetail,
		name     : 'playerDetail',
	},
	
	{
		path     : '*',
		component: NotFound,
	},
];


