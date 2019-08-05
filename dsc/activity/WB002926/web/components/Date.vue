<template>
    <div class="wrapper">
        <p class="year">{{year}}</p>
        <p class="date">
            {{date}}
            <i class="day">({{day}})</i>
        </p>
        <p class="county">
            {{county}}
            <a :href="calendar" class="county-icon" target="_blank"></a>
        </p>
        <a :href="map" target="_blank">
            <span class="location">{{location}}</span>
            <br>
            <span class="addr">{{addr}}</span>
        </a>
        <p class="isFull" v-if="isFull">(已額滿)</p>
    </div>
</template>

<script>
export default {
    props: ['year', 'date', 'day', 'county', 'location', 'addr', 'map', 'calendar', 'isFull']
}
</script>

<style lang="scss" src="~/assets/sass/components/_date.scss" scoped></style>
