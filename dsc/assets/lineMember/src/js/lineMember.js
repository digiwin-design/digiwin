httpVueLoader.register(Vue, '/tw/dsc/assets/lineMember/components/SubscribeForm.vue');

new Vue({
    el: '.list-case-show',
    data: {
        userId: '',
    },
    computed: {
        channelID() {
            return '1570741188';
        },
        channelSecret() {
            return '8082e9d4b345e1b3768f160ddd76a6ee';
        },
        state() {
            return 'abcde'; // 自訂驗證碼
        },
        callbackUrl() {
            return location.origin + location.pathname;
        },
        formUrl() {
            return [
                '/tw/dsc/dev/demo/line_member'
            ];
        }
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
            location.href = url; // 前往登入畫面
        },
        logout() {
            localStorage.removeItem('lineExp');
            localStorage.removeItem('lineToken');
            localStorage.removeItem('lineUserId');
            localStorage.removeItem('lineDisplayName');
            location.reload();
        },
        checkLogin() {
            let today = new Date();
            let exp = localStorage.getItem('lineExp') && parseInt(localStorage.getItem('lineExp'), 10);
            if (today.getTime() > exp) {
                localStorage.removeItem('lineExp');
                localStorage.removeItem('lineToken');
                localStorage.removeItem('lineUserId');
                localStorage.removeItem('lineDisplayName');
                return false;
            }
            else {
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
            axios.post('https://api.line.me/oauth2/v2.1/token', params)
                .then(res => {
                    if (res.status !== 200) return this.showCover();
                    this.accessToken = res.data.access_token;
                    localStorage.setItem('lineToken', this.accessToken);
                    this.getProfile(this.accessToken);
                })
                .catch(error => this.showCover());
        },
        getProfile(token) {
            axios.get('https://api.line.me/v2/profile', {
                headers: { 'Authorization': `Bearer ${token}` }
            })
                .then(res => {
                    if (res.status !== 200) return this.showCover();
                    this.userId = res.data.userId;
                    let today = new Date();
                    let lastDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);
                    localStorage.setItem('lineExp', lastDay.getTime());
                    localStorage.setItem('lineUserId', res.data.userId);
                    localStorage.setItem('lineDisplayName', res.data.displayName);
                    this.addProfile(); // 存入資料庫
                })
                .catch(error => this.showCover());
        },
        showCover() {
            // 設定文章高度
            if (this.$el.offsetHeight > 1400) {
                this.$el.style.height = '1400px';
                this.$el.style.overflow = 'hidden';
            }
            this.$el.classList.add('no-login');
        },
        addForm() {
            let currentUrl = location.pathname.replace(/(.html|.htm)$/, '');
            let result = this.formUrl.find(function (item) {
                item = item.replace(/(.html|.htm)$/, '');
                let regex = new RegExp(item + '$');
                return currentUrl.search(regex) !== -1;
            });
            if (result) {
                $('.list-case-show').append('<subscribe-form></subscribe-form>');
            }
        },
        addCover() {
            $('.list-case-show').append('<div class="articleCover"><a href @click.prevent="login">登入看更多</a></div>');

            // 登出按鈕，測試用
            $('.list-case-show').prepend('<button @click="logout" style="position: fixed;left: 0;bottom: 0;z-index: 1;">登出</button>');
        },
        addProfile() {
            let data = {
                lineId: this.userId,
                source: location.href
            };
            const params = new URLSearchParams();
            params.append('', JSON.stringify(data));
            axios.post('https://misws.digiwin.com/SocialMediaMarketing/api/loglist/Save', params)
                .then(res => {
                    if (!(res.data && res.data.result)) {
                        console.error(res.data.msg);
                    }
                });
        },
    },
    created() {
        this.addForm();
        this.addCover();
    },
    mounted() {
        if (this.checkLogin()) return;
        this.getCode(); // 未登入或從登入畫面導回時執行
    },
});