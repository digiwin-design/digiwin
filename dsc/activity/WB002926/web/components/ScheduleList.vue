<template>
    <dl class="scheduleList">
        <template v-for="list in lists">
            <dt>
                <p class="time">{{list.time}}</p>
            </dt>
            <dd>
                <p class="time">{{list.time}}</p>
                <p class="tag" v-if="list.tag">{{list.tag}}</p>
                <p class="content" v-html="list.content"></p>
            </dd>
        </template>
    </dl>
</template>

<script>
export default {
    computed: {
        lists() {
            return [
                {
                    time: '13:00~13:30',
                    content: '歡迎蒞臨',
                },
                {
                    time: '13:30~14:00',
                    tag: '翻轉營運',
                    content: '<i>新零售新視角-翻轉企業運營上資訊需求</i>｜鼎新電腦 資深副總裁 張進聰',
                },
                {
                    time: '14:00~15:00',
                    tag: '如何創客',
                    content: '<i>新零售心思維-可預見的未來商機</i>｜流通教父 徐重仁',
                },
                {
                    time: '15:00~15:15',
                    content: '休息一下，精美茶點',
                },
                {
                    time: '15:15~16:05',
                    tag: '如何引客',
                    content: '<i>新零售新價值-把商品賣到全世界</i>｜亞馬遜(Amazon)全球開店台灣區 總經理 林惠君',
                },
                {
                    time: '16:05~16:55',
                    tag: '如何留客',
                    content: '<i>新零售興科技-打造與消費者零距離</i>｜治略資訊 創辦人 王智',
                },
                {
                    time: '16:55~17:10',
                    content: '現場抽獎、問答與交流',
                },
            ];
        }
    }
}
</script>


<style lang="scss" src="~/assets/sass/components/_scheduleList.scss"></style>
