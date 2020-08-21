import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
      { path: '/', name: 'AntiqueLIst', component: () => import("@/views/AntiqueList") },
  ],
  mode: "history"
})
export default router;
