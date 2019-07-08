<template>
    <div class="mapContainer">
        <div v-show="isMobile">
            <div id="map-s1" class="map-s1">
                <div class="svg-container"></div>
                <p class="caption">▲智慧製造</p>
            </div>
            <div id="map-s2" class="map-s2">
                <div class="svg-container"></div>
                <p class="caption">▲新零售</p>
            </div>
        </div>
        <div v-show="!isMobile" id="map" class="map">
            <div class="svg-container"></div>
        </div>
    </div>
</template>

<script>
module.exports = {
    data: function () {
        return {
            timeline: new TimelineMax(),
        }
    },
    computed: {
        isMobile: function () {
            return store.state.isMobile;
        },
        elements: function () {
            return {
                map: document.querySelector('#map'),
                mapS1: document.querySelector('#map-s1')
            };
        }
    },
    methods: {
        getSvg: function () {
            Promise.all([fetchFile('images/erpAll/map-s1.svg'), fetchFile('images/erpAll/map-s2.svg'), fetchFile('images/erpAll/map.svg')]).then(function (res) {
                document.querySelector('#map-s1 .svg-container').innerHTML = res[0];
                document.querySelector('#map-s2 .svg-container').innerHTML = res[1];
                document.querySelector('#map .svg-container').innerHTML = res[2];
                // this.initGUI();
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
            this.timeline.pause(0);

            // map1
            this.timeline.from('.js-map1-1', .5, {
                y: '-=20',
                opacity: 0,
            })
                .from('.js-map1-2', .5, {
                    y: '-=20',
                    opacity: 0,
                })
                .from('.js-map1-3', .5, {
                    y: '+=20',
                    opacity: 0,
                })
                .from('.js-map1-4', .5, {
                    y: '+=20',
                    opacity: 0,
                })
                .from('.js-map1-5', .5, {
                    y: '-=20',
                    opacity: 0,
                })
                .to('.js-bg', 1, {
                    scale: 1.5,
                    opacity: 0,
                    repeat: -1,
                    transformOrigin: '50% 50%',
                });

            // map2
            let map2_1 = TweenMax.from('.js-map2-1', .5, {
                y: '-=20',
                opacity: 0,
            });
            this.timeline.add(map2_1, 0);
        },
        scrollHandler: _.throttle(function () {
            let el = this.isMobile ? this.elements.mapS1 : this.elements.map;
            let offset = el.offsetHeight;
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