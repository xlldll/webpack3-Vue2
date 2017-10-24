import * as type from './constant';
export default{
	[type.CHG.loading](state, data){
		state.loading = data;
	}
};