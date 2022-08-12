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
                                        <h5 class="mb-0">Lock Screen</h5>
                                        <p class="text-muted mt-2">Enter your password to unlock the screen!</p>
                                    </div>
                                    <div class="user-thumb text-center mb-4 mt-4 pt-2">
                                        <img src="assets/images/users/avatar-1.jpg" class="rounded-circle img-thumbnail avatar-lg" alt="thumbnail">
                                        <h5 class="font-size-15 mt-3">Shawn</h5>
                                    </div>
                                    <form class="mt-4" action="index.html">
                                        <div class="mb-3">
                                            <label class="form-label" for="userpassword">Password</label>
                                            <input type="password" class="form-control" id="userpassword" placeholder="Enter password">
                                        </div>
                                        <router-link :to="{name: 'dashboard'}">
                                            <div class="mb-3 mt-4">
                                                <button class="btn btn-primary w-100 waves-effect waves-light" type="submit">Unlock</button>
                                            </div>
                                        </router-link>
                                    </form>
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
        name: 'LockScreen',
    }
</script>