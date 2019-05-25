(function () {
    new Vue({
        el: '#ad',
        components: {
            'Ad': httpVueLoader('/tw/dsc/assets/ad/index.vue')
        },
        data() {
            return {
                currentTime: Date.now(),
                isEnd: false
            };
        },
        computed: {
            currentPage() {
                return location.pathname.replace(/(.html|.htm)$/, '');
            },
            // 短網址對應清單
            urlMap() {
                return [
                    {
                        docNum: 'WB002675',
                        shortUrl: 'https://reurl.cc/WxZ0y',
                        imgSrc: '/tw/dsc/assets/ad/images/ad1-online.jpg'
                    },
                    {
                        docNum: 'WB002595',
                        shortUrl: 'https://reurl.cc/QRkYO',
                        imgSrc: '/tw/dsc/assets/ad/images/ad1-online.jpg'
                    },
                    {
                        docNum: 'WB002711',
                        shortUrl: 'https://reurl.cc/NQmYk',
                        imgSrc: '/tw/dsc/assets/ad/images/ad1-online.jpg'
                    },
                    {
                        docNum: 'WB002752',
                        shortUrl: 'https://reurl.cc/VzvYy',
                        imgSrc: '/tw/dsc/assets/ad/images/ad1-online.jpg'
                    },
                    {
                        url: '/tw/solution/ListDetail5967.html',
                        shortUrl: 'https://reurl.cc/aqjx9',
                        imgSrc: '/tw/dsc/assets/ad/images/ad1-online.jpg'
                    },
                    {
                        docNum: 'WB002850',
                        shortUrl: 'https://reurl.cc/kOjoL',
                        imgSrc: '/tw/dsc/assets/ad/images/ad1-online.jpg'
                    },
                    {
                        docNum: 'WB002783',
                        shortUrl: 'https://reurl.cc/edlbR',
                        onlineUrl: 'https://reurl.cc/lQjY9'
                    },
                    {
                        docNum: 'WB002513',
                        shortUrl: 'https://reurl.cc/2EGAm',
                        onlineUrl: 'https://reurl.cc/yLjAM'
                    },
                    {
                        docNum: 'WB002811',
                        shortUrl: 'https://reurl.cc/K3Yze',
                        onlineUrl: 'https://reurl.cc/Ze5NW'
                    },
                    {
                        docNum: 'WB002554',
                        shortUrl: 'https://reurl.cc/4WeDY',
                        onlineUrl: 'https://reurl.cc/mMjM7'
                    },
                    {
                        docNum: 'WB002543',
                        shortUrl: 'https://reurl.cc/m055G',
                        onlineUrl: 'https://reurl.cc/kOjO3'
                    },
                    {
                        docNum: 'WB002553',
                        shortUrl: 'https://reurl.cc/WvQY7',
                        onlineUrl: 'https://reurl.cc/lQjQA'
                    },
                    {
                        url: '/tw/solution/ListDetail5964.html',
                        shortUrl: 'https://reurl.cc/QZAlo',
                        onlineUrl: 'https://reurl.cc/yLjLa'
                    },
                    {
                        url: '/tw/solution/ListDetail5982.html',
                        shortUrl: 'https://reurl.cc/p500r',
                        onlineUrl: 'https://reurl.cc/p3j3b'
                    },
                    {
                        docNum: 'WB002476',
                        shortUrl: 'https://reurl.cc/Nyd8m',
                        onlineUrl: 'https://reurl.cc/Ze5e3'
                    },
                    {
                        docNum: 'WB002899',
                        shortUrl: 'https://reurl.cc/x6M85',
                        onlineUrl: 'https://reurl.cc/r9j9O'
                    },
                    {
                        docNum: 'WB002785',
                        shortUrl: 'https://reurl.cc/6QOOk',
                        onlineUrl: 'https://reurl.cc/2YkYn'
                    },
                    {
                        url: '/tw/solution/ListDetail5945.html',
                        shortUrl: 'https://reurl.cc/DokkQ',
                        onlineUrl: 'https://reurl.cc/1vavD'
                    },
                    {
                        docNum: 'WB002801',
                        shortUrl: 'https://reurl.cc/E1llA',
                        onlineUrl: 'https://reurl.cc/Keney'
                    },
                    {
                        url: '/tw/solution/ListDetail5983.html',
                        shortUrl: 'https://reurl.cc/edllR',
                        onlineUrl: 'https://reurl.cc/oRoyD'
                    },
                    {
                        url: '/tw/solution/ListDetail5947.html',
                        shortUrl: 'https://reurl.cc/My55n',
                        onlineUrl: 'https://reurl.cc/LWzl3'
                    },
                    {
                        docNum: 'WB002839',
                        shortUrl: 'https://reurl.cc/q0ARD',
                        onlineUrl: 'https://reurl.cc/bVjYX'
                    },
                    {
                        url: '/tw/dsc/marketing/WB002838/WB00283807.htm',
                        shortUrl: 'https://reurl.cc/edl2m',
                        onlineUrl: 'https://reurl.cc/3Xl4j'
                    },
                    {
                        url: '/tw/dsc/marketing/WB002838/WB00283808.htm',
                        shortUrl: 'https://reurl.cc/NydMq',
                        onlineUrl: 'https://reurl.cc/ez4yW'
                    },
                ];
            },
            // 依據目前網址取得對應的短網址
            url() {
                return this.urlMap.find(function (item) {
                    if (item.url) {
                        let url = item.url.replace(/(.html|.htm)$/, '');
                        return url === this.currentPage;
                    }
                    else if (item.docNum) {
                        // 取得目前文宣編號
                        let regex = new RegExp(item.docNum);
                        let currentDocNum = regex.exec(this.currentPage);

                        if (currentDocNum) {
                            return item.docNum === currentDocNum[0];
                        }
                    }
                }.bind(this));
            },
            activityTime() {
                let times = [];
                times[0] = Date.parse('2019/3/27 13:30');
                times[1] = Date.parse('2019/3/27 14:41');
                times[2] = Date.parse('2019/3/27 16:01');
                times[3] = Date.parse('2019/3/27 16:41');
                return times;
            },
        },
        methods: {
            getImgSrc() {
                if (this.url.imgSrc) {
                    return this.url.imgSrc;
                }
                else {
                    if (this.currentTime < this.activityTime[0]) {
                        return '/tw/dsc/assets/ad/images/ad2.jpg';
                    }
                    else if (this.currentTime >= this.activityTime[0] && this.currentTime < this.activityTime[1]) {
                        return '/tw/dsc/assets/ad/images/ad2-1.jpg';
                    }
                    else if (this.currentTime >= this.activityTime[1] && this.currentTime < this.activityTime[2]) {
                        return '/tw/dsc/assets/ad/images/ad2-2.jpg';
                    }
                    else if (this.currentTime >= this.activityTime[2] && this.currentTime < this.activityTime[3]) {
                        return '/tw/dsc/assets/ad/images/ad2-3.jpg';
                    }
                    else {
                        return '/tw/dsc/assets/ad/images/ad2-online.jpg';
                    }
                }
            },
            getUrl() {
                if (this.url.onlineUrl && this.currentTime >= this.activityTime[0]) {
                    return this.url.onlineUrl;
                }
                else {
                    return this.url.shortUrl;
                }
            },
            getCurrentTime() {
                let timer = setInterval(() => {
                    this.currentTime = Date.now();
                    if (this.currentTime > this.activityTime[3]) {
                        // this.isEnd = true;
                        clearInterval(timer);
                    }
                }, 10000);
            },
        },
        created() {
            document.querySelector('#toolbar').parentNode.insertAdjacentHTML('beforeend', '<div id="ad"></div>');
            this.getCurrentTime();
        },
        template: '<Ad :url="getUrl()" :imgSrc="getImgSrc()" v-if="url && !isEnd"></Ad>',
    });
}());
