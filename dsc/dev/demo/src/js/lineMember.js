new Vue({
    el: '.list-case-show',
    data: {
        displayName: '',
        pictureUrl: '',
    },
    computed: {
        channelID() {
            return '1563584152';
        },
        callbackUrl() {
            return location.origin + location.pathname;
        },
        state() {
            return 'abcde';
        },
        channelSecret() {
            return '784af891734ae5e34c4b8ea5c382410c';
        },
    },
    methods: {
        getParameterByName(name, url) {
            if (!url) url = location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },
        login() {
            let url = 'https://access.line.me/oauth2/v2.1/authorize?';
            url += 'response_type=code';
            url += `&client_id=${this.channelID}`;
            url += `&redirect_uri=${this.callbackUrl}`;
            url += `&state=${this.state}`;
            url += '&scope=openid%20email%20profile';
            location.href = url;
        },
        logout() {
            localStorage.removeItem('lineToken');
            location.reload();
        },
        checkLogin() {
            let token = localStorage.getItem('lineToken');
            if (token) {
                this.getProfile(token);
                return true;
            }
        },
        getCode() {
            let code = this.getParameterByName('code', location.href);
            let state = this.getParameterByName('state', location.href);
            if (code && state === this.state) {
                let pageName = this.callbackUrl.split('/').pop();
                history.replaceState({}, '', pageName);
                this.getToken(code);
                return;
            }
            this.showCover();
        },
        getToken(code) {
            const params = new URLSearchParams();
            params.append('grant_type', 'authorization_code');
            params.append('code', code);
            params.append('redirect_uri', this.callbackUrl);
            params.append('client_id', this.channelID);
            params.append('client_secret', this.channelSecret);
            axios.post('https://api.line.me/oauth2/v2.1/token', params).then(res => {
                if (res.status === 200) {
                    this.accessToken = res.data.access_token;
                    localStorage.setItem('lineToken', this.accessToken);
                    this.getProfile(this.accessToken);
                    return;
                }
                this.showCover();
            })
                .catch(error => {
                    this.showCover();
                });
        },
        getProfile(token) {
            axios.get('https://api.line.me/v2/profile', {
                headers: { 'Authorization': `Bearer ${token}` }
            }).then(res => {
                if (res.status === 200) {
                    this.displayName = res.data.displayName;
                    this.pictureUrl = res.data.pictureUrl;
                    console.log('login..');
                    return;
                }
                this.showCover();
            })
                .catch(error => {
                    this.showCover();
                });
        },
        showCover() {
            // 設定文章高度
            if (this.$el.offsetHeight > 1400) {
                this.$el.style.height = '1400px';
                this.$el.style.overflow = 'hidden';
            }
            this.$el.classList.add('no-login');
            console.log('no login..');
        },
        appendCover() {
            $('.list-case-show').append(
                `<div class="articleCover">
                    <button @click="login">登入看更多</button>
                </div>`
            );
            $('.list-case-show').prepend('<button @click="logout" style="position: fixed;left: 0;bottom: 0;z-index: 1;">登出</button>');
        },
    },
    created() {
        this.appendCover();
    },
    mounted() {
        if (this.checkLogin()) return;
        this.getCode();
    },
});