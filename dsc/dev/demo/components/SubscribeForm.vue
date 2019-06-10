<template>
    <form class="subscribe" @submit.prevent="submit">
        <fieldset>
            <legend>工業 3.5 專題訂閱</legend>
            <div class="form-group">
                <label for="subscribe-name">姓名</label>
                <input type="text" v-model.trim="name" class="form-control" id="subscribe-name" required>
                <div v-show="nameErr" class="invalid-feedback">欄位有誤，請重新填寫</div>
            </div>
            <div class="form-group">
                <label for="subscribe-email">電子信箱</label>
                <input type="email" v-model.trim="email" class="form-control" id="subscribe-email" required>
                <div v-show="emailErr" class="invalid-feedback">欄位有誤，請重新填寫</div>
            </div>
            <button type="submit" class="btn btn-primary">提交</button>
        </fieldset>
    </form>
</template>

<script>
module.exports = {
    name: 'SubscribeForm',
    data: function () {
        return {
            name: '',
            nameErr: false,
            email: '',
            emailErr: false,
        }
    },
    methods: {
        checkForm: function () {
            this.nameErr = !this.name.length;
            this.emailErr = !this.email.length || !this.checkEmail();
        },
        checkEmail: function () {
            return /^.+@.+$/.test(this.email);
        },
        submit: function () {
            this.checkForm();
            if (this.nameErr || this.emailErr) return;
            console.log('submit');
        }
    },
}
</script>

<style>
</style>
