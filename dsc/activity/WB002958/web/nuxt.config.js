// 部署路徑
let router = { path: 'activity/MFT/WB002958' };
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
            { property: 'og:url', content: `https://www.digiwin.com${router.base}` },
            { property: 'og:type', content: 'website' },
            { property: 'og:image', content: `https://www.digiwin.com${router.base}public/images/fb-share-v2.png` },
            { property: 'og:image:width', content: '848' },
            { property: 'og:image:height', content: '446' },
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
        port: 2958
    },
    router: {
        base: router.base,
        scrollBehavior: (to, from, savedPosition) => {
            let position = false

            // if no children detected
            if (to.matched.length < 2) {
                // scroll to the top of the page
                position = { x: 0, y: 0 }
            } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
                // if one of the children has scrollToTop option set to true
                position = { x: 0, y: 0 }
            }

            // savedPosition is only available for popstate navigations (back button)
            if (savedPosition) {
                position = savedPosition
            }

            return new Promise(resolve => {
                // wait for the out transition to complete (if necessary)
                window.$nuxt.$once('triggerScroll', () => {
                    // coords will be used if no selector is provided,
                    // or if the selector didn't match any element.
                    if (to.hash && document.querySelector(to.hash)) {
                        // scroll to anchor by returning the selector
                        position = { selector: to.hash }
                    }
                    resolve(position)
                })
            })
        }
    },
    env: {
        BASE_URL: router.base,
        API_URL: router.base === '/' ? 'http://10.20.88.75:2958/' : `https://www.digiwin.com${router.base}`
    }
}
