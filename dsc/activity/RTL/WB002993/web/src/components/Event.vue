<template>
    <div class="event">
        <div class="content">
            <p class="country">{{event.country}}</p>
            <a :href="event.calendar" class="date" :data-day="event.day" target="_blank">{{event.date}}</a>
            <a :href="event.map" class="location" target="_blank">
                <ul>
                    <li>{{event.location}}</li>
                    <li>{{event.addr}}</li>
                </ul>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        event: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/common.scss';
.event {
    padding: 0 15px;
    width: 340px;
    height: 150px;
    border-radius: 10px;
    background-color: #fff;
}
.content {
    display: flex;
    height: 100%;
    transform: translateY(-5px);
    flex-wrap: wrap;
}
.country {
    display: flex;
    margin-right: 10px;
    width: 110px;
    height: 70px;
    border-radius: 2px;
    background-image: linear-gradient(170deg, #f37b53 50%, #f05a28 0);
    color: #fff;
    font-weight: bold;
    font-size: 30px;
    justify-content: center;
    align-items: center;
}
.date {
    color: #f05a28;
    font-size: 68px;
    transform: translateY(10px);
    &::after {
        display: inline-block;
        margin-left: 5px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: #f05a28;
        color: #fff;
        content: attr(data-day);
        text-align: center;
        font-weight: bold;
        font-size: 18px;
        line-height: 28px;
        transform: translateY(-7px);
    }
}
.location {
    display: flex;
    margin-top: 10px;
    width: 100%;
    color: #626262;
    font-size: 20px;
    line-height: 1.4;
    &::before {
        margin-right: 6px;
        content: url('~@/assets/images/location-icon.png');
    }
    li:first-child {
        color: #004b60;
        font-weight: bold;
    }
}
</style>