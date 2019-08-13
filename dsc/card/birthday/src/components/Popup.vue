<template>
    <div id="popup" class="popup" :class="`popup${id+1}`">
        <slot></slot>
        <button class="popup_close"></button>
    </div>
</template>

<script>
export default {
    props: ['id'],
    methods: {
        popupInit() {
            $('#popup').popup({
                opacity: 0.3,
                transition: 'all 0.3s',
                scrolllock: true,
                onclose: () => {
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
@import '@/assets/sass/common.scss';
.popup {
    position: absolute !important;
    top: 50%;
    left: 50%;
    margin: auto;
    max-width: 730px;
    max-height: 362px;
    width: 90%;
    height: 90%;
    border: 5px solid rgba(#fdecd1, .9);
    border-radius: 8px;
    background-color: rgba(#363330, .9);
    opacity: 0;
    transform: translate(-50%, -50%);
    @media (max-width: $tablet-width + 1) {
        max-height: none;
    }
    &_close {
        position: absolute;
        top: -16px;
        right: -16px;
        z-index: 1;
        width: 42px;
        height: 42px;
        border: none;
        background-color: transparent;
        background-image: url("~@/assets/images/popup-close.png");
        background-position: 50%;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: pointer;
        &:focus {
            outline: none;
        }
    }
}
</style>
