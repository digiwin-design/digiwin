<template>
    <div class="desk">
        <div class="cards">
            <div class="card" v-for="(content, idx) in popupContents" :key="content.title">
                <figure
                    :class="{'imghvr-flip-vert': device === null, active: showPopup && idx === currentPopup}"
                >
                    <img :src="require(`@/assets/images/section3-pos${idx+1}.jpg`)" alt />
                    <figcaption>確定要選擇這張圖片嗎？</figcaption>
                    <a href @click.prevent="popupShow(idx)"></a>
                </figure>
            </div>
        </div>

        <Popup>
            <div class="popup-container">
                <div class="popup-content">
                    <div class="popup-cols" v-if="popupContents">
                        <div class="popup-col">
                            <p class="popup-title">{{popupContent.title}}</p>
                            <p class="popup-desc" v-html="popupContent.desc"></p>
                            <p class="popup-result">適合的職務：{{popupContent.result}}</p>
                        </div>
                        <div class="popup-col">
                            <img
                                :src="require(`@/assets/images/section3-pos${popupContent.id}.jpg`)"
                                alt
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
    </div>
</template>

<script>
import 'jquery-popup-overlay';
import axios from 'axios';
import Popup from './Popup.vue';

export default {
    components: {
        Popup,
    },
    data() {
        return {
            currentPopup: 0, // 點擊的彈窗序號
            popupContents: null, // 所有的彈窗內容
        };
    },
    computed: {
        device() {
            return this.$store.state.device;
        },
        showPopup() {
            return this.$store.state.showPopup;
        },
        // 取得點擊的彈窗內容
        popupContent() {
            return this.popupContents[this.currentPopup];
        },
    },
    methods: {
        popupShow(idx) {
            this.currentPopup = idx;
            this.$store.commit('togglePopup', true);
            $('#popup').popup('show');
        }
    },
    created() {
        // 取得彈窗內容
        axios.get('db.json')
            .then(res => {
                this.popupContents = res.data.popupContents;
            });
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/common.scss';
.desk {
    margin: auto;
    .cards {
        display: flex;
        max-width: 440px;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        @media (max-width: $tablet-width) {
            justify-content: flex-start;
        }
        @media (max-width: $tablet-width) {
            position: relative;
        }
    }
    .card {
        display: flex;
        @media (min-width: 769px) {
            &:not(:nth-child(3n + 3)) {
                margin-right: 20px;
            }
            &:not(:nth-last-child(-n + 3)) {
                margin-bottom: 20px;
            }
        }
        @media (max-width: $tablet-width) {
            width: calc((100% - 20px) / 2);
            &:not(:nth-child(2n + 2)) {
                margin-right: 20px;
            }
            &:not(:nth-last-child(-n + 2)) {
                margin-bottom: 20px;
            }
            &:nth-child(odd) {
                justify-content: flex-end;
            }
            &:nth-child(even) {
                justify-content: flex-start;
            }
        }
    }
    [class^='imghvr-'] {
        background-color: transparent;
    }
    [class^='imghvr-'] figcaption {
        background-color: #232121;
    }
    img,
    figure {
        display: block;
    }
    figure {
        position: relative;
        a {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1;
        }
    }
    figcaption {
        display: none;
        padding: 10px;
        text-align: justify;
        font-size: 18px;
        align-items: center;
    }
    .imghvr-flip-vert {
        figcaption {
            display: flex;
        }
        &.active {
            & > img {
                opacity: 0;
                transform: rotateY(-180deg);
            }
            figcaption {
                opacity: 1;
                transform: rotateY(0deg);
            }
        }
    }
}
.popup {
    &-container {
        padding: 50px 125px;
        height: 100%;
        @media (max-width: $popup-breakpoint) {
            padding-right: 50px;
            padding-left: 50px;
        }
    }
    &-content {
        display: flex;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        height: 100%;
        align-items: center;
        @media (max-width: $popup-breakpoint) {
            align-items: flex-start;
        }
    }
    &-cols {
        display: flex;
        color: #fff;
        letter-spacing: getLetterSpacing(10);
        flex-wrap: wrap;
    }
    &-col {
        &:first-child {
            padding-right: 10px;
            width: calc(100% - 240px);
            @media (max-width: $popup-breakpoint) {
                padding: 0;
                width: 100%;
            }
        }
        &:last-child {
            padding-top: 76px;
            width: 240px;
            @media (max-width: $popup-breakpoint) {
                margin-bottom: 10px;
                padding: 0;
                width: 100%;
                order: -1;
            }
        }
    }
    &-title {
        margin-bottom: 10px;
        color: #f4f112;
        font-size: 36px;
        @media (max-width: $tablet-width) {
            margin-bottom: 5px;
            font-size: 34px;
            line-height: 1.3;
        }
    }
    &-desc {
        color: #fff;
        font-size: 22px;
    }
    &-result {
        color: #f89800;
        font-size: 22px;
    }
    img {
        display: block;
        margin: 0 auto;
        width: 240px;
        height: 240px;
        border: 3px solid #fff;
        border-radius: 50%;
        @media (max-width: $popup-breakpoint) {
            width: 180px;
            height: 180px;
        }
    }
}
</style>
