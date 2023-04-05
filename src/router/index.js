import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import MarketplaceView from '../views/MarketplaceView.vue'
import DetailProductView from '../views/DetailProductView.vue'
import AdminDashboardView from '../views/AdminDashboardView.vue'
import AdminUsersView from '../views/AdminUsersView.vue'
import AdminMarketplaceView from '../views/AdminMarketplaceView.vue'
import AdminAddProductView from '../views/AdminAddProductView.vue'
import AdminEditProductView from '../views/AdminEditProductView.vue'
import AdminCategoryProductView from '../views/AdminCategoryProductView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminDashboardView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: MarketplaceView
  },
  {
    path: '/detail',
    name: 'detailproduct',
    component: DetailProductView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/users',
    name: 'adminusers',
    component: AdminUsersView
  },
  {
    path: '/product',
    name: 'adminmarketplace',
    component: AdminMarketplaceView
  },
  {
    path: '/add-product',
    name: 'adminaddproduct',
    component: AdminAddProductView
  },
  {
    path: '/edit-product',
    name: 'adminaeditproduct',
    component: AdminEditProductView
  },
  {
    path: '/category',
    name: 'adminacategoryproduct',
    component: AdminCategoryProductView
  }

]

const router = new VueRouter({
  routes
})

export default router
