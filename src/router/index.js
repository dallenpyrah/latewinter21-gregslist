import { createRouter, createWebHashHistory } from 'vue-router'
import AboutPage from '../pages/AboutPage.vue'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import CarsPage from '../pages/CarsPage.vue'
import HomePage from '../pages/HomePage.vue'
import HousesPage from '../pages/HousesPage.vue'
import JobsPage from '../pages/JobsPage.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
import JobDetailsPage from '../pages/JobDetailsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  },
  {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },
  {
    path: '/houses',
    name: 'Houses',
    component: HousesPage
  },
  {
    path: '/houses/:id',
    name: 'HouseDetails',
    component: HouseDetailsPage
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: JobsPage
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
