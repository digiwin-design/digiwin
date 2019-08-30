<template>
    <div id="popup" class="popup" :class="`popup${id+1}`">
        <Carousel v-if="showPopup" :id="id"></Carousel>
        <button class="popup_close">
            <i class="material-icons">close</i>
        </button>
    </div>
</template>

<script>
import 'jquery-popup-overlay';
import Carousel from '@/components/Carousel.vue'

export default {
    props: ['id'],
    components: {
        Carousel,
    },
    computed: {
        showPopup() {
            return this.$store.state.showPopup;
        }
    },
    methods: {
        popupInit() {
            $('#popup').popup({
                opacity: 0.3,
                transition: 'all 0.3s',
                scrolllock: true,
                onopen: () => {
                    this.$store.commit('togglePopup', true);
                },
                closetransitionend: () => {
                    this.$store.commit('togglePopup', false);
                }
            });
        },
    },
    mounted() {
        this.popupInit();
    },
}
</script>


<style lang="scss" scoped>
.popup {
    position: absolute !important;
    top: 50%;
    left: 50%;
    margin: auto;
    max-width: 1100px;
    max-height: 460px;
    width: 90%;
    height: 90%;
    opacity: 0;
    transform: translate(-50%, -50%);
    @media (max-width: 769px) {
        max-height: none;
    }
    &_close {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        display: flex;
        width: 42px;
        height: 42px;
        border: none;
        background-color: transparent;
        color: #535353;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        &:focus {
            outline: none;
        }
        i {
            font-weight: bold;
        }
    }
}
</style>
