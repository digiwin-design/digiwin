<template>
    <div class="content">
        <div class="content1">
            <div class="container">
                <div class="content1__text" ref="leftText">
                    <p class="content1__text--title" data-text="從畢業到就業"></p>
                    <p>不論你是準碩士畢業生或是擁有碩士畢業學位工作經驗２年內，就有機會成為儲備ＭＡ一員，在數智時代以及趨勢未來中，加入鼎新厚植專業根基、累積實務經驗，創造自我價值，迎向新未來。</p>
                </div>
            </div>
        </div>
        <div class="content2" ref="content2">
            <div>
                <div class="container">
                    <div class="content2__text" ref="rightText">
                        <p class="content2__text--title" data-text="從菜鳥變身專家"></p>
                        <p>突破自我極限，離開舒適圈，我們提供全方位、系統化的訓練，快速充實各方面專業能力、提升視野，並擁有寬廣的發展空間，在數智領航的未來時代，成就將與你同行。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import gsap from 'gsap';
import dat from 'dat.gui';

export default {
    name: 'Section1-content',
    data() {
        return {
            timeline: null,
        }
    },
    methods: {
        scrollHandler: _.throttle(function () {
            let windowBottom = window.pageYOffset + window.innerHeight;
            let targetPos = this.$el.getBoundingClientRect().top + window.pageYOffset;
            if (targetPos < windowBottom) {
                this.timeline.play();
            }
        }, 100),
        initGUI() {
            let _this = this;
            let gui = new dat.GUI();
            let controls = {
                restart: function () {
                    _this.timeline.restart();
                    window.addEventListener('scroll', _this.scrollHandler);
                }
            };
            gui.add(controls, 'restart');
        },
        initAn() {
            this.timeline = gsap.timeline();
            this.timeline.from(this.$refs.leftText, { duration: .5, x: -100, opacity: 0 });
            this.timeline.from(this.$refs.content2, { duration: .5, x: '100%' });
            this.timeline.from(this.$refs.rightText, { duration: .5, x: 100, opacity: 0 });
            this.timeline.pause();
        },
    },
    mounted() {
        this.initGUI();
        this.initAn();
        window.addEventListener('scroll', this.scrollHandler);
    },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/common/variable';
@import '~@/assets/sass/common/helpers';

.content {
    position: relative;
    overflow: hidden;
    @media (min-width: $tablet-width + 1) {
        margin-top: -11.3%;
    }
}
.content1__text,
.content2__text {
    font-size: 18px;
    line-height: 30px;
    @media (min-width: $tablet-width + 1) {
        position: absolute;
        padding-top: 2em;
        line-height: 1.3;
    }
    @media (min-width: 1000px) {
        font-size: 20px;
        line-height: 36px;
    }
    @media (min-width: $content-width) {
        padding-top: 0;
    }
    &--title {
        margin-bottom: .5em;
        width: 240px;
        height: 45px;
        border: 1px solid #ff00a5;
        text-align: center;
        transform: skewX(10deg);
        @media (min-width: $tablet-width + 1) {
            width: 260px;
        }
        &::before {
            display: block;
            color: #b50b6f;
            content: attr(data-text);
            letter-spacing: getLetterSpacing(50);
            font-weight: bold;
            font-size: 28px;
            line-height: 45px;
            transform: skewX(-10deg);
            @media (min-width: $tablet-width + 1) {
                font-size: 30px;
            }
        }
    }
}
.content1 {
    @include bg('section1-bg1-s.jpg');
    padding-top: 185px;
    height: 640px;
    @media (min-width: $tablet-width + 1) {
        padding-top: 0;
        padding-bottom: percentage(834 / 1920);
        height: 0;
        background-image: url('section1-bg1.jpg');
        background-size: 100% auto;
    }
    &__text {
        width: 270px;
        @media (min-width: $mobile-width + 1) {
            min-width: 240px;
            width: 55%;
        }
        @media (min-width: $tablet-width + 1) {
            top: 25%;
            left: 20px;
            width: 30%;
        }
        @media (min-width: $content-width) {
            top: 32%;
            left: 10%;
            width: percentage(392 / 1920);
        }
    }
}
.content2 {
    @include bg('section1-bg2-s.jpg', 33% 0);
    padding-top: 35px;
    height: 620px;
    @media (min-width: $mobile-width + 1) {
        padding-top: 290px;
    }
    @media (min-width: $tablet-width + 1) {
        position: absolute;
        right: 0;
        bottom: 0;
        padding-top: 0;
        width: percentage(1038 / 1920);
        height: auto;
        background-image: none;
        > div {
            padding-bottom: percentage(620 / 1038);
            background-image: url('section1-bg2.png');
            background-size: 100% auto;
        }
    }
    &__text {
        margin-left: auto;
        width: 240px;
        @media (min-width: $mobile-width + 1) {
            min-width: 240px;
            width: 55%;
        }
        @media (min-width: $tablet-width + 1) {
            top: 0;
            right: 20px;
            z-index: 1;
            margin-left: 0;
            width: 50%;
        }
        @media (min-width: $content-width) {
            top: 47%;
            right: 20%;
            width: percentage(388 / 1038);
        }
    }
}
</style>