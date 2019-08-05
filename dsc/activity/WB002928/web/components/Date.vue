<template>
    <div class="wrapper">
        <div class="county" v-html="county"></div>
        <div>
            <p class="date">{{date}}</p>
            <a :href="calendar" class="day" target="_blank">週{{day}}&emsp;13:30~17:00</a>
            <a :href="map" class="map" target="_blank">
                <ul class="location">
                    <li>{{location.main}}</li>
                    <li v-html="location.detail"></li>
                </ul>
                <p class="addr">{{addr}}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['date', 'day', 'county', 'location', 'addr', 'map', 'calendar']
}
</script>

<style lang="scss" scoped src="~/assets/sass/components/_date.scss"></style>
