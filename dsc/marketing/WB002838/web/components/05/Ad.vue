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
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

export default {
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        active() {
            return this.$store.state.showAd;
        },
        url() {
            return '/tw/activity/1855.html';
        },
        imgSrc() {
            return `${process.env.BASE_URL}public/images/05/ad.jpg`;
        },
    },
    watch: {
        isMobile(value) {
            if (value && this.active) {
                this.$store.commit('toggleMask', true);
            }
        }
    },
    methods: {
        closeAd() {
            this.$store.commit('toggleAd', false);
            this.$store.commit('toggleMask', false);
        },
        checkTime() {
            let showAd = dayjs().isBetween('2019-05-17', '2019-06-21');
            this.$store.commit('toggleAd', showAd && this.active);
            this.$store.commit('toggleMask', showAd && this.active && this.isMobile);
            
            let beforeEnd = dayjs().isBefore(dayjs('2019-06-21'));
            if (!beforeEnd) return;
            
            setTimeout(this.checkTime, 1000);
        }
    },
    created() {
        this.checkTime();
    },
}
</script>

<style lang="scss" scoped>
.ad {
    position: fixed;
    right: 20px;
    bottom: 0;
    z-index: 10;
    @media (max-width: 768px) {
        right: 50%;
        bottom: 50%;
        transform: translate(50%, 50%);
    }
    &-content {
        display: block;
    }
    &-close {
        position: absolute;
        top: -22px;
        right: -22px;
    }
    img {
        max-width: none;
    }
}
</style>
