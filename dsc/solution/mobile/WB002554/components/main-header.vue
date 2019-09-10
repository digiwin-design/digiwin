<template>
    <div class="header">
        <div class="container">
            <div>
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    color: #fff;
    font-weight: bold;
    font-size: 30px;
    line-height: 1.3;
}
p {
    margin-top: 1em;
    color: #fff;
    line-height: 1.4;
}
</style>