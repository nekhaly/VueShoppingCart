import { createApp } from 'vue'
import * as VueRouter from 'vue-router'

import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage.vue'

import App from './App.vue'

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{ 
        path: '/cart',
        component: ShoppingCartPage
    }, { 
        path: '/products',
        component: ProductsPage
    }, {
        path: '/products/:productId',
        component: ProductDetailPage
    }
    ]
}))
.mount('#app')
