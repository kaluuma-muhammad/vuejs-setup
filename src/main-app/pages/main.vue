<template>
    <div id="layout-wrapper">
        <Header />
        <SideBar />

        <div class="main-content">
            <router-view/>
            <Footer />
			<RightBar />
        </div>
    </div>
</template>

<script>
    import Header from '@/main-app/includes/header.vue'
    import SideBar from '@/main-app/includes/sidebar.vue'
    import RightBar from '@/main-app/includes/rightbar.vue'
    import Footer from '@/main-app/includes/footer.vue'

    export default {
		name: 'Dashboard',
        components: {
            Header,
            SideBar,
            Footer,
			RightBar
        },
        mounted(){
			var scripts = [
				"/assets/libs/jquery/jquery.min.js",
				"/assets/libs/bootstrap/js/bootstrap.bundle.min.js",
				"/assets/libs/metismenu/metisMenu.min.js",
				"/assets/libs/simplebar/simplebar.min.js",
				"/assets/libs/node-waves/waves.min.js",
				"/assets/libs/feather-icons/feather.min.js",

				"/assets/libs/pace-js/pace.min.js",
				"/assets/libs/apexcharts/apexcharts.min.js",
				"/assets/js/pages/apexcharts.init.js",
				"/assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js",
				"/assets/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js",
				"/assets/js/pages/dashboard.init.js",
				"/assets/js/app.js",
			];

			scripts.forEach((script) => {
				let tag = document.createElement("script");
				tag.setAttribute("src", script);
				document.head.appendChild(tag);
			})
		},
	}
</script>