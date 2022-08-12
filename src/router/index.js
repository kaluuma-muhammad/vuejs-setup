import { createRouter, createWebHistory } from 'vue-router'
import main_routes from '@/router/app-routes/main-app-routes'
import auth_routes from '@/router/app-routes/auth-routes'
const baseRoutes = []
const routes = baseRoutes.concat(auth_routes, main_routes);

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

router.beforeEach((to, from, next) => {
	console.log(`Navigating to: ${to.name}`);
	next();
});

export default router
