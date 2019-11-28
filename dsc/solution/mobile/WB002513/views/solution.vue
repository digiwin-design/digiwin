<template>
    <div class="solution">
        <slider-banner-s :slides="result.banner"></slider-banner-s>
        <h2>{{$route.params.id}}</h2>
    </div>
</template>

<script>
module.exports = {
    name: 'solution',
    computed: {
        result() {
            return store.state.result.solution;
        }
    },
}
</script>
