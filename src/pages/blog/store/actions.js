import * as type from './constant';
export default{
	[type.UPD.posts]({commit}, data){
		commit(type.CHG.posts, data);
	},
	[type.UPD.archives]({commit}, data){
		commit(type.CHG.archives, data);
	},
	[type.UPD.categories]({commit}, data){
		commit(type.CHG.categories, data);
	},
	[type.UPD.tags]({commit}, data){
		commit(type.CHG.tags, data);
	},
	[type.UPD.post]({commit}, data){
		commit(type.CHG.post, data);
	},
	[type.UPD.page]({commit}, data){
		commit(type.CHG.page, data);
	},
	[type.UPD.config]({commit}, data){
		commit(type.CHG.config, data);
	},
	[type.UPD.loading]({commit}, data){
		commit(type.CHG.loading, data);
	},
	[type.UPD.menu]({commit}, data){
		commit(type.CHG.menu, data);
	},
	[type.UPD.message]({commit}, data){
		commit(type.CHG.message, data);
	},
	[type.UPD.colors]({commit}, data){
		commit(type.CHG.colors, data);
	},	[type.UPD.headertitle]({commit}, data){
		commit(type.CHG.headertitle, data);
	},[type.UPD.menuToggle]({commit}, data){
		commit(type.CHG.menuToggle, data);
	},
};