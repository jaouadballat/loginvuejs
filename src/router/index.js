import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Signin from '@/components/signin'
import Signup from '@/components/signup'
import firebase from 'firebase'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
  	{
  		path: '*',
  		redirect: '/login'
  	},
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {
        requiredAuth: true
      }
    },
    {
    	path: '/login',
    	name: 'signin',
    	component: Signin
    },
    {
    	path: '/signup',
    	name: 'signup',
    	component: Signup
    }
  ]
})

router.beforeEach((to, from, next) => {
  var user = firebase.auth().currentUser;
  var requiredAuth = to.matched.some(record => record.meta.requiredAuth);
  if(requiredAuth && !user){
   next('login')
  }else if(!requiredAuth && user) {
    next('hello')
  }else {
    next()
  }

})


export default router
