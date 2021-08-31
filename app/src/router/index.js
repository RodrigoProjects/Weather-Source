import { createRouter, createWebHistory } from 'vue-router'
import WeatherApp from '../views/WeatherApp.vue'

const routes = [
  {
    path: '/',
    name: 'WeatherApp',
    component: WeatherApp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
