<template>
    <div>
        <div class="nav">
            <div class="nav-links">
                <a href="#section1" @click.prevent="anchorController">HRM特色、優勢、因應法令</a>
                <a href="#section2" @click.prevent="anchorController">HRM應用特性</a>
                <a href="#section3" @click.prevent="anchorController">HMR產品優勢</a>
                <a href="#section4" @click.prevent="anchorController">HRM行業應用特性</a>
                <a href="#section5" @click.prevent="anchorController">輔導案例‧成就典範</a>
            </div>
        </div>

        <article id="section1" class="section1"></article>
        <article id="section2" class="section2"></article>
        <article id="section3" class="section3"></article>
        <article id="section4" class="section4"></article>
        <article id="section5" class="section5"></article>
    </div>
</template>

<script>
module.exports = {
    methods: {
        anchorController: function (e) {
            let target = e.currentTarget.getAttribute('href');
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
        }
    },
}
</script>