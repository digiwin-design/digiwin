<template>
    <el-collapse v-model="activeNames">
        <el-collapse-item :name="idx + 1" v-for="(item, idx) in items" :key="item.title">
            <!-- title -->
            <template slot="title">
                <h2>{{item.title}}</h2>
            </template>

            <!-- content -->
            <div class="container">
                <h3>{{item.content.title}}</h3>
                <p v-html="item.content.desc"></p>
                <img :src="'images/index/collapse-illust' + (idx + 1) + '.png'" alt="">
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
module.exports = {
    name: 'Collapse',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data: function () {
        return {
            activeNames: ['1']
        };
    },
}
</script>