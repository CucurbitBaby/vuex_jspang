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

const actions = {
	addAction(context){
		context.commit('add',100)
		setTimeout(()=>{context.commit('reduce',50)},5000)
		console.log('我比reduce先执行了')
	},
	reduceAction({commit}){
		commit('reduce',50)
	}
}


const moduleA = {
	state,mutations,getters,actions
}

// const moduleB = {
// 	state,mutations,getters,actions
// }

export default new Vuex.Store({
	modules:{a:moduleA}
})