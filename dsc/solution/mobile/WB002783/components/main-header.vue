<template>
    <div class="header">
        <div class="container">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped>
    h1 {
        margin-bottom: .5em;
        font-weight: bold;
        font-size: 34px;
        line-height: 40px;
    }
    p {
        color: #fff;
        line-height: 24px;
    }
</style>