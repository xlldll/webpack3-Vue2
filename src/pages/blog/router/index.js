// 主页内容
import Home from '../routerViews/home.vue';

// 文章合集 Archives
const Archives = resolve => {
	require.ensure(['../routerViews/archives.vue'], () => {
		resolve(require('../routerViews/archives.vue'));
	});
};
// 文章
const Post = resolve => {
	require.ensure(['../routerViews/post.vue'], () => {
		resolve(require('../routerViews/post.vue'));
	});
};

// 文章分类 Categories
const Categories = reslove => {
	reslove(require('../routerViews/categories.vue'));
};
const Category = reslove => {
	reslove(require('../routerViews/category.vue'));
};

// 文章标签 Tags
const Tags = resolve => require(['../routerViews/tags.vue'], resolve);
const Tag = resolve => require(['../routerViews/tag.vue'], resolve);

const About = resolve => require(['../routerViews/about.vue'], resolve);

const NotFound = reslove => {
	reslove(require('../routerViews/notFound.vue'));
};

/*Todo：刷新会返回到主页，是由于model模式*/
export default [
	{
		path     : '/',
		component: Home,
		name     : 'home',
	},
	{
		path     : '/page/:page',
		component: Home,
		name     : 'homePage',
	},
	{
		path     : '/posts/:id',
		component: Post,
		name     : 'post',
	},
	{
		path     : '/archives',
		component: Archives,
		name     : 'archives',
		children : [
			{
				path     : ':page',
				component: Archives,
				name     : 'archivePage',
			},
		],
	},
	{
		path     : '/categories',
		component: Categories,
		name     : 'categories',
	},
	{
		path     : '/categories/:id',
		component: Category,
		name     : 'categoryId',
		children : [
			{
				path     : ':page',
				component: Category,
				name     : 'categoryPage',
			},
		],
	},
	
	{
		path     : '/tags',
		component: Tags,
		name     : 'tags',
	},
	
	{
		path     : '/tags/:id',
		component: Tag,
		name     : 'tagId',
		children : [
			{
				path     : ':page',
				component: Tag,
				name     : 'tagPage',
			},
		],
	},
	
	{
		path     : '/about',
		component: About,
		name     : 'about',
	},
	{
		path     : '*',
		component: NotFound,
	},
];


