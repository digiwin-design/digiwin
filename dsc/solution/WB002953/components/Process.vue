<template>
    <ul class="process">
        <li v-for="item in process" v-bind:key="item">
            <div v-html="item"></div>
        </li>
    </ul>
</template>

<script>
module.exports = {
    props: ['process']
}
</script>