<template>
    <transition name="fade">
        <div class="loginForm js-close" v-show="value" @click="closePopup">
            <form>
                <div class="loginForm-fields">
                    <div class="loginForm-field">
                        <label for="loginForm-email">電子信箱</label>
                        <input type="email" class="form-control" id="loginForm-email" required />
                        <!-- <div class="invalid-feedback">欄位有誤，請重新填寫</div> -->
                    </div>
                    <div class="loginForm-btns">
                        <div class="loginForm-submit">
                            <button class="btn btn-primary" @click="emailLogin">登入</button>
                        </div>
                        <a href class="loginForm-line" @click.prevent="lineLogin">社群登入</a>
                    </div>
                </div>
                <button class="loginForm-close js-close">
                    <i class="material-icons js-close">close</i>
                </button>
            </form>
        </div>
    </transition>
</template>

<script>
module.exports = {
    name: 'LoginForm',
    props: {
        value: {
            type: Boolean,
            required: true
        },
        info: {
            type: Object,
            required: true
        },
    },
    methods: {
        closePopup: function () {
            event.preventDefault();
            let isClose = event.target.classList.contains('js-close');
            this.$emit('input', !isClose);
        },
        lineLogin: function () {
            let url = 'https://access.line.me/oauth2/v2.1/authorize?';
            url += 'response_type=code';
            url += '&client_id=' + this.info.channelID;
            url += '&redirect_uri=' + this.info.callbackUrl;
            url += '&state=' + this.info.state;
            url += '&scope=openid%20email%20profile';
            location.href = url; // 前往line登入畫面
        },
        emailLogin: function () {
            // TODO：email登入發API模擬
        }
    },
}
</script>