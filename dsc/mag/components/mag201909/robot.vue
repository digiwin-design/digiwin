<template>
    <a
        href="javascipt:;"
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
                    this.setTimer();
                }.bind(this));
        },
        setTimer: function () {
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
    left: 0;
    bottom: 0;
    width: 370px;
    height: 300px;
    transition: transform 1s;
    transform: translateX(-100%) rotate(30deg);
}
.robot.active {
    transform: translateX(-100px) rotate(30deg);
}
.robot.active [data-name="hand"] {
    transform-origin: 254px 171px;
    animation: handAn 0.5s 1s infinite alternate;
}
.robot.active [data-name="ball"] {
    animation: ballAn 0.5s 1s infinite alternate ease-out;
}
@keyframes handAn {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(20deg);
    }
}
@keyframes ballAn {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-20px);
    }
}
</style>