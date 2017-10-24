import * as type from './constant';
export default{
	[type.FLT.posts](state){
		return state.posts;
	},
	[type.FLT.archives](state){
		return state.archives;
	},
	[type.FLT.categories](state){
		return state.categories;
	},
	[type.FLT.tags](state){
		return state.tags;
	},
	[type.FLT.post](state){
		return state.post;
	},
	[type.FLT.page](state){
		return state.page;
	},
	[type.FLT.config](state){
		return state.config;
	},
		[type.FLT.loading](state){
		return state.loading;
	},
	[type.FLT.menu](state){
		return state.menu;
	},
	[type.FLT.message](state){
		return state.message;
	},
	[type.FLT.colors](state){
		return state.colors;
	},
		[type.FLT.headertitle](state){
		return state.headertitle;
	},		[type.FLT.menuToggle](state){
		return state.menuToggle;
	},
};