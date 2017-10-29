import Vue from 'vue'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import App from './app.vue'
import store from './store'
import router from './router'

Vue.use(VueResource)
Vue.use(VueLazyload,{
	error:require('./assets/vueLazyload/error.svg'),
	loading:require('./assets/vueLazyload/loading.svg'),
	attempt:1
})

new Vue({
	el:"#app",
	store,
	router,
	render:h=>h(App)
})