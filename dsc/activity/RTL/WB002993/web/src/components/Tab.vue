<template>
    <div class="tab">
        <div class="nav">
            <a
                href
                v-for="(schedule,idx) in schedules"
                :key="schedule.country"
                @click.prevent="index=idx"
                :class="{active:index===idx}"
            >{{schedule.country}}</a>
        </div>
        <div class="content">
            <div class="row head">
                <div class="col">{{schedule.country}}議程</div>
                <div class="col">講師</div>
            </div>
            <div class="row" v-for="item in schedule.list" :key="item.content">
                <div class="col"><div v-html="item.content"></div></div>
                <div class="col" :class="{empty:!item.cast}"><div v-html="item.cast"></div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        schedules: {
            type: Array
        }
    },
    data() {
        return {
            index: 0,
        }
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
        schedule() {
            return this.schedules[this.index];
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/common.scss';
$breakpoint: 768px;
.nav {
    display: flex;
    margin-bottom: 22px;
    a {
        position: relative;
        width: 50%;
        height: 75px;
        border: 2px solid #004b60;
        color: #004b60;
        text-align: center;
        font-weight: bold;
        font-size: 30px;
        line-height: 75px;
        &.active {
            background-color: #004b60;
            color: #fff;
            &::after {
                position: absolute;
                top: 100%;
                left: 50%;
                width: 0;
                height: 0;
                border-width: 12px 13px 0 13px;
                border-style: solid;
                border-color: #004b60 transparent transparent transparent;
                content: '';
                transform: translateX(-50%);
            }
        }
    }
}
.content {
    color: #626262;
    font-weight: bold;
    font-size: 22px;
    line-height: 1.5;
}
.row {
    position: relative;
    display: flex;
    padding: 0 25px;
    background-color: #fff;
    flex-wrap: wrap;
    &:last-child {
        border-radius: 0 0 25px 25px;
    }
    &.head {
        border-radius: 10px 10px 0 0;
        background-color: #f05a28;
        color: #fff;
        @media (max-width: $breakpoint) {
            padding-right: 0;
            padding-left: 0;
        }
    }
    &:first-child .col,
    &:last-child .col {
        border-bottom: none;
    }
    @media (max-width: $breakpoint) {
        padding-right: 16px;
        padding-left: 16px;
        &.head .col:last-child {
            display: none;
        }
        &:not(.head)::before {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 1px;
            background-color: #f05a28;
            content: '';
        }
        &:nth-child(2)::before {
            top: 20px;
        }
        &:last-child::before {
            bottom: 20px;
        }
    }
}
.col {
    position: relative;
    display: flex;
    padding: 10px 16px;
    width: 50%;
    border-bottom: 1px solid #535353;
    align-items: center;
    @media (max-width: $breakpoint) {
        width: 100%;
        border-bottom: none;
        @at-root {
            .row:not(:first-child) .col:first-child::before {
                position: absolute;
                top: 18px;
                left: -8px;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: #f05a28;
                content: '';
            }
        }
        & + .col {
            padding-top: 0;
        }
    }
    &.empty {
        padding: 0;
    }
}
/deep/ strong {
    color: #f05a28;
}
/deep/ .company {
    color: #004b60;
    font-size: 18px;
}
/deep/ .small {
    vertical-align: text-bottom;
    font-size: 18px;
}
</style>