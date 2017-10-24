// todo：可以进一步优化整合
const state = [
	'config',
];

function constObj(type, state) {
	let o = {};
	// todo-JS:state.values ES6语法无效 只能换map
	// console.log(`state:`, state.values())
	state.map(val => {o[val] = type + val;});
	// console.log(`constantJs:`, o)
	return o;
}
export const FLT = constObj('FLT', state);
export const CHG = constObj('CHG', state);
export const UPD = constObj('UPD', state);

