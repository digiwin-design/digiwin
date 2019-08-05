<template>
    <no-ssr>
        <main>
            <full-page ref="fullpage" :options="options" id="fullpage">
                <Section1></Section1>
                <Section2 :refs="$refs"></Section2>
                <Section3></Section3>
                <Section4></Section4>
                <Section5></Section5>
                <Section6></Section6>
                <Footer></Footer>
            </full-page>

            <nav id="menu">
                <a
                    class="menu-links"
                    data-menuanchor="firstPage"
                    data-text="儲備新勢力"
                    href="#firstPage"
                ></a>
                <a
                    class="menu-links"
                    data-menuanchor="secondPage"
                    data-text="計畫特色"
                    href="#secondPage"
                ></a>
                <a class="menu-links" data-menuanchor="3rdPage" data-text="適合職務" href="#3rdPage"></a>
                <a class="menu-links" data-menuanchor="4rdPage" data-text="職務說明" href="#4rdPage"></a>
                <a class="menu-links" data-menuanchor="5rdPage" data-text="儲備菁英" href="#5rdPage"></a>
                <a class="menu-links" data-menuanchor="6rdPage" data-text="加入我們" href="#6rdPage"></a>
            </nav>
        </main>
    </no-ssr>
</template>

<script>
import Section1 from '~/components/Section1.vue';
import Section2 from '~/components/Section2.vue';
import Section3 from '~/components/Section3.vue';
import Section4 from '~/components/Section4.vue';
import Section5 from '~/components/Section5.vue';
import Section6 from '~/components/Section6.vue';
import Footer from '~/components/Footer.vue';
export default {
    data() {
        return {
            options: {
                menu: '#menu',
                anchors: ['firstPage', 'secondPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage'],
                sectionsColor: ['', '', '#f17d11', '', '#fafcfa', '#e9eef1'],
                bigSectionsDestination: 'top',
                verticalCentered: false,
                responsiveWidth: 769, // 當寬度 <769 時正常滾動，套用 fp-auto-height-responsive 的 class 區塊將為自動高度
                afterLoad(origin, destination) {
                    if (destination.index === 1) {
                        $('#section2 .js-animated').addClass('animated zoomIn animatedend');
                    }
                    if (destination.index === 3) {
                        $('#section4 .js-animated').addClass('animated bounce animatedend');
                    }
                },
            },
        }
    },
    components: {
        Section1,
        Section2,
        Section3,
        Section4,
        Section5,
        Section6,
        Footer,
    },
}
</script>

<style lang="scss" src="~/assets/sass/style.scss"></style>
