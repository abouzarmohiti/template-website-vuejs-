<template>
  <header class="lawFirm--header">
        <div class="lawFirm--navbar-cover">
            <div class="container">
                <!-- Navbar Start -->
                <nav class="lawFirm--navbar pt-30 pb-30 p-relative">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-8">
                            <!-- Logo -->
                            <div class="lawFirm--logo font-weight-bold">
                                <a href="index.html" class="playfair">
                                    <img src="images/logo.png" alt="" class="img-fluid" data-rjs="2">
                                </a>
                            </div>
                            <!-- End of Logo -->
                        </div>

                        <div class="col-lg-7 col-4 p-relative">
                            <!-- Nav Menu -->
                            <div class="lawFirm--nav-menu ul-default">
                                <ul>
                                    <li><nuxt-link to="/">Home Page</nuxt-link></li>
                                    <li><nuxt-link to="/about">About Page</nuxt-link></li>
                                    <li><nuxt-link to="/jokes">jokes Page</nuxt-link></li>
                                    <li class="menu-item-has-children"><a href="#">Page</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item-has-children"><a href="#">Lawyers</a>
                                                <ul class="sub-menu">
                                                    <li><a href="lawyers.html">Lawyers List</a></li>
                                                    <li><a href="lawyer-details.html">Lawyers Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="search-result.html"> Search Result</a></li>
                                            <li><a href="404.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children"><a href="#">Blog</a>
                                        <ul class="sub-menu">
                                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <!-- End of Nav Menu -->
                        </div>

                        <!-- Mobile Header Icons -->
                        <div class="lawFirm--mobile-header-icon">
                            <div class="lawFirm--search-form-icon">
                                <i class="fa fa-search"></i>
                                <!-- Nav Search Form -->
                                <div class="lawFirm--header-search-form input-group mb-3">
                                    <input type="text" class="form-control lawFirm--input-style" placeholder="Search Your Result......">
                                    <div class="input-group-append">
                                        <button class="btn" type="button"><i class="fa fa-search"></i></button>
                                    </div>
                                </div>
                                <!-- End of Nav Search Form -->
                            </div>
                            <div class="lawFirm--off-canvas-trigger">
                                <i class="fa fa-align-right"></i>
                            </div>
                        </div >
                        <!-- End of Mobile Header Icons -->
                    </div>
                </nav>
                <!-- End of Navbar -->
            </div>
        </div>

        <!-- Off Canvas -->
        <div class="lawFirm--off-canvas">
            <div class="lawFirm--off-canvas-cover pt-50 pl-30 pr-30">
                <!-- Close Button -->
                <i class="lawFirm--off-canvas-close fa fa-close"></i>

                <!-- Logo -->
                <div class="lawFirm--logo pt-35 pb-20">
                    <a href="#"><img src="images/logo.png" alt="" class="img-fluid" data-rjs="2"></a>
                </div>
                <!-- End of Logo -->

                <!-- About us -->
                <div class="lawFirm--about-in-canvas pt-20 pb-20">
                    <h3 class="pb-20">About us</h3>
                    <p class="pb-20">Lorem ipsum  sit amet, consectetur ut adipiscing elit, sed do ut eiusmod sed tempor incididunt labore et dolore magna aliqua. Quis ipsum sus ultrices gravida. Risus commodo  maecenas accumsan lacus.</p>
                    <a href="#" class="lawFirm--btn">Contact Us</a>
                </div>
                <!-- End of About us-->

                <!-- Subscribe Form -->
                <div class="lawFirm--sub-form-in-canvas pt-40 pb-20">
                    <h3 class="pb-20">Subscribe Our News Letter</h3>
                    <form action="https://themelooks.us13.list-manage.com/subscribe/post?u=79f0b132ec25ee223bb41835f&amp;id=f4e0e93d1d" method="post" novalidate class="canvas-search-form input-group mb-3">
                        <input type="text" class="form-control lawFirm--input-style" placeholder="Type Your Email" required>
                        <div class="input-group-append">
                            <button class="btn" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
                <!-- End of Subscribe Form -->

                <!-- Contact Info -->
                <div class="lawFirm--contact-in-canvas ul-default pt-40">
                    <h3 class="pb-20">Contact Info</h3>
                    <ul>
                        <li class="pb-20 pl-30"><i class="fa fa-map-marker"></i> Kirkland 601 Lexington Avenue New York, NY 10022 United States</li>
                        <li class="pb-20 pl-30"><i class="fa fa-phone"></i> +1212-446-4400 </li>
                        <li class="pb-20 pl-30"><i class="fa fa-envelope"></i> youremail@mail.com </li>
                    </ul>
                </div>
                <!-- End of Contact Info -->
            </div>
        </div>
        <!-- End of Off Canvas -->
    </header>
</template>

<script>

  export default {
    name: "AppHeader"
  }
</script>

<style scoped>

</style>
