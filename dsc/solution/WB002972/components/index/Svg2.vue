<template>
    <div ref="svg" class="svgContainer"></div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            timeline: new TimelineMax(),
            target: null
        }
    },
    methods: {
        getSvg: function () {
            fetchFile('images/index/section4-illust.svg').then(function (res) {
                this.$refs.svg.innerHTML = res;
                this.initGUI();
                this.initAn();
                this.scrollHandler();
                window.addEventListener('scroll', this.scrollHandler);
            }.bind(this));
        },
        initGUI: function () {
            let _this = this;
            let gui = new dat.GUI();
            let controls = {
                restart: function () {
                    _this.timeline.restart();
                    window.addEventListener('scroll', _this.scrollHandler);
                },
                pause: function () {
                    _this.timeline.pause(0);
                    window.addEventListener('scroll', _this.scrollHandler);
                }
            };
            gui.add(controls, 'restart');
            gui.add(controls, 'pause');
        },
        initAn: function () {
            this.target = $(this.$refs.svg).find('.js-group');
            this.timeline.set(this.target, {
                transformOrigin: '50% 50%',
                scale: .3,
                opacity: 0
            });
            this.timeline.pause(0);
            this.timeline.staggerTo(this.target, .5, {
                scale: 1,
                opacity: 1
            }, 0.5);
        },
        scrollHandler: _.throttle(function () {
            let el = this.$refs.svg;
            let offset = el.offsetHeight / 2;
            getScrollPos(el, offset, function () {
                this.timeline.play();
                window.removeEventListener('scroll', this.scrollHandler);
            }.bind(this));
        }, 100),
    },
    mounted: function () {
        this.getSvg();
    },
    beforeDestroy: function () {
        window.removeEventListener('scroll', this.scrollHandler);
    },
}
</script>

<style>
.dg.ac {
    z-index: 99;
}
</style>
