const routes = [
	{ 
		path: '/',
		component: () => import('@/main-app/pages/main.vue'),
		title: 'My Shop',
		children: [
			{
				path: '/', name: 'dashboard', 
				component: () => import('@/main-app/pages/dash/dash.vue')
			},

			{
				path: '/profile', name: 'profile', 
				component: () => import('@/main-app/pages/users/profile.vue')
			}

		],
	},
]

export default routes;