let routes = [
    {
		path: '/login', name: 'login', 
		component: () => import('@/main-app/pages/auth/login.vue') 
	},
	{ 
		path: '/register', name: 'register', 
		component: () => import('@/main-app/pages/auth/register.vue') 
	},
	{ 
		path: '/confirm-email', name: 'confirm-email', 
		component: () => import('@/main-app/pages/auth/confirm-email.vue') 
	},
	{ 
		path: '/email-verification', name: 'email-verification', 
		component: () => import('@/main-app/pages/auth/email-verification.vue') 
	},
	{ 
		path: '/lock-screen', name: 'lock-screen', 
		component: () => import('@/main-app/pages/auth/lock-screen.vue') 
	},
	{ 
		path: '/recover-password', name: 'recover-password', 
		component: () => import('@/main-app/pages/auth/recover-password.vue') 
	},
	{ 
		path: '/2-step-verification', name: '2-step-verification', 
		component: () => import('@/main-app/pages/auth/two-step-verification.vue') 
	},
]

export default routes;