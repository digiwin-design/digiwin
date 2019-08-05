// 部署路徑
let router = { path: 'activity/WB002926' };
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
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '本次年會，邀請流通教父 徐重仁、亞馬遜全球開店台灣區總經理 林惠君、治略資訊創辦人 王智將說明在數位浪潮熱度延燒下，流通產業面臨新零售態勢，企業如何比競爭者更快找到新客戶並踏入新零售找商機' },
      { property: 'og:url', content: `http://www.digiwin.com${router.base}` },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: '2019鼎新企業高峰年會：預測顧客未來消費，再創新零售的無限可能' },
      { property: 'og:description', content: '本次年會，邀請流通教父 徐重仁、亞馬遜全球開店台灣區總經理 林惠君、治略資訊創辦人 王智將說明在數位浪潮熱度延燒下，流通產業面臨新零售態勢，企業如何比競爭者更快找到新客戶並踏入新零售找商機' },
      { property: 'og:image', content: `http://www.digiwin.com${router.base}public/images/fb-share.png` },
    ],
    link: [
      { rel: 'preload', href: `${router.base}public/images/header-bg.jpg`, as: 'image' },
    ],
    script: [
      { src: 'https://polyfill.io/v3/polyfill.js?features=default,fetch,HTMLPictureElement&flags=gated', defer: 'defer' },
      { src: `${router.base}public/vendor/jquery.min.js`, defer: 'defer' },
      { src: `${router.base}public/vendor/swiper.min.js`, defer: 'defer' },
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
    '~/assets/css/transition.css',
    '~/assets/css/bar_m.css',
    'swiper/dist/css/swiper.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/gtm.js', ssr: false },
    { src: '~/plugins/modernizr-custom.js', ssr: false },
    { src: '~/plugins/mobile-detect.js', ssr: false },
    { src: '~/plugins/mobile-detect-modernizr.js', ssr: false },
    { src: '~/plugins/stickyfill.min.js', ssr: false },
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false },
    { src: '~/plugins/jquery-popup-overlay.js', ssr: false },
    { src: '~/plugins/jquery-nav-scroll', ssr: false },
    { src: '~/plugins/smartScroll.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
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
    port: 2926
  },
  router: {
    base: router.base
  },
  env: {
    BASE_URL: router.base,
    API_URL: router.base === '/' ? 'http://10.20.88.52:2926/' : `http://www.digiwin.com${router.base}`
  }
}
