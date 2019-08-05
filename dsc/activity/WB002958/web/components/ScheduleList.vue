<template>
    <div class="scheduleList container">
        <div class="thead">
            <div class="thead-col"></div>
            <div class="thead-col">
                <span class="thead-title">議程</span>
            </div>
            <div class="thead-col">
                <span class="thead-title">講師</span>
            </div>
        </div>
        <dl class="list">
            <template v-for="list in lists">
                <dt class="list-title" :key="list.time">
                    <p class="list-time">{{list.time}}</p>
                </dt>
                <dd class="list-detail" :key="list.time">
                    <p class="list-time">{{list.time}}</p>
                    <div class="col">
                        <p class="list-topic" v-if="list.topic">{{list.topic}}</p>
                        <div class="list-content" v-html="list.content"></div>
                    </div>
                    <div class="col">
                        <p v-if="list.castName" class="list-castName">{{list.castName}}</p>
                        <p v-if="list.company" class="list-company">{{list.company}}</p>
                    </div>
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
                    content: '歡迎蒞臨',
                },
                {
                    time: '13:30~13:40',
                    content: '迎賓致詞',
                },
                {
                    time: '13:40~15:00',
                    topic: '一、企業邁向智慧製造與數位決策戰略－打造工業3.5能力',
                    content: `
                        <ul>
                            <li>企業創新變革/接班，融入老師傅知識價值數據轉型</li>
                            <li>行業領域專家/人機協作，打造智能化真正的價值</li>
                        </ul>
                    `,
                    castName: '簡禎富 講座教授',
                    company: '清華大學',
                },
                {
                    time: '15:00~15:20',
                    content: '智能製造數智工廠場景展示/茶歇交流',
                },
                {
                    time: '15:20~16:10',
                    topic: '二、數據驅動數位化轉型有捷徑',
                    content: `
                        <ul>
                            <li>贏在以終為始智慧製造頂層設計方法</li>
                            <li>數智工廠以數據驅動之價值創造案例</li>
                        </ul>
                    `,
                    castName: '蘇斌雄 專家',
                    company: '鼎新電腦 智能+研究中心',
                },
                {
                    time: '16:10~16:50',
                    topic: '三、探索工業3.5典範案例－伯鑫工具',
                    content: `
                        <ul>
                            <li>工業互聯網趨勢穩態應用發展：系統與機台聯網，人機協作，可視/透明/預測邁向智能監控與營運</li>
                            <li>循序建置符合企業策略之智能製造藍圖</li>
                        </ul>
                    `,
                    castName: '吳昌旻 特助',
                    company: '伯鑫工具',
                },
                {
                    time: '16:50~17:10',
                    content: '智能抽獎／現場交流與問答',
                },
            ];
        }
    }
}
</script>


<style lang="scss" scoped src="~/assets/sass/components/_scheduleList.scss"></style>
