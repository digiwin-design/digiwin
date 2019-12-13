<template>
    <div class="case-list">
        <a :href="item.link" target="_blank" v-for="item in list" :key="item.company">
            <dl>
                <dt><i>{{item.company}}</i></dt>
                <dd>{{item.desc}}</dd>
            </dl>
        </a>
    </div>
</template>

<script>
module.exports = {
    name: 'case-list',
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>