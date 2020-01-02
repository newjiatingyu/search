import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  list:[]
  },
  mutations: {
	  changelist(state,payload){
		  console.log(payload)
		  state.list=payload.list
	  },
	  findname(state,payload){
		  //查找对应的姓名 遍历数组
		  console.log(payload)
		  let names=state.list.filter((item,index)=>{
			  return item.name.includes(payload.values)
		  })
		  console.log(names)
		  state.list=names
	  }
  },
  actions: {
	  getList({commit},patload){
		  axios.get('/getdata').then((res)=>{
			  commit('changelist',{
				  list:res.data.data
			  })
		  })
	  }
  },
  modules: {
  }
})
