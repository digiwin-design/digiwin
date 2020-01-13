<template>
    <el-tabs v-model="activeName" type="card" class="tabs">
        <el-tab-pane label="常見困擾" name="1">
            <h3>{{tabs.left.subtitle}}</h3>
            <p class="desc">{{tabs.left.desc}}</p>
            <div class="pains">
                <pain :content="pain" v-for="pain in tabs.left.pains" :key="pain.imgSrc"></pain>
            </div>
        </el-tab-pane>
        <el-tab-pane label="解決方案" name="2">解決方案內容</el-tab-pane>
    </el-tabs>
</template>

<script>
module.exports = {
    name: 'tabs',
    components: {
        'pain': httpVueLoader('../pain.vue'),
    },
    props: {
        tabs: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            activeName: '1'
        };
    },
}
</script>