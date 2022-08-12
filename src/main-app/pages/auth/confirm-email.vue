<template>
    <div class="auth-page">
        <div class="container-fluid p-0">
            <div class="row g-0">
                <div class="col-xxl-3 col-lg-4 col-md-4"></div>
                <div class="col-xxl-6 col-lg-4 col-md-4">
                    <div class="auth-full-page-content d-flex p-sm-5 p-4">
                        <div class="w-100">
                            <div class="d-flex flex-column h-100">
                                <div class="auth-content my-auto">
                                    <div class="text-center">
                                        <div class="avatar-lg mx-auto">
                                            <div class="avatar-title rounded-circle bg-light">
                                                <i class="bx bx-mail-send h2 mb-0 text-primary"></i>
                                            </div>
                                        </div>
                                        <div class="p-2 mt-4">
                                            <h4>Success !</h4>
                                            <p class="text-muted">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et</p>
                                            <div class="mt-4">
                                                <router-link :to="{ name: 'dashboard'}" class="btn btn-primary w-100">
                                                    Back to Home
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-4 mt-md-5 text-center">
                                    <p class="mb-0">© {{ new Date().getFullYear() }} Minia   . Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-lg-4 col-md-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ConfirmEmail',
    }
</script>