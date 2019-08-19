<template>
	<div>
		<h2>{{ msg }}</h2>
		<hr />
		<h3>{{ $store.state.count }} ----  {{ count }}</h3>

		<p>
			<button @click="$store.commit('add')">+</button>
			<button @click="$store.commit('reduce')">-</button>
		</p>

	</div>
</template>


<script>
	
import store from '@/vuex/store'	
import { mapState } from 'vuex'	
export default { 
	data(){
		return {
			msg: 'Hello Vuex'
		}
	},
	computed:mapState(['count']),
	store
}


/*
3种方式实现：{{ $store.state.count }}直接用 {{ count }}
1.	computed:{
		count(){
			return this.$store.state.count
		}
	},
2.	import { mapState } from 'vuex'	
	computed:mapState({
		count:state=>state.count
	}),
	store
3.	import { mapState } from 'vuex'		// 推荐这种方式	
	computed:mapState(['count']]),
	store

*/


</script>

