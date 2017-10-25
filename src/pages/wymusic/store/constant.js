// todo：可以进一步优化整合
const getters = [
	'songList',
	'showMiniAudio',
	'audio',
	'loading',
	'playing',
	'prBufferedTime',
	'prCurrentTime',
	'currentTime',
	'dragSong',
	'dragSongTime',
	
	'currentIndex',
	'durationTime',
	
	
];
const mutations = [
	'loading',
	'showMiniAudio',
	'dragSong',
	
	'play',
	'pause',
	'playprev',
	'playnext',
	'setCurrentTime',
	'setDurationTime',
	'setBufferedTime',
	
	'setAudioIndex',
	
	'setAudio',
	'setLocation',
	
	'addToList',

];
const actions = [
	'audioUrl',
	
	'loading',
];

function constObj(type, state) {
	let o = {};
	// todo-JS:state.values ES6语法无效 只能换map
	// console.log(`state:`, state.values())
	state.map(val => {o[val] = type + val;});
	// console.log(`constantJs:`, o)
	return o;
}

export const FLT = constObj('FLT', getters);
export const CHG = constObj('CHG', mutations);
export const UPD = constObj('UPD', actions);

