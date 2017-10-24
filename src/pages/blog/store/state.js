// 直接读取
import configJson from '../json/config.json';
import colorsJson from '../json/colors.json';
export default{
	posts     : {},
	archives  : {},
	categories: {},
	tags      : {},
	post      : {},
	page      : {},
	config    : configJson,
	loading   : false,
	menu      : false,
	message   : '',
	colors    : colorsJson,
	headertitle:'',
	menuToggle:false
};