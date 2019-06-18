<template>
    <div class="subscribe">
        <form @submit.prevent="submit">
            <fieldset>
                <legend>{{title}}訂閱</legend>
                <div class="subscribe-fields">
                    <div class="subscribe-field">
                        <label for="subscribe-name">姓名</label>
                        <input
                            type="text"
                            v-model.trim="name"
                            class="form-control"
                            id="subscribe-name"
                            required
                        >
                        <div v-show="nameErr" class="invalid-feedback">欄位有誤，請重新填寫</div>
                    </div>
                    <div class="subscribe-field">
                        <label for="subscribe-email">電子信箱</label>
                        <input
                            type="email"
                            v-model.trim="email"
                            class="form-control"
                            id="subscribe-email"
                            required
                        >
                        <div v-show="emailErr" class="invalid-feedback">欄位有誤，請重新填寫</div>
                    </div>
                    <div class="subscribe-btns">
                        <div class="subscribe-submit" v-bind:class="{'is-loading':isLoading}">
                            <input type="submit" class="btn btn-primary" value="訂閱" />
                        </div>
                        <a href="https://acho.tw/acho/f/LCOU0" class="subscribe-line" target="_blank">社群訂閱</a>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
module.exports = {
    name: 'SubscribeForm',
    props: ['title'],
    data: function () {
        return {
            name: '',
            nameErr: false,
            email: '',
            emailErr: false,
            isLoading: false
        }
    },
    computed: {
        userId: function () {
            return localStorage.getItem('lineUserId') || '';
        },
        displayName: function () {
            return localStorage.getItem('lineDisplayName') || '';
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
            let data = {
                lineId: this.userId,
                lineName: this.displayName,
                realName: this.name,
                eMail: this.email,
                mobile: '',
                fbId: '',
                fbName: '',
                companyCode: '',
                companyName: '',
                job: '',
                acpCusNo: '',
                memEDM: [
                    {
                        orderEDM: this.title,
                        source: location.href
                    }
                ],
                memEvent: []
            };
            const params = new URLSearchParams();
            params.append('', JSON.stringify(data));
            this.isLoading = true;
            axios.post('https://misws.digiwin.com/SocialMediaMarketing/api/member/Save', params)
                .then(function (res) {
                    this.isLoading = false;
                    if (!(res.data && res.data.result)) {
                        alert('系統忙碌中，請稍後再試！');
                        console.error(res.data.msg);
                        return;
                    }
                    console.log(data);
                    alert('訂閱成功');
                    this.name = '';
                    this.email = '';
                }.bind(this));
        }
    },
}
</script>