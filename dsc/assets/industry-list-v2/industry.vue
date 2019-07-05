<template>
    <ul class="industryList">
        <li class="industryList-item" v-for="item in list" :key="item.link">
            <a
                :href="item.link"
                class="industryList-link"
                :class="'item' + item.id"
                target="_blank"
            >{{item.text}}</a>
        </li>
    </ul>
</template>

<script>
module.exports = {
    data: function () {
        return {
            result: null,
        }
    },
    computed: {
        list: function () {
            if (this.result) {
                return this.result.map(function (val) {
                    return {
                        id: val.id,
                        text: val.title,
                        link: val.contents.main.url
                    };
                });
            }
        },
    },
    methods: {
        getData: function () {
            axios.get('/tw/dsc/assets/index-industry/index-industry.json').then(function (res) {
                this.result = res.data;
            }.bind(this));
        }
    },
    created: function () {
        this.getData();
    },
};
</script>

<style src="/tw/dsc/assets/industry-list-v2/industry.css"></style>
