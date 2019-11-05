<template>
    <div class="hover-box">
        <h2>{{box.title}}</h2>
        <div class="hover-box__content">
            <p class="hover-box__before" v-html="box.before"></p>
            <p class="hover-box__after" v-html="box.after"></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        box: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.hover-box {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 308px;
    border-radius: 20px;
    border-radius: 20px;
    color: #fff;
    &::after {
        position: absolute;
        bottom: 15px;
        left: calc(50% - 10.5px);
        width: 0;
        height: 0;
        border-width: 0 10.5px 13px 10.5px;
        border-style: solid;
        border-color: transparent transparent #fff transparent;
        content: '';
        animation: arrowAn .8s infinite alternate ease-in;
    }
    > h2 {
        height: 78px;
        background-color: #06346d;
        text-align: center;
        font-weight: bold;
        font-size: 30px;
        line-height: 78px;
    }
    &__content {
        height: 230px;
    }
    &__before,
    &__after {
        display: flex;
        padding: 20px;
        height: 100%;
        font-weight: bold;
        line-height: 1.3;
        justify-content: center;
        align-items: center;
    }
    &__before {
        background-color: #0690e7;
        font-size: 22px;
    }
    &__after {
        background-color: #08acb2;
        transition: transform .4s;
        @at-root {
            .hover-box:hover .hover-box__after {
                transform: translateY(-100%);
            }
        }
    }
}
@keyframes arrowAn {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-60%);
    }
}
</style>