<template>
    <div class="hoverBox" :class="[customClass, {'fadeIn': fadeIn}, {'arrow': arrow}]" onclick>
        <slot name="content"></slot>
        <div class="hoverBox-hover">
            <slot name="hover"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        customClass: String,
        fadeIn: {
            type: Boolean,
            default: false
        },
        arrow: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes arrow {
    50% {
        transform: translate(-50%, 100%);
    }
}
.hoverBox {
    position: relative;
    overflow-y: hidden;
    cursor: pointer;
}
.hoverBox:hover /deep/ [class$=-hover] {
    top: 83px;
}
.hoverBox /deep/ [class$=-hover] {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    height: calc(100% - 83px);
    transition: top .4s;
}
.hoverBox.fadeIn /deep/ [class$=-hover] * {
    opacity: 0;
}
.hoverBox.fadeIn:hover /deep/ [class$=-hover] * {
    animation: fadeIn 1s .4s forwards;
}
</style>
