// 部署路徑
let router = { path: 'activity/WB002929' };
switch (process.env.DEPLOY_ENV) {
  case 'TEST':
    router.base = `/tw/dsc/dev/${router.path}/test/`;
    break;
  case 'DEV':
    router.base = `/tw/dsc/dev/${router.path}/web/`;
    break;
  case 'PROD':
    router.base = `/tw/dsc/${router.path}/web/`;
    break;
  default:
    router.base = '/';
    break;
}

const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '2019儲備菁英計畫',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'preload', href: 'public/images/section1-bg.jpg', as: 'image' },
      { rel: 'preload', href: 'public/images/section1-triangle-l.png', as: 'image' },
      { rel: 'preload', href: 'public/images/section1-triangle-r.png', as: 'image' },
      { rel: 'stylesheet', href: 'public/preload.css' },
    ],
    script: [
      { src: 'https://polyfill.io/v3/polyfill.js?features=default,fetch,HTMLPictureElement&flags=gated', defer: 'defer' },
      { src: 'public/vendor/jquery.min.js', defer: 'defer' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'animate.css',
    '~/assets/css/transition.css',
    '~/assets/css/imagehover.min.css',
    '~/assets/css/bar_m.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: 'plugins/gtm.js', ssr: false },
    { src: 'plugins/modernizr-custom.js', ssr: false },
    { src: 'plugins/mobile-detect.js', ssr: false },
    { src: 'plugins/mobile-detect-modernizr.js', ssr: false },
    { src: 'plugins/fullpage', ssr: false },
    { src: 'plugins/jquery-popup-overlay.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  server: {
    host: '0.0.0.0',
    port: 2929
  },
  router: {
    base: router.base
  },
  env: {
    API_URL: router.base === '/' ? 'http://localhost:2929/' : `http://www.digiwin.com${router.base}`
  }
}
