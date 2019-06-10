<template>
    <form class="subscribe">
        <fieldset>
            <legend>工業 3.5 專題訂閱</legend>
            <div class="form-group">
                <label for="subscribe-name">姓名</label>
                <input type="text" class="form-control" id="subscribe-name">
                <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
            <div class="form-group">
                <label for="subscribe-email">電子信箱</label>
                <input type="email" class="form-control" id="subscribe-email">
                <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
            <button type="submit" class="btn btn-primary">提交</button>
        </fieldset>
    </form>
</template>

<script>
module.exports = {
    name: 'SubscribeForm'
}
</script>

<style>
</style>
