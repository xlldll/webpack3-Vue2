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

const NotFound = reslove => {
	reslove(require('../routerViews/notFound.vue'));
};

export default [
	{
		path     : '/',
		component: Home,
		name     : 'home',
	},
	{
		path     : '*',
		component: NotFound,
	},
];


