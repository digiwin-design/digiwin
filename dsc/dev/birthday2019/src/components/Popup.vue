<template>
    <div id="popup" class="popup">
        <slot></slot>
        <button class="popup_close"></button>
    </div>
</template>

<script>
export default {
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
.popup {
    position: absolute !important;
    top: 50%;
    left: 50%;
    margin: auto;
    max-width: 1067px;
    max-height: 621px;
    width: 90%;
    height: 90%;
    border: 1px solid #7bc9ff;
    border-radius: 5px;
    background-color: #232121;
    opacity: 0;
    transform: translate(-50%, -50%);
    @media (max-width: 1200px) {
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
