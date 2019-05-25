<template>
    <ul class="industryList">
        <li class="industryList-item" v-for="item in list" :key="item.link">
            <a :href="item.link" class="industryList-link" :class="'item' + item.id" target="_blank">{{item.text}}</a>
        </li>
    </ul>
</template>

<script>
module.exports = {
    computed: {
        list: function () {
            return [
                {
                    id: '01',
                    text: '電子光電',
                    link: '/tw/dsc/solution/WB002513/WB00251301.html'
                },
                {
                    id: '02',
                    text: '機械',
                    link: '/tw/dsc/solution/WB002476/WB00247601.html'
                },
                {
                    id: '04',
                    text: '製造',
                    link: '/tw/dsc/solution/WB002783/WB00278301.html'
                },
                {
                    id: '08',
                    text: '交通',
                    link: '/tw/dsc/solution/WB002811/WB00281101.html'
                },
                {
                    id: '12',
                    text: '塑膠',
                    link: '/tw/dsc/solution/WB002554/WB00255401.html'
                },
                {
                    id: '05',
                    text: '流通',
                    link: '/tw/dsc/solution/WB002675/WB00267501.html'
                },
                {
                    id: '10',
                    text: '食品',
                    link: '/tw/dsc/solution/WB002553/WB00255301.html'
                },
                {
                    id: '09',
                    text: '美妝',
                    link: '/tw/dsc/solution/WB002711/WB00271101.html'
                },
                {
                    id: '03',
                    text: '網購',
                    link: '/tw/dsc/solution/WB002595/WB00259501.html'
                },
                {
                    id: '06',
                    text: '醫材',
                    link: '/tw/dsc/solution/WB002785/WB00278501.html'
                },
                {
                    id: '20',
                    text: '醫美',
                    link: '/tw/dsc/solution/WB002850/WB00285001.html'
                },
                {
                    id: '07',
                    text: '生技',
                    link: '/tw/dsc/solution/WB002543/WB00254301.html'
                },
                {
                    id: '19',
                    text: '工程',
                    link: '/tw/dsc/solution/WB002899/WB00289901.html'
                },
                {
                    id: '15',
                    text: '設備代理',
                    link: '/tw/dsc/solution/WB002801/WB00280101.html'
                },
                {
                    id: '13',
                    text: '金屬',
                    link: '/tw/dsc/solution/WB002953/WB00295301.html'
                },
                {
                    id: '11',
                    text: '化工',
                    link: '/tw/solution/ListDetail5945.html'
                },
                {
                    id: '14',
                    text: '紡織成衣',
                    link: '/tw/solution/ListDetail5983.html'
                },
                {
                    id: '16',
                    text: '金融保險',
                    link: '/tw/solution/ListDetail5982.html'
                },
                {
                    id: '17',
                    text: '休憩',
                    link: '/tw/solution/ListDetail5967.html'
                },
                {
                    id: '18',
                    text: '印刷',
                    link: '/tw/solution/ListDetail5947.html'
                }
            ];
        }
    }
};
</script>

<style src="/tw/dsc/assets/industry-list-v2/industry.css"></style>
