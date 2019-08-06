<template>
    <div class="desk">
        <div class="cards">
            <div
                class="card"
                v-for="(content, idx) in popupContents"
                :key="content.title"
            >
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
