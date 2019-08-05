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


<style lang="scss" scoped src="~/assets/sass/components/popup.scss"></style>
