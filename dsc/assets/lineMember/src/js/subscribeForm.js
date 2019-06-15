httpVueLoader.register(Vue, '/tw/dsc/assets/lineMember/components/SubscribeForm.vue');

axios.get('/tw/dsc/assets/lineMember/formTitle.json')
    .then(res => {
        new Vue({
            el: '.list-case-show',
            methods: {
                addForm(formMap) {
                    let currentUrl = location.pathname.replace(/(.html|.htm)$/, '');
                    for (const key in formMap) {
                        if (formMap.hasOwnProperty(key)) {
                            let url = key.replace(/(.html|.htm)$/, '');
                            if (url === currentUrl) {
                                let title = formMap[key];
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
                this.addForm(res.data);
            }
        });
    });
