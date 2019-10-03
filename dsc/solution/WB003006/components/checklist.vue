<template>
    <div class="checklist">
        <ul>
            <li v-for="list in lists" :key="list">
                <img src="images/member/check-icon.png" class="animated bounceIn" alt="">
                {{list}}
            </li>
        </ul>
    </div>
</template>

<script>
module.exports = {
    name: 'checklist',
    props: {
        lists: {
            type: Array,
            required: true
        }
    }
}
</script>