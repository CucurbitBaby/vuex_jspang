import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	count:3
}


const mutations = {
	add(state,n){
		state.count+=n;
	},
	reduce(state,n){
		state.count-=n;
	}
}


const getters = {
	count:function(state){
		return state.count +=1000;
	}
}

export default new Vuex.Store({
	state,
	mutations,
	getters
})