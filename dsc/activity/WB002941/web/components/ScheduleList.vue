<template>
    <div class="scheduleList container">
        <div class="thead">
            <div class="thead-col">
                <span class="thead-title">時　間</span>
            </div>
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
                    <div class="list-cols">
                        <div class="list-col">
                            <p class="list-topic" v-if="list.topic">{{list.topic}}</p>
                            <ul class="list-contents" :class="{'inter':list.inter}">
                                <li class="list-content" :class="{'quarter':listContentClass(list.content)}" v-for="content in list.content" :key="content">{{content}}</li>
                            </ul>
                        </div>
                        <div class="list-col" v-if="list.castName">
                            <p class="list-castName">{{list.castName}}</p>
                            <ul class="list-castPositions">
                                <li class="list-castPosition" v-for="position in list.position" v-html="position" :key="position"></li>
                            </ul>
                        </div>
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
                    content: ['歡迎蒞臨'],
                    inter: true
                },
                {
                    time: '13:30~13:40',
                    content: ['迎賓致詞'],
                    inter: true
                },
                {
                    time: '13:40~15:10',
                    topic: '我對製造業未來的看法',
                    content: [
                        '未來的智慧製造系統是混合且複雜的',
                        '要明確定義工業4.0為什麼還為時尚早!',
                        'AL / ML將與競爭對手抽離而成為“同類最佳'
                    ],
                    castName: '王緒斌 博士',
                    position: [
                        '美國喬治亞理工學院首席製造執行長',
                        '美國國家科學院、美國工程和<br>醫學院國家材料和製造 委員會主席'
                    ]
                },
                {
                    time: '15:10~15:30',
                    content: ['休息一下精美茶點'],
                    inter: true
                },
                {
                    time: '15:30~16:10',
                    topic: 'AI思維與企業轉型',
                    content: [
                        '數位轉型的AI思維',
                        '企業3I架構：能力AI+互動AI+介面AI',
                        '企業AI案例分享'
                    ],
                    castName: '周忠信 博士',
                    position: [
                        '東海大學數位創新碩士學位學程主任',
                        '東海大學軟體工程與技術中心主任',
                        '亞洲物聯網聯盟理事長'
                    ]
                },
                {
                    time: '16:10~16:40',
                    topic: 'AI賦能智能製造',
                    content: [
                        '生產良率提升',
                        '自動品質檢測',
                        '生產品質控制',
                        '生產品質預測'
                    ],
                    castName: '王智 博士',
                    position: ['治略資訊 創辦人']
                },
                {
                    time: '16:40~17:00',
                    content: ['智能抽獎／現場交流與問答'],
                    inter: true
                },
            ];
        }
    },
    methods: {
        listContentClass(items) {
            return items.length === 4;
        }
    },
}
</script>


<style lang="scss" scoped src="~/assets/sass/components/_scheduleList.scss"></style>
