<template>
    <div class="scheduleList container">
        <div class="thead">
            <div class="thead-col">
                <span class="thead-title">時　間</span>
            </div>
            <div class="thead-col">
                <span class="thead-title">議　程</span>
                <span class="thead-open">13:00開放入場</span>
            </div>
        </div>
        <dl class="list">
            <template v-for="list in lists">
                <dt class="list-title" :key="list.time">
                    <p class="list-time">{{list.time}}</p>
                </dt>
                <dd class="list-detail" :key="list.time">
                    <p class="list-time">{{list.time}}</p>
                    <p class="list-topic" v-if="list.topic">{{list.topic}}</p>
                    <div class="list-content" v-html="list.content" :class="{'inter':list.inter}"></div>
                </dd>
            </template>
        </dl>
    </div>
</template>

<script>
export default {
    computed: {
        lists() {
            return [
                {
                    time: '13:00~13:30',
                    inter: true,
                    content: '歡迎蒞臨',
                },
                {
                    time: '13:30~13:50',
                    content: '迎賓致詞  鼎新電腦 <strong>葉子禎 總裁</strong>',
                },
                {
                    time: '13:50~14:40',
                    topic: '一、工業人工智慧助力企業數位轉型邁向新智造',
                    content: `
                        <p>富士康工業互聯網（FII）</p>
                        <p>
                            <strong>鄭弘孟  首席執行官</strong><i>台北場</i><br>
                            <strong>陳冠棋 副總裁</strong><i>台中場</i>
                        </p>
                    `,
                },
                {
                    time: '14:40~15:00',
                    inter: true,
                    content: '休息一下，茶會交流',
                },
                {
                    time: '15:00~16:00',
                    topic: '二、企業數位化轉型實踐案例分享',
                    content: '鼎新電腦  智能+研究中心 <strong>蘇斌雄 專家</strong>',
                },
                {
                    time: '16:00~16:40',
                    topic: '三、宇瞻佈局智慧物聯，數位化轉型新智造',
                    content: '宇瞻科技 智慧應用處 <strong>林志亮 處長</strong>',
                },
                {
                    time: '16:40~17:00',
                    inter: true,
                    content: '現場分享與交流Q&A',
                },
            ];
        }
    }
}
</script>


<style lang="scss" scoped src="~/assets/sass/components/_scheduleList.scss"></style>
