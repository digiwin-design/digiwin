<template>
    <a
        href="/tw/zlsq.html?id=2048"
        target="_blank"
        class="robot"
        :class="{ active: active }"
        @mouseenter="isHover=true"
        @mouseleave="onMouseleave"
    ></a>
</template>

<script>
module.exports = {
    data: function () {
        return {
            debug: false,
            active: false,
            sec: 0,
            isHover: false,
            timer: null,
        }
    },
    methods: {
        getSvg: function () {
            fetch('images/mag201909/robot.svg')
                .then(function (res) { return res.text() })
                .then(function (res) {
                    this.$el.innerHTML = res;
                    if (this.debug) this.active = true;
                    this.setTimer();
                }.bind(this));
        },
        setTimer: function () {
            if (this.debug) return;
            clearTimeout(this.timer);
            this.timer = setTimeout(function () {
                if (this.sec < 7) {
                    this.active = true;
                    if (!this.isHover) {
                        this.sec++;
                        this.setTimer();
                    }
                }
                else {
                    this.active = false;
                    this.sec = 0;
                    setTimeout(this.setTimer, 3000);
                }
            }.bind(this), 1000);
        },
        onMouseleave: function () {
            this.isHover = false;
            this.sec = 0;
            this.setTimer();
        }
    },
    mounted: function () {
        this.getSvg();
    },
}
</script>

<style scoped>
.robot {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 370px;
    height: 370px;
    transition: transform 1s;
    transform: translateX(-100%);
}
.robot.active {
    transform: translateX(-100px);
}
.robot [data-name="arm"] {
    transform-origin: 202px 160px;
}
.robot.active [data-name="arm"] {
    animation: armAn 0.5s 1s infinite alternate;
}
.robot [data-name="lower-arm"] {
    transform-origin: 252px 212px;
}
.robot.active [data-name="lower-arm"] {
    animation: lowerArmAn 0.5s 1s infinite alternate;
}
.robot.active [data-name="ball"] {
    animation: ballAn 0.5s 1s infinite alternate ease-out;
}
@keyframes armAn {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(-35deg);
    }
}
@keyframes lowerArmAn {
    from {
        transform: rotate(35deg);
    }
    to {
        transform: rotate(0);
    }
}
@keyframes ballAn {
    from {
        transform: translate(53px, 20px);
    }
    to {
        transform: translate(-10px, -70px);
    }
}
</style>