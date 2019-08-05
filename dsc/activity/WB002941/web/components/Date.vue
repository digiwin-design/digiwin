<template>
    <div class="wrapper">
        <a :href="calendar" class="calendar" target="_blank">
            <p class="date">{{date}}</p>
            <p class="place">{{place}}</p>
        </a>
        <a :href="map" class="map" target="_blank">
            <ul class="location">
                <li class="location-item">{{location.main}}</li>
                <li class="location-item">{{location.detail}}</li>
            </ul>
            <p v-html="addr" class="addr"></p>
        </a>
    </div>
</template>

<script>
export default {
    props: ['date', 'place', 'location', 'addr', 'map', 'calendar']
}
</script>

<style lang="scss" scoped src="~/assets/sass/components/_date.scss"></style>
