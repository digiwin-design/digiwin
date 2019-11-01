httpVueLoader.register(Vue, '/tw/dsc/assets/lineMember/components/subscribe-form.vue');

axios.get('/tw/dsc/assets/lineMember/form.json')
    .then(res => {
        new Vue({
            el: '.list-case-show',
            computed: {
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
                getParameterByName(name) {
                    let url = new URL(location.href);
                    let params = url.searchParams;
                    return params.get(name);
                },
                cleanLS() {
                    localStorage.removeItem('lineToken');
                    localStorage.removeItem('lineUserId');
                    localStorage.removeItem('lineDisplayName');
                    localStorage.removeItem('lineExp');
                },
                login() {
                    let url = 'https://access.line.me/oauth2/v2.1/authorize?';
                    url += 'response_type=code';
                    url += `&client_id=${this.channelID}`;
                    url += `&redirect_uri=${this.callbackUrl}`;
                    url += `&state=${this.state}`;
                    url += '&scope=openid%20email%20profile';
                    location.href = url; // 前往line登入畫面
                },
                logout() {
                    this.cleanLS();
                    location.reload();
                },
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
        
                            this.saveData();
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
                addForm(formMap) {
                    let currentUrl = location.pathname.replace(/(.html|.htm)$/, '');
                    formMap.forEach(el => {
                        let { url, title, lineUrl } = el;
                        url = url.replace(/(.html|.htm)$/, '');
                        if (url === currentUrl) {
                            $('.list-case-show').append(`<subscribe-form title="${title}" line-url="${lineUrl}"></subscribe-form>`);
                        }
                    });
                },
                addCover() {
                    $('.list-case-show').append('<div class="articleCover"><a href @click.prevent="login">登入看更多</a></div>');
        
                    // 登出按鈕，測試用
                    if (location.hostname === 'localhost') {
                        $('.list-case-show').prepend('<button @click="logout" style="position: fixed;left: 0;bottom: 0;z-index: 1;">登出</button>');
                    }
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
            },
            created() {
                this.addForm(res.data);
                this.addCover();
            },
            mounted() {
                if (this.checkLogin()) return;
                this.getCode(); // 未登入或從登入畫面導回時執行
            },
        });
    });
