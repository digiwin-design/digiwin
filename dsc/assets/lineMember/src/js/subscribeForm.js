httpVueLoader.register(Vue, '/tw/dsc/assets/lineMember/components/SubscribeForm.vue');

new Vue({
    el: '.list-case-show',
    computed: {
        // 插入表單網址
        formMap() {
            return {
                '/tw/blog/3/index/1836.html': '曹永誠專欄訂閱',
                '/tw/blog/3/index/1837.html': '曹永誠專欄訂閱',
                '/tw/blog/3/index/1850.html': '曹永誠專欄訂閱',
                '/tw/blog/3/index/1856.html': '曹永誠專欄訂閱',
                '/tw/blog/3/index/1860.html': '曹永誠專欄訂閱',
            };
        }
    },
    methods: {
        addForm() {
            let currentUrl = location.pathname.replace(/(.html|.htm)$/, '');
            for (const key in this.formMap) {
                if (this.formMap.hasOwnProperty(key)) {
                    let url = key.replace(/(.html|.htm)$/, '');
                    if (url === currentUrl) {
                        let title = this.formMap[key];
                        $('.list-case-show').append(`<subscribe-form title="${title}"></subscribe-form>`);
                    }
                }
            }
        },
        saveData() {
            let data = {
                source: location.href
            };
            const params = new URLSearchParams();
            params.append('', JSON.stringify(data));
            axios.post('https://misws.digiwin.com/SocialMediaMarketing/api/loglist/Save', params)
                .then(res => {
                    if (!(res.data && res.data.result)) {
                        console.error(res.data.msg);
                        return;
                    }
                    console.log(data);
                });
        },
    },
    created() {
        this.addForm();
    },
});