<template>
    <el-collapse v-model="activeName" :accordion="!isMobile">
        <el-collapse-item title="第一步：基础组建 鼎捷一站式服务" name="1">
            <div class="row">
                <a data-fancybox="gallery" href="images/collapse-step1-illust.png" v-if="isMobile">
                    <img src="images/collapse-step1-illust.png" alt="">
                </a>
                <img src="images/collapse-step1-illust.png" alt="" v-else>
            </div>
            <p class="row">企业跨步国际化，鼎捷助您在地化<br>鼎捷深耕东南亚，搭建在地联合服务平台，携手联盟伙伴为新进企业畅开康庄大道。</p>
        </el-collapse-item>
        <el-collapse-item title="第二步：管理固化  鼎捷软件助力运营" name="2">
            <div class="row">
                <p class="row">在东南亚的企业初创期，受到当地税制规范、文化差异与人员程度差异等影响，<br>需要一套符合当地税制法规的企业管理系统，将固化内部流程，实现精细化管理。</p>
                <dl class="row">
                    <dt>管好帐：</dt>
                    <dd>财务结算即时准确、管好货：帐实一致无盘差</dd>
                    <dt>管客户：</dt>
                    <dd>订单接单即时回覆、管生产：车间产能报工</dd>
                    <dt>管人员：</dt>
                    <dd>电子签核无纸化管理、让企业无忧管理，专注本业运营</dd>
                </dl>
            </div>
            <div class="links row">
                <a href="javascript:;">厂内智能物流</a>
                <a href="javascript:;">智能现场管理sMES</a>
            </div>
        </el-collapse-item>
        <el-collapse-item title="第三步：智能制造 鼎捷智造" name="3">
            <p class="row">信息化实现业财一体化后以数据驱动生产制造，<br>成功复制鼎捷中国智造经验，鼎力相助智能转型有捷径</p>
            <div class="links row">
                <a href="javascript:;">厂内智能物流</a>
                <a href="javascript:;">智能现场管理sMES</a>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
export default {
    data() {
        return {
            activeName: '1'
        };
    },
    computed: {
        isMobile() {
            return this.$store.state.isMobile;
        },
    },
    watch: {
        isMobile() {
            this.activeName = '1';
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/common/_variable';
@import '@/assets/sass/common/_helpers';
.el-collapse {
    margin: 0 auto;
    max-width: 1100px;
    border: none;
}
/deep/ .el-collapse-item {
    + .el-collapse-item {
        border-top: 1px solid #fff;
        @media (min-width: $tablet-width + 1) {
            margin-top: 7px;
            border-top: none;
        }
    }
    &__header {
        height: 80px;
        border-bottom: none;
        background-color: #000;
        color: #fff;
        font-size: 18px;
        line-height: 80px;
        justify-content: center;
        @media (min-width: $tablet-width + 1) {
            font-size: 30px;
        }
    }
    &__arrow {
        display: none;
    }
    &__wrap {
        background-color: #e8e8e8;
    }
    &__content {
        display: flex;
        flex-direction: column;
        padding: 1em 10px;
        font-size: 18px;
        line-height: 25px;
        align-items: center;
        @media (min-width: $tablet-width + 1) {
            padding: 40px 30px;
            font-size: 24px;
            line-height: 34px;
        }
        @at-root {
            /deep/ .el-collapse-item:nth-child(1) .el-collapse-item__content {
                @media (min-width: $content-width) {
                    text-align: center;
                }
                [data-fancybox=gallery] {
                    position: relative;
                    display: block;
                    &::after {
                        @include imgBg('~@/assets/images/glass.png');
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        width: 32px;
                        height: 32px;
                        content: '';
                    }
                }
            }
            /deep/ .el-collapse-item:nth-child(2) .el-collapse-item__content {
                dt {
                    float: left;
                    color: $text-danger;
                }
                br {
                    display: none;
                    @media (min-width: $content-width) {
                        display: block;
                    }
                }
            }
            /deep/ .el-collapse-item:nth-child(3) .el-collapse-item__content {
                @media (min-width: $content-width) {
                    text-align: center;
                }
                br {
                    display: none;
                    @media (min-width: $content-width) {
                        display: block;
                    }
                }
            }
        }
        .row + .row {
            margin-top: 1em;
        }
        .links {
            display: flex;
            flex-direction: column;
            align-items: center;
            @media (min-width: $tablet-width + 1) {
                flex-direction: row;
            }
            a {
                @include btn(318px, 62px, #fff, $text-danger, 5px);
                font-size: 24px;
                + a {
                    margin-top: 10px;
                    @media (min-width: $tablet-width + 1) {
                        margin-top: 0;
                        margin-left: 62px;
                    }
                }
            }
        }
    }
}
</style>