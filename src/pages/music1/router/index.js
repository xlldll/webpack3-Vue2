import songLists from '../routerViews/songLists.vue';

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

const comments = resolve => require(['../routerViews/comments.vue'], resolve);

const NotFound = reslove => {
	reslove(require('../routerViews/notFound.vue'));
};

export default [
	{
		path     : '/',
		component: songLists,
		name     : 'songLists',
	},
	{
		path     : '/comments',
		component: comments,
		name     : 'comments',
	},
	{
		path     : '*',
		component: NotFound,
	},
];


