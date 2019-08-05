<template>
    <div class="headerNav">
        <a
            v-for="(link, idx) in links"
            :key="idx"
            :href="link.url"
            :class="{'is-disabled':link.disabled}"
            :target="link.target"
        >
            <picture>
                <source
                    media="(max-width: 768px)"
                    :srcset="require(`~/assets/images/header-link${idx+1}-s.png`)"
                >
                <img :src="require(`~/assets/images/header-link${idx+1}.png`)" alt>
            </picture>
        </a>
    </div>
</template>

<script>
export default {
    computed: {
        links() {
            return [
                {
                    url: '/tw/dsc/activity/WB002928/web/',
                    disabled: false,
                    target: '_blank'
                },
                {
                    url: '/tw/dsc/activity/WB002941/web/',
                    disabled: false,
                    target: '_blank'
                },
                {
                    url: '',
                    disabled: true,
                    target: '_blank'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped src="~/assets/sass/components/_headerNav.scss"></style>
