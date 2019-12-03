<template>
    <div class="solution">
        <slider-banner-s :slides="result.banner"></slider-banner-s>

        <article class="section3">
            <div class="container">
                <section-title title="成功案例"></section-title>
                <case-list :list="result.caseList"></case-list>
            </div>
        </article>
    </div>
</template>

<script>
module.exports = {
    name: 'solution',
    computed: {
        result() {
            return store.state.result.solution.find(item => item.id === this.$route.params.id);
        }
    },
}
</script>
