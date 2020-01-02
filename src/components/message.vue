<template>
	<div class="box">
		<div class="search">
			<input v-model="value" type="text" @input="fn()"/>
		</div>
		<div class="renderarea">
			<ul>
				<li v-for="(item,index) in list" :key='index'>
					<p>{{item.name}}</p>
					<p>{{item.title}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex"
	export default{
		data(){
			return {
				value:''
			}
		},
		computed:{
			...mapState(['list'])
		},
		methods:{
			fn(){
				this.$store.commit('findname',{
					values:this.value
				})
			}
		},
		created(){
			this.$store.dispatch('getList')
		}
	}
</script>

<style scoped="scoped" lang="scss">
	 .box{
		 width:100%;
		 height:610px;
		 display: flex;
		 flex-direction: column;
		 .search{
			 width:100%;
			 height:50px;
			 background: #ccc;
			 input{
				 width:300px;
				 height:35px;
				 margin-top: 5px;
				 margin-left: 30px;
			 }
		 }
		 .renderarea{
			 width:100%;
			 flex:1;
			 ul{
				  width:100%;
				  display: flex;
				  flex-direction: column;
				  li{
					  width:100%;
					  height:70px;
					  border-bottom: 1px solid #ccc;
					  p{
						  margin: 15px;
					  }
				  }
			 }
		 }
	 }
</style>
