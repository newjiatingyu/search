import Vue from 'vue'
import VueRouter from 'vue-router'
import message from "../components/message.vue"
import my from "../components/my.vue"
import star from "../components/star.vue"

Vue.use(VueRouter)

const routes = [
    {
		path:"/",
		redirect:"/message"
	},
	{
		path:"/message",
		component:message
	},
	{
		path:"/my",
		component:my
	},
	{
		path:"/star",
		component:star
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
