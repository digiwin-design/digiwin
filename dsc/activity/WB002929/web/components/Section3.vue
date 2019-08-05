<template>
    <div id="section3" class="section section3 fp-auto-height-responsive">
        <div class="container">
            <h1 class="title">你適合哪個職務</h1>
            <h2 class="subtitle">透過簡單測驗，多方了解自己! 找到合適又喜歡的工作！</h2>
            <div class="position">
                <div
                    class="position-item"
                    v-for="(content, idx) in popupContents"
                    :key="content.title"
                >
                    <figure
                        :class="{'imghvr-flip-vert': device === null, active: showPopup && idx === currentPopup}"
                    >
                        <img :src="require(`~/assets/images/section3-pos${idx+1}.jpg`)" alt>
                        <figcaption>確定要選擇這張圖片嗎？</figcaption>
                        <a href @click.prevent="popupShow(idx)"></a>
                    </figure>
                </div>
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
                                :src="require(`~/assets/images/section3-pos${popupContent.id}.jpg`)"
                                alt
                            >
                        </div>
                    </div>
                </div>
            </div>
        </Popup>
    </div>
</template>

<script>
import axios from 'axios';
import Popup from '~/components/Popup';
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
        axios.get('public/db.json')
            .then(res => {
                this.popupContents = res.data.popupContents;
            });
    },
}
</script>

<style lang="scss" scoped src="~/assets/sass/components/section3.scss"></style>
