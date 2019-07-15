httpVueLoader.register(Vue, 'components/HoverBox.vue');
httpVueLoader.register(Vue, 'components/Ad.vue');
httpVueLoader.register(Vue, 'components/MenuMask.vue');
Vue.use(VueAwesomeSwiper);

const store = new Vuex.Store({
    state: {
        isMobile: false,
        showMask: true,
        showAd: true,
    },
    mutations: {
        updateDevice(state, payload) {
            state.isMobile = payload;
        },
        toggleMask(state, payload) {
            state.showMask = payload;
        },
        toggleAd(state, payload) {
            state.showAd = payload;
        },
    }
});

new Vue({
    el: '#section1-app',
    template: `
        <div class="hoverBoxs">
            <div class="container">
                <Hover-box customClass="hoverBox1">
                    <template slot="content">
                        <p class="hoverBox-title">老闆</p>
                    </template>
                    <template slot="hover">
                        <ul>
                            <li>每天到處跑客戶，生產狀況究竟怎樣？</li>
                            <li>到底機台幫我賺了多少錢？</li>
                            <li>機台的利用率是如何？</li>
                            <li>成本預算不足怎麼辦？</li>
                        </ul>
                    </template>
                </Hover-box>
                <Hover-box customClass="hoverBox2">
                    <template slot="content">
                        <p class="hoverBox-title">廠長/現場主管</p>
                    </template>
                    <template slot="hover">
                        <ul>
                            <li>訂單遲遲交不上來，機台運作狀況？</li>
                            <li>到底機台在作什麼訂單呀？</li>
                            <li>機台每天生產多少什麼產品呀？</li>
                            <li>是否可即時反映機台異常？</li>
                        </ul>
                    </template>
                </Hover-box>
            </div>
        </div>
    `,
});

new Vue({
    el: '#section3',
    computed: {
        locale() {
            return location.href.search('www.digiwin.com/tw') !== -1 ? 'tw' : 'cn';
        }
    },
});

new Vue({
    el: '#section5-app',
    components: {
        LocalSwiper: VueAwesomeSwiper.swiper,
        LocalSlide: VueAwesomeSwiper.swiperSlide,
    },
    data: {
        swiperOptionB: {
            loop: true,
            autoplay: {
                disableOnInteraction: false
            }
        },
        activeIndex: 0,
    },
    computed: {
        swiperB() {
            return this.$refs.awesomeSwiperB.swiper;
        },
        slides() {
            return [
                {
                    imgSrc: 'slide1.jpg',
                    caption: '設備狀態'
                },
                {
                    imgSrc: 'slide2.jpg',
                    caption: '設備稼動'
                },
                {
                    imgSrc: 'slide3.jpg',
                    caption: '資產回報量化'
                },
                {
                    imgSrc: 'slide4.jpg',
                    caption: '總體稼動率'
                },
                {
                    imgSrc: 'slide5.jpg',
                    caption: '設備綜合效率'
                },
            ];
        },
        caption() {
            return this.slides[this.activeIndex].caption;
        },
        locale() {
            return location.href.search('www.digiwin.com/tw') !== -1 ? 'tw' : 'cn';
        }
    },
    methods: {
        onSlideChange() {
            this.activeIndex = this.swiperB.realIndex;
        },
        slideImg(imgSrc) {
            if (this.locale === 'tw') {
                return `images/tw/${imgSrc}`;
            }
            else {
                return `images/${imgSrc}`;
            }
        },
    },
    template: `
        <div class="section5-carousel">
            <div class="section5-slider">
                <local-swiper ref="awesomeSwiperB" :options="swiperOptionB" @slide-change="onSlideChange">
                    <local-slide v-for="slide in slides" :key="slide.imgSrc">
                        <img :src="slideImg(slide.imgSrc)" alt="">
                    </local-slide>
                </local-swiper>
            </div>
            <span class="section5-caption">{{caption}}</span>
        </div>
    `
});

new Vue({
    el: '#ad',
    methods: {
        mediaSensor: _.throttle(function () {
            let mm = window.matchMedia('(min-width: 769px)');
            mm.addListener(this.resizeWidth);
            this.resizeWidth(mm);
        }, 100),
        resizeWidth(pMatchMedia) {
            let isMobile = pMatchMedia.matches ? false : true;
            store.commit('updateDevice', isMobile);
            if (!isMobile) {
                store.commit('toggleMask', false);
            }
        },
    },
    mounted() {
        window.addEventListener('resize', this.mediaSensor);
        this.mediaSensor();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.mediaSensor);
    }
});
