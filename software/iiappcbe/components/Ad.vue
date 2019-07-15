<template>
    <div class="ad">
        <template v-if="active">
            <a :href="url" class="ad-content" target="_blank">
                <img :src="imgSrc" alt>
            </a>
            <a href class="ad-close" @click.prevent="closeAd">
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAe1BMVEUAAAD/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCb/xCYjISH/xCYvKiGqhCT2vSaQcSM8MiHiriVjTiJxWiNWRyIrJiGviSTBlSS0iySkgCRJPSJFOiKCZSNRQSLstiXXpiWXdyREmuutAAAAEnRSTlMA74j31mIPpVuVFgHyp5JZGBLkiSteAAABNUlEQVQ4y+2U3Y6DIBCFBaVqa/9mQBTrX1vbvv8TrrgSzCr2Yi82m/RcgMQv48lhRu+j/6ANC4MESRCyzVuU+qK4ceC3Qvh0HY/Ii4MRf5HIje5odYGpLhXduWDamrJGvKUO9tgYdkI3x0V2S7QHIeTIKSGy3gnZLsGHgRKI8ptNsda7PCyF5pcDVCOqfutGFkp/IUAmYFCWY9rpNc9gkGBzOCxgpFPMwbJQhHM4uPYvjNsHpsocr8EcJjY3iRMWOJnDCFMYpT3iWuU7Yo6obGWHZxOwjkSteA4LG0YGnV7daTBhYn5oSiE+Tc7OG3ya70vE2nmDXqwDaBDvGrGPMnZ13UyurvOiaqGfq8g5KeUPtmzpL2fQTrcsbVlpptuhUzz5b8Qn743ObB8kmAR7dvY++hN9Ab/eLAXJV7h3AAAAAElFTkSuQmCC"
                    alt
                >
            </a>
        </template>
    </div>
</template>

<script>
module.exports = {
    computed: {
        isMobile() {
            return store.state.isMobile;
        },
        active() {
            return store.state.showAd;
        },
        url() {
            return 'http://bit.ly/30wnJvp';
        },
        imgSrc() {
            return 'images/tw/ad.jpg';
        },
        showTime() {
            return {
                start: dayjs('2019-07-15').valueOf(),
                end: dayjs('2019-07-18').valueOf()
            }
        },
    },
    watch: {
        isMobile(value) {
            if (value && this.active) {
                store.commit('toggleMask', true);
            }
        }
    },
    methods: {
        closeAd() {
            store.commit('toggleMask', false);
            store.commit('toggleAd', false);
        },
        adController() {
            let today = dayjs().valueOf();
            if (today >= this.showTime.start && today < this.showTime.end) {
                store.commit('toggleAd', true);
            }
            else {
                store.commit('toggleAd', false);
            }
        }
    },
    created() {
        this.adController();
    },
}
</script>

<style>
.ad {
  position: fixed;
  right: 20px;
  bottom: 0;
  z-index: 10;
}
@media (max-width: 768px) {
  .ad {
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
  }
}
.ad-content {
  display: block;
}
.ad-close {
  position: absolute;
  top: -22px;
  right: -22px;
}
.ad img {
  max-width: none;
}
</style>
