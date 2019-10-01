<template>
    <div class="tabs">
        <div class="tabs-content" :class="'content' + (id + 1)">
            <h3>{{content.title}}</h3>
            <p v-html="content.desc"></p>
            <div class="img"><img :src="'images/index/collapse-illust' + (id + 1) + '.png'" alt=""></div>
        </div>
        <ul class="tabs-nav">
            <li v-for="(item, idx) in items" :key="item.title" :class="{ active: idx === id }" @click="id = idx">
                <h2>{{item.title}}</h2>
                <p>{{item.desc}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    name: 'tabs',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            id: 0,
        }
    },
    computed: {
        content: function () {
            return this.items[this.id].content;
        }
    },
}
</script>