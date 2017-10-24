import * as type from './constant';
export default{
	[type.CHG.posts](state, data){
		state.posts = data;
	},
	[type.CHG.archives](state, data){
		state.archives = data;
	},
	[type.CHG.categories](state, data){
		state.categories = data;
	},
	[type.CHG.tags](state, data){
		state.tags = data;
	},
	[type.CHG.post](state, data){
		state.post = data;
	},
	[type.CHG.page](state, data){
		state.page = data;
	},
	[type.CHG.config](state, data){
		state.config = data;
	},
	[type.CHG.loading](state, data){
		state.loading = data;
	},
	[type.CHG.menu](state, data){
		state.menu = data;
	},
	[type.CHG.message](state, data){
		state.message = data;
	},
	[type.CHG.colors](state, data){
		state.colors = data;
	},
	[type.CHG.headertitle](state, data){
		state.headertitle = data;
	},	[type.CHG.menuToggle](state, data){
		state.menuToggle = data;
	},
};