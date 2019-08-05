<template>
    <h1 :class="setClass"><span><slot></slot></span></h1>
</template>

<script>
export default {
    props: ['setClass']
}
</script>


<style lang="scss" src="~/assets/sass/components/_sectionTitle.scss" scoped></style>
