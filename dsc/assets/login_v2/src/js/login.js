axios.get('/tw/dsc/assets/login_v2/subscribe.json').then(res => { // 先取得資料後再初始化 vue，避免子組件失效
    new Vue({
        el: '.list-case-show',
        components: {
            'subscribe-form': httpVueLoader('./components/subscribe-form.vue'),
            'login-form': httpVueLoader('./components/login-form.vue'),
        },
        data: {
            showPopup: false,
        },
        computed: {
            dev() {
                return location.hostname === 'localhost';
            },
            userId() {
                return localStorage.getItem('lineUserId');
            },
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
        },
        methods: {
            checkLogin() {
                let today = new Date();
                let exp = parseInt(localStorage.getItem('lineExp'), 10);
                if (!exp || today.getTime() > exp) {
                    this.cleanLS();
                    return false;
                }
                return true;
            },
            getCode() {
                let code = this.getParameterByName('code');
                let state = this.getParameterByName('state');
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
                        localStorage.setItem('lineUserId', res.data.userId);
                        localStorage.setItem('lineDisplayName', res.data.displayName);

                        // 設置登入到期時間(第3天結束後到期)
                        let today = new Date();
                        let lastDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);
                        localStorage.setItem('lineExp', lastDay.getTime());

                        if (!this.dev) {
                            this.saveData();
                        }
                    })
                    .catch(error => this.showCover());
            },
            saveData() {
                let data = {
                    lineId: this.userId,
                    source: location.href
                };
                const params = new URLSearchParams();
                params.append('', JSON.stringify(data));
                axios.post('https://misws.digiwin.com/SocialMediaMarketing/api/loglist/Save', params)
                    .then(res => {
                        console.log(data);
                        if (!(res.data && res.data.result)) {
                            console.error(res.data.msg);
                            return;
                        }
                    });
            },
            showCover() {
                // 設定文章高度
                if (this.$el.offsetHeight > 1400) {
                    this.$el.style.height = '1400px';
                    this.$el.style.overflow = 'hidden';
                }
                // 取消隱藏
                this.$el.classList.add('no-login');
            },
            addCover() {
                // 預設隱藏
                document.querySelector('.list-case-show').insertAdjacentHTML('beforeend', '<div class="articleCover"><a href @click.prevent="showPopup=true">全文閱讀</a></div><login-form v-model="showPopup" :info="{ channelID: channelID, state: state, callbackUrl: callbackUrl }"></login-form>');

                // 登出按鈕，測試用
                if (this.dev) {
                    document.querySelector('.list-case-show').insertAdjacentHTML('beforeend', '<button @click="logout" style="position: fixed;left: 0;bottom: 0;z-index: 1;">登出</button>');
                }
            },
            addSubscribeForm(formList) {
                let currentUrl = location.pathname.replace(/(.html|.htm)$/, '');
                formList.forEach(el => {
                    let { url, title, lineUrl } = el;
                    url = url.replace(/(.html|.htm)$/, '');
                    if (url === currentUrl) {
                        document.querySelector('.list-case-show').insertAdjacentHTML('beforeend', `<subscribe-form title="${title}" line-url="${lineUrl}"></subscribe-form>`);
                    }
                });
            },
            logout() {
                this.cleanLS();
                location.reload();
            },
            cleanLS() {
                localStorage.removeItem('lineToken');
                localStorage.removeItem('lineUserId');
                localStorage.removeItem('lineDisplayName');
                localStorage.removeItem('lineExp');
            },
            getParameterByName(name) {
                let url = new URL(location.href);
                let params = url.searchParams;
                return params.get(name);
            },
        },
        created() {
            // 在 vue 掛載 DOM 前插入子組件
            this.addCover();
            this.addSubscribeForm(res.data);
        },
        mounted() {
            if (this.checkLogin()) {
                // TODO：已登入(非登入後導回)時發 API 模擬
                return;
            }
            this.getCode(); // 未登入或從登入畫面導回時執行
        },
    });
});
