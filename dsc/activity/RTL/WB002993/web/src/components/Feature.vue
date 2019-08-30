<template>
    <div class="feature">
        <h3>{{feature.title}}</h3>
        <p v-html="feature.content"></p>
    </div>
</template>

<script>
export default {
    props: ['feature'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/common.scss';
.feature {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    width: 350px;
    height: 180px;
    border-radius: 10px;
    background-image: linear-gradient(to bottom, #fff, #fff7e5);
    box-shadow: 0 0 5px #ccc;
    align-items: center;
    justify-content: center;
    @media (max-width: $content-width) {
        margin: 36px 18px;  
    }
    @for $i from 1 through 3 {
        &:nth-of-type(#{$i})::before {
            position: absolute;
            top: -36px;
            left: calc(50% - 49.5px);
            width: 99px;
            height: 99px;
            background-image: url('~@/assets/images/feature#{$i}-bg.png');
            content: '';
        }
    }
    h3 {
        margin-bottom: .3em;
        color: #eb6100;
        letter-spacing: getLetterSpacing(20);
        font-weight: bold;
        font-size: 28px;
    }
    p {
        color: #626262;
        text-align: center;
        font-size: 20px;
        line-height: 26px;
    }
}
</style>