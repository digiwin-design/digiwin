// 取得網址參數
function getParameterByName(name) {
    let url = new URL(location.href);
    let params = url.searchParams;
    return params.get(name);
}

// 轉址
(function () {
    let currentUrl = location.pathname.replace(/(.html|.htm)$/, '') + location.hash;

    let urlMaps = [
        {
            before: '/tw/list.html',
            after: '/tw/ERP/erp-all.html'
        },
        {
            before: '/tw/dsc/marketing/WB002838/WB00283803.htm',
            after: '/tw/dsc/marketing/WB002838/web/03/'
        }
    ];

    // 比對網址成功後進行轉址
    let result = urlMaps.find(function (item) {
        item = item.before.replace(/(.html|.htm)$/, '');
        let regex = new RegExp(item + '$');
        return currentUrl.search(regex) !== -1;
    });
    if (result) {
        location.replace(result.after);
    }
})();

// 電腦/手機版轉址
// BUG：電腦開啟手機版網址無法自動轉址(重新整理始可)
(function () {
    let currentUrl = location.pathname.replace(/(.html|.htm)$/, '') + location.hash;

    // 判斷目的裝置
    let md = new MobileDetect(window.navigator.userAgent);
    let device = md.mobile() ? 'desktop' : 'mobile';
    document.querySelector('html').classList.add(md.os());

    // 比對網址
    fetch('/tw/dsc/assets/awd-list.json')
        .then(res => res.json())
        .then(res => {
            let result = res.list.find(function (item) {
                item[device] = item[device].replace(/(.html|.htm)/, '');
                let regex = new RegExp(item[device] + '$');
                return regex.test(currentUrl);
            });

            // 如比對成功進行轉址
            if (result && device === 'desktop') {
                location.replace(result.mobile);
            }
            else if (result && device === 'mobile') {
                location.replace(result.desktop);
            }
        });
})();

// add class to html tag
(function () {
    let isProd = location.hostname === 'www.digiwin.com' ? 'production' : 'no-production';
    let currentPage = location.pathname.split('/').pop().replace('.html', '');
    document.querySelector('html').classList.add(isProd, currentPage);
})();

// 修改手機版電話號碼(與後台電腦版連動)
$(function () {
    let target = document.querySelector('#toolbar .p-2');
    if (target) {
        let phoneNum = target.innerText.trim();
        document.querySelector('.xz-fudong a').setAttribute('href', 'tel:' + phoneNum);
    }
});

// 設置文章閱讀權限及插入訂閱表單
// 表單標題清單：/tw/dsc/assets/lineMember/form.json
$(function () {
    let currentUrl = location.pathname.replace(/(.html|.htm)$/, '');

    // 取得加入閱讀權限的文章
    fetch('/tw/dsc/assets/lineMember/login.json')
        .then(res => res.json())
        .then(res => {
            // 比對網址成功後載入對應的外部連結
            let result = res.find(function (item) {
                item = item.replace(/(.html|.htm)$/, '');
                let regex = new RegExp(item + '$');
                return currentUrl.search(regex) !== -1;
            });

            if (!result) return;

            let head = document.querySelector('head');
            let style = document.createElement('link');
            style.href = '/tw/dsc/assets/lineMember/css/lineMember.css';
            style.rel = 'stylesheet';
            head.appendChild(style);

            let preload = document.createElement('link');
            preload.href = '/tw/dsc/assets/lineMember/images/lineMember/btn-h.png';
            preload.rel = 'preload';
            preload.as = 'image';
            head.appendChild(preload);

            $.getScript('/tw/dsc/assets/lineMember/js/lineMember.min.js');
        });
});

// 文章插入廣告
// 廣告清單：/tw/dsc/assets/article-ad/db.json
$(function () {
    let currentUrl = location.pathname.replace(/(.html|.htm)$/, '');

    // 取得插入廣告的文章
    fetch('/tw/dsc/assets/article-ad/db.json')
        .then(res => res.json())
        .then(res => {
            // 比對網址成功後載入對應的外部連結
            let result = res.find(function (item) {
                item = item.url.replace(/(.html|.htm)$/, '');
                let regex = new RegExp(item + '$');
                return currentUrl.search(regex) !== -1;
            });

            if (!result) return;

            // 在文章標籤下方插入廣告
            let img = document.createElement('img');
            img.src = result.imgSrc;

            let a = document.createElement('a');
            a.href = result.link;
            a.target = '_blank';
            a.style.display = 'block';
            a.appendChild(img);

            document.querySelector('.list-case-show .tag').insertAdjacentElement('afterend', a);
        });
});

