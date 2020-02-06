export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/images/logo.png' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito%7CPlayfair+Display:400,700%7CYantramanav:400,700'},
/*      {rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'},*/
      {rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.min.css'},
      {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      {rel: 'stylesheet', type: 'text/css', href: '/css/owl.carousel.min.css'},
      {rel: 'stylesheet', type: 'text/css', href: '/css/nice-select.css'},
      {rel: 'stylesheet', type: 'text/css', href: '/css/style.css'},
      {rel: 'stylesheet', type: 'text/css', href: '/css/responsive.css'}

    ], script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'},
      /*{src: 'js/jquery-3.3.1.min.js'},*/
      {src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'},
      {src: 'js/bootstrap.bundle.min.js'},
      {src: 'js/owl.carousel.min.js'},
      {src: 'js/jquery.paroller.min.js'},
      {src: 'js/waypoints.js'},
      {src: 'js/jquery.counterup.min.js'},
      {src: 'js/retina.min.js'},
      {src: 'js/menu.js'},
      {src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCjkssBA3hMeFtClgslO2clWFR6bRraGz0'},
      {src: 'js/jquery.nice-select.min.js'},
      {src: 'js/scripts.js'}
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#fff'},
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
