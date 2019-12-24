<template>
    <div class="hoverBox" :class="[customClass, {'fadeIn': fadeIn}, {'arrow': arrow}]" onclick>
        <slot name="before"></slot>
        <div class="hoverBox__hover">
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

<style lang="scss" scoped>
@import '@/assets/sass/common/_variable';
@import '@/assets/sass/common/_helpers';
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.hoverBox {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 377px;
    height: 420px;
    box-shadow:
        0 0px 0.8px -5px rgba(0, 0, 0, 0.028),
        0 0px 2px -5px rgba(0, 0, 0, 0.04),
        0 0px 3.8px -5px rgba(0, 0, 0, 0.05),
        0 0px 6.7px -5px rgba(0, 0, 0, 0.06),
        0 0px 12.5px -5px rgba(0, 0, 0, 0.072),
        0 0px 30px -5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    &:hover [class$=__hover] {
        top: 0;
    }
    /deep/ [class$=__hover] {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 1;
        width: 100%;
        height: inherit;
        transition: top .4s;
    }
    &.fadeIn {
        /deep/ [class$=__hover] * {
            opacity: 0;
        }
        &:hover /deep/ [class$=__hover] * {
            animation: fadeIn 1s .4s forwards;
        }
    }
    &.arrow::after {
        position: absolute;
        top: calc(100% - 28px);
        left: 50%;
        color: #fff;
        content: '\f106';
        font: normal normal normal 24px/1 FontAwesome;
        transform: translate(-50%, 0);
        @at-root {
            .hoverBox.arrow:hover::after {
                display: none;
            }
        }
    }
    &__before {
        padding: 30px;
        background-color: #fff;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        &-title {
            display: flex;
            margin-bottom: 1em;
            justify-content: center;
            li {
                width: 60px;
                height: 60px;
                border: 2px solid $text-danger;
                border-radius: 50%;
                color: $text-danger;
                text-align: center;
                font-weight: bold;
                font-size: 36px;
                line-height: 60px;
                + li {
                    margin-left: 8px;
                }
            }
        }
        &-content {
            color: #434343;
            font-weight: bold;
            font-size: 18px;
            line-height: 28px;
            /deep/ strong {
                color: $text-danger;
                font-size: 24px;
            }
            + .hoverBox__before-content {
                margin-top: .3em;
            }
        }
    }
    &__bottom {
        position: absolute;
        top: calc(100% - 74px);
        left: 50%;
        width: 150%;
        height: 120px;
        border-radius: 50%;
        background-color: $text-danger;
        color: #fff;
        text-align: center;
        font-size: rem(20);
        line-height: 1;
        transition: top .4s;
        transform: translateX(-50%);
        @at-root {
            .hoverBox:hover .hoverBox__bottom {
                top: 100%;
            }
        }
        p {
            font-size: 24px;
            line-height: 74px;
            &::before {
                content: '▲';
            }
        }
    }
    &__hover {
        display: flex;
        flex-direction: column;
        padding: 30px;
        background-color: #da1f10;
        color: #fff;
        font-size: 24px;
        line-height: 30px;
        &-content {
            display: flex;
            padding: 0 1em;
            align-items: center;
            flex-grow: 1;
        }
        &-link {
            @include btn(100%, 72px, #f31201, #fff);
            font-size: 24px;
        }
    }
}
</style>