// 解決主選單擋住文章內容的問題
$(function () {
    let mouseenterHandler = function () {
        document.querySelector('header').style.zIndex = 100;
    };

    let mouseleaveHandler = function () {
        setTimeout(() => {
            if (document.querySelector('#qcTopNavSheetWrapper').style.display === 'none') {
                document.querySelector('header').removeAttribute('style');
            }
        }, 500);
    };

    if (location.hostname !== 'www.digiwin.com') return;
    document.querySelector('.nav').addEventListener('mouseenter', mouseenterHandler);
    document.querySelector('.nav').addEventListener('mouseleave', mouseleaveHandler);
    document.querySelector('#qcTopNavSheetWrapper').addEventListener('mouseenter', mouseenterHandler);
    document.querySelector('#qcTopNavSheetWrapper').addEventListener('mouseleave', mouseleaveHandler);
});

// 解決文章右側定位問題
$(function () {
    window.addEventListener('scroll', () => {
        document.querySelector('aside.rightbox') && document.querySelector('aside.rightbox').classList.remove('asideFixed', 'topscorll', 'asideBottom');
    });
});

// 將活動介紹頁網址中的 userId 加至"立即報名"連結上
$(function () {
    let userId = getParameterByName('userId');
    let btn1 = document.querySelector('.list-cc .button a');
    let btn2 = document.querySelector('.list-case-show .abutton a');
    if (userId && btn1 && btn2) {
        btn1.href += `&userId=${userId}`;
        btn2.href += `&userId=${userId}`;
    }
});

// 右下角浮動廣告
$(function () {
    if (typeof dayjs === 'function') return;
    $.when($.ajax('/tw/dsc/assets/ad/db.json'), $.getScript('/tw/dsc/assets/ad/dayjs/dayjs.min.js'), $.getScript('/tw/dsc/assets/ad/dayjs/isBetween.js'))
        .done(res => {
            let result = res[0].filter(value => location.pathname.replace(/(.html|.htm)$/, '') === value.url.replace(/(.html|.htm)$/, ''));
            if (!result.length) return;

            let div = document.createElement('div');
            div.id = 'ad';
            document.querySelector('body').appendChild(div);

            new Vue({
                el: '#ad',
                components: {
                    'ad': httpVueLoader('/tw/dsc/assets/ad/Ad.vue')
                },
                computed: {
                    info() {
                        return result[0];
                    }
                },
                template: '<ad :info="info"></ad>',
            });
        });
});

// 修改資料下載標題
$(function () {
    if (location.hostname === 'www.digiwin.com' && location.pathname !== '/tw/zlsq.html') return;
    
    const firebaseConfig = {
        apiKey: 'AIzaSyAHt_p6RibnGGyi2PWES5kQi7K5-m_9lNs',
        authDomain: 'digiwin-4a7d3.firebaseapp.com',
        databaseURL: 'https://digiwin-4a7d3.firebaseio.com',
        projectId: 'digiwin-4a7d3',
        storageBucket: 'digiwin-4a7d3.appspot.com',
        messagingSenderId: '306272678210',
        appId: '1:306272678210:web:d0f8a849f5902ba0e498db'
    };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    let contentRef = firebase.database().ref('resources');
    contentRef.once('value').then(snapshot => {
        let content = snapshot.val();
        for (const key in content) {
            if (content.hasOwnProperty(key)) {
                const element = content[key];
                if (element.id == getParameterByName('id')) {
                    document.querySelector('.form-bd .title').textContent = element.title;
                    break;
                }
            }
        }
    });

    // =========================================================================
    // use local data
    // =========================================================================
    // fetch('db.json')
    //     .then(res => res.json())
    //     .then(res => {
    //         res = res.resources;
    //         for (const key in res) {
    //             if (res.hasOwnProperty(key)) {
    //                 const element = res[key];
    //                 if (element.id == getParameterByName('id')) {
    //                     document.querySelector('.form-bd .title').textContent = element.title;
    //                     break;
    //                 }
    //             }
    //         }
    //     });
});