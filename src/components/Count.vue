<template>
	<div>
		<h2>{{ msg }}</h2>
		<hr />
		<h3>{{ count }}</h3>

		<p>
			<button @click="$store.commit('add',10)">+</button>
			<button @click="reduce(2)">-</button>
		</p>

	</div>
</template>


<script>
	
import store from '@/vuex/store'	
import { mapState,mapMutations } from 'vuex'	
export default { 
	data(){
		return {
			msg: 'Hello Vuex'
		}
	},
	computed:mapState(['count']),
	methods: mapMutations(['add','reduce']),
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

--------------------------------------------------------------------------

mapMutations
1.store.js种mutations的方法传参默认第一个args是state  组件使用方法第一个传递方法名，然后第二个传参

2.直接 引入mapMutations，再methods种添加mutations方法   组件直接就可以绑定方法，直接第一个传参
	   import { mapState,mapMutations } from 'vuex'	


*/


</script>

