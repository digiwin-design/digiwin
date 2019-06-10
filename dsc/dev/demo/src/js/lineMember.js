httpVueLoader.register(Vue, 'components/SubscribeForm.vue');

new Vue({
    el: '.list-case-show',
    data: {
        userId: '',
        displayName: '',
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
            localStorage.removeItem('lineToken');
            location.reload();
        },
        checkLogin() {
            return localStorage.getItem('lineToken');
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
                    console.log('login..');
                    this.userId = res.data.userId;
                    this.displayName = res.data.displayName;
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
            console.log('no login..');
        },
        addCover() {
            // 登出按鈕，測試用
            $('.list-case-show').prepend('<button @click="logout" style="position: fixed;left: 0;bottom: 0;z-index: 1;">登出</button>');

            // 表單
            $('.list-case-show').append('<subscribe-form></subscribe-form>');

            $('.list-case-show').append(
                `<div class="articleCover">
                    <a href @click.prevent="login">登入看更多</a>
                </div>`
            );
        },
        addProfile() {
            console.log(this.userId, this.displayName);
            // let data = {
            //     doc_no: 'WB002838',
            //     source: document.title,
            //     page_dir: location.href,
            //     company: 'test',
            //     telephone: 'test',
            //     extension: '',
            //     address: '',
            //     contact_person: 'test',
            //     email: 'test@digiwin.com',
            //     mobile: '',
            //     department: 'test',
            //     job_title: 'test',
            //     req_sys: '',
            //     dm_ask: '',
            //     get_file: '',
            //     query: '',
            //     other: '',
            //     country: ''
            // };
            // const params = new URLSearchParams();
            // params.append('data', JSON.stringify(data));
            // axios.post('https://misws.digiwin.com/WebPageDataTest/Service.asmx/SaveData', params)
            //     .then(res => {
            //         console.log(res);
            //     });
        },
    },
    created() {
        this.addCover();
    },
    mounted() {
        // 已登入時取得用戶資料
        let token = this.checkLogin();
        if (token) {
            this.getProfile(token);
            return;
        }
        // 未登入狀態或從登入畫面導回時執行
        this.getCode();
    },
});