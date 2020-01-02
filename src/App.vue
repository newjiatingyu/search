<template>
  <div id="app">
    <div class="header"></div>
	<div class="mains"> <router-view/></div>
	<div class="footer">
		<router-link to="/message">消息</router-link>
		<router-link to="/my">我的</router-link>
		<router-link to="/star">空间</router-link>
	</div>
   
  </div>
</template>

<style lang="scss">
    *{
		padding: 0;
		margin: 0;
		list-style: none;
		text-decoration: none;
	}
	html,body,#app{
		width: 100%;
		height:100%;
	}
	#app{
		display: flex;
		flex-direction: column;
		.header{
			width:100%;
			height:50px;
			background: royalblue;
		}
		.mains{
			width:100%;
			flex:1;
		}
		.footer{
			width:100%;
			height:50px;
			display: flex;
			border-top:1px solid #ccc;
			justify-content: space-around;
			align-items: center;
			a{
				color:black;
				font-size:20px;
			}
		}
	}
</style>
