<template>
    <div class="auth-page">
        <div class="container-fluid p-0">
            <div class="row g-0">
                <div class="col-xxl-3 col-lg-4 col-md-4"></div>
                <div class="col-xxl-3 col-lg-4 col-md-5">
                        <div class="auth-full-page-content d-flex p-sm-5 p-4">
                            <div class="w-100">
                                <div class="d-flex flex-column h-100">
                                    <div class="auth-content my-auto">
                                        <div class="text-center">
                                            <div class="avatar-lg mx-auto">
                                                <div class="avatar-title rounded-circle bg-light">
                                                    <i class="bx bxs-envelope h2 mb-0 text-primary"></i>
                                                </div>
                                            </div>
                                            <div class="p-2 mt-4">
                                                <h4>Verify your email</h4>
                                                <p>We have sent you verification email <span class="fw-bold">example@abc.com</span>, Please check it</p>
                                                <div class="mt-4">
                                                    <router-link :to="{ name: 'dashboard'}" class="btn btn-primary w-10">Verify email</router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-5 text-center">
                                            <p class="text-muted mb-0">Didn't receive an email ? <a href="#"
                                                    class="text-primary fw-semibold"> Resend </a> </p>
                                        </div>
                                    </div>
                                    <div class="mt-4 mt-md-5 text-center">
                                        <p class="mb-0">© {{ new Date().getFullYear() }} Minia   . Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end auth full page content -->
                    </div>
                <div class="col-xxl-3 col-lg-4 col-md-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EmailVerification',
    }
</script>