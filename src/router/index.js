import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: '/', name: 'Home', component: () => import('../pages/home.vue') },
    { path: '/about-us', name: 'About us', component: () => import('../pages/about-us.vue') },
    { path: '/services', name: 'Services', component: () => import('../pages/services.vue') },
    { path: '/catalogue', name: 'Catalogue', component: () => import('../pages/catalogue.vue') },
    { path: '/calculator', name: 'Calculator', component: () => import('../pages/calculator.vue') },
    { path: '/map', name: 'Map', component: () => import('../pages/map.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router