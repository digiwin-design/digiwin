<template>
    <figure class="cast" :class="className">
        <img :data-src="`images/cast/cast${cast.id}.png`" data-expand="-20" class="lazyload" alt="">
        <figcaption v-if="cast.id<3">
            <p class="place">{{cast.place}}</p>
            <p class="company">{{cast.company}}</p>
            <p class="name" v-html="cast.name"></p>
        </figcaption>
        <figcaption v-else>
            <p class="company">{{cast.company}}</p>
            <p class="name" v-html="cast.name"></p>
        </figcaption>
    </figure>
</template>

<script>
import 'lazysizes';
export default {
    props: {
        cast: {
            type: Object
        }
    },
    computed: {
        className() {
            return this.cast.id < 3 ? 'top' : 'other';
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/common.scss';
.cast {
    display: flex;
    padding: 8px 17px;
    cursor: pointer;
    align-items: center;
    @at-root {
        .cast.top {
            margin-bottom: 20px;
            width: 50%;
            @media (max-width: $tablet-width) {
                flex-direction: column;
            }
            @media (max-width: 540px) {
                width: 100%;
            }
        }
    }
    @at-root {
        .cast.other {
            flex-direction: column;
        }
    }
    img {
        width: 241px;
        height: 222px;
        transition: transform .4s, opacity 1s;
    }
    @at-root {
        html.no-mobile .cast:hover img {
            transform: scale(1.1);
        }
    }
}
figcaption {
    font-weight: bold;
    @at-root {
        .top figcaption {
            margin-left: 28px;
            @media (max-width: $tablet-width) {
                margin-top: 9px;
                margin-left: 0;
                text-align: center;
            }
            .place {
                width: 80px;
                height: 30px;
                background-color: #004b60;
                color: #fff;
                text-align: center;
                font-size: 22px;
                line-height: 30px;
                @media (max-width: $tablet-width) {
                    margin: 0 auto;
                }
            }
            .company {
                margin-top: .6em;
                margin-bottom: .5em;
                color: #f05a28;
                font-size: 20px;
            }
            .name {
                color: #535353;
                font-size: 24px;
                line-height: 30px;
            }
            /deep/ i {
                font-size: 18px;
            }
        }
        .other figcaption {
            .company {
                margin-top: .8em;
                margin-bottom: .5em;
                color: #f05a28;
                text-align: center;
                font-size: 20px;
            }
            .name {
                color: #535353;
                text-align: center;
                font-size: 24px;
                line-height: 30px;
            }
        }
    }
}
</style>