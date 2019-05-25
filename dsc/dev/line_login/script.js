new Vue({
    el: '#app',
    data: {
        loading: false,
        displayName: '',
        pictureUrl: '',
        accessToken: '',
    },
    computed: {
        redirectUri() {
            return 'https://www.digiwin.com/tw/dsc/dev/line_login/index';
        },
    },
    methods: {
        getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },
        checkToken() {
            return this.accessToken = localStorage.getItem('lineToken');
        },
        login() {
            let URL = 'https://access.line.me/oauth2/v2.1/authorize?';
            URL += 'response_type=code';
            URL += '&client_id=1563584152';
            URL += `&redirect_uri=${this.redirectUri}`;
            URL += '&state=abcde';
            URL += '&scope=openid%20email%20profile';
            location.href = URL;
        },
        logout() {
            localStorage.removeItem('lineToken');
            location.href = this.redirectUri;
        },
        getCode() {
            let code = this.getParameterByName('code', location.href);
            let state = this.getParameterByName('state', location.href);
            if (code && state === 'abcde') {
                history.replaceState({}, '', 'index');
                this.getToken(code);
            }
        },
        getToken(code) {
            this.loading = true;
            const params = new URLSearchParams();
            params.append('grant_type', 'authorization_code');
            params.append('code', code);
            params.append('redirect_uri', this.redirectUri);
            params.append('client_id', '1563584152');
            params.append('client_secret', '784af891734ae5e34c4b8ea5c382410c');
            axios.post('https://api.line.me/oauth2/v2.1/token', params).then(res => {
                if (res.status === 200) {
                    this.accessToken = res.data.access_token;
                    localStorage.setItem('lineToken', this.accessToken);
                    this.getProfile(this.accessToken);
                }
            });
        },
        getProfile(token) {
            this.loading = true;
            axios.get('https://api.line.me/v2/profile', {
                headers: { 'Authorization': `Bearer ${token}` }
            }).then(res => {
                if (res.status === 200) {
                    this.displayName = res.data.displayName;
                    this.pictureUrl = res.data.pictureUrl;
                    this.loading = false;
                }
            });
        },
    },
    mounted() {
        let token = this.checkToken();
        if (token) {
            this.getProfile(token);
        }
        else {
            this.getCode();
        }
    },
    beforeDestroy() {
        this.logout();
    },
    template: `
        <div v-if="!loading">
            <template v-if="displayName && pictureUrl">
                <h1>Hi~ {{displayName}}</h1>
                <img :src="pictureUrl" class="picture" alt="">
            </template>
            <a href v-else @click.prevent="login">
                <img src="loginBtn.png" class="loginBtn" alt="">
            </a>
            <button v-if="accessToken" @click="logout">登出</button>
        </div>
    `
});