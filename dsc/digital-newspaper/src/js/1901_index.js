// =============================================================================
// function
// =============================================================================
function fetchFile(file) {
    return new Promise(resolve => {
        fetch(file)
            .then(res => {
                if (file.lastIndexOf('.json') !== -1) {
                    return res.json();
                }
                else {
                    return res.text();
                }
            })
            .then(res => {
                resolve(res);
            });
    });
}

// =============================================================================
// initial
// =============================================================================
let path = location.pathname.split('/');
let file = path[path.length - 1].replace('.html', '');

Promise.all([fetchFile('db.json'), fetchFile(`components/1901/${file}.vue`)]).then(res => {
    let result = res[0][file];
    document.querySelector('main').innerHTML = res[1];

    new Vue({
        el: '#app',
        computed: {
            videoSrc: () => result.videoSrc,
            section1: () => result.section1,
            section2() {
                return {
                    title: result.section2.title,
                    subtitle: result.section2.subtitle,
                    contentTitle: result.section2.contentTitle,
                    contents: _.chunk(result.section2.contents, 2)
                };
            },
            lineMsg: () => `http://line.naver.jp/R/msg/text/?${result.lineMsg}${location.href}`
        },
        mounted() {
            this.initYT();
            this.initFb();
        },
        methods: {
            initYT() {
                let videoSrc = this.getParameterByName('v', this.videoSrc);

                var tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                var player;

                window.onYouTubeIframeAPIReady = function () {
                    var playerVars = {
                        loop: 1,
                        playlist: videoSrc, // for loop
                        controls: 1,
                        showinfo: 0,
                        rel: 0
                    };

                    // 如為 chrome 則預設靜音，否則無法自動播放
                    // let md = new MobileDetect(window.navigator.userAgent);
                    // if (md.is('WebKit')) {
                    //     playerVars['mute'] = 1;
                    // }

                    player = new YT.Player('player', {
                        videoId: videoSrc,
                        suggestedQuality: 'highres',
                        playerVars: playerVars,
                        events: {
                            'onReady': onPlayerReady,
                            // 'onStateChange': onPlayerStateChange
                        }
                    });
                };

                window.onPlayerReady = function (event) {
                    event.target.playVideo();
                };

                // window.onPlayerStateChange = function (event) {
                //     // console.log(event.data, YT.PlayerState);

                //     // 滾動頁面時暫停影片
                //     if (event.data == YT.PlayerState.PLAYING) {
                //         $(window).on('scroll.scrollHandler', function () {
                //             player.pauseVideo();
                //         });
                //     }
                // };
            },
            initFb() {
                window.fbAsyncInit = function () {
                    FB.init({
                        appId: '441404166304139', // Facebook APP ID
                        xfbml: true,
                        version: 'v3.0'
                    });
                    FB.AppEvents.logPageView();
                };

                (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) { return; }
                    js = d.createElement(s); js.id = id;
                    js.src = 'https://connect.facebook.net/en_US/sdk.js';
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            },
            shareFb() {
                FB.ui({
                    method: 'share_open_graph',
                    action_type: 'og.likes',
                    action_properties: JSON.stringify({
                        object: {
                            'og:url': location.href,
                            'og:title': document.title,
                            'og:description': this.getMeta('description'),
                            'og:image': this.getFbShareImg(),
                            'og:image:width ': 848,
                            'og:image:height ': 446
                        }
                    })
                });
            },
            getMeta(metaName) {
                const metas = document.getElementsByTagName('meta');
                for (let i = 0; i < metas.length; i++) {
                    if (metas[i].getAttribute('name') === metaName) {
                        return metas[i].getAttribute('content');
                    }
                }
            },
            getFbShareImg() {
                let href = location.href;
                let end = href.lastIndexOf('/');
                let url = href.slice(0, end);
                return `${url}/images/${file}/fb-share.png`;
            },
            getParameterByName(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, '\\$&');
                var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, ' '));
            }
        },
    });
});

Vue.component('Section1Content', {
    template: '#section1-content-template'
});
