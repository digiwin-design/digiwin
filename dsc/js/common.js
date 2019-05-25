// 轉址
// (function () {
//     let currentUrl = location.pathname.replace(/(.html|.htm)$/, '') + location.hash;

//     let urlMaps = [
//         {
//             before: '/tw/dsc/marketing/WB002838/WB00283805',
//             after: '/tw/dsc/marketing/WB002838/web/05/'
//         }
//     ];

//     // 比對網址
//     let result = urlMaps.find(function (item) {
//         let regex = new RegExp(item.before + '$');
//         return currentUrl.search(regex) !== -1;
//     });

//     // 如比對成功進行轉址
//     if (result) {
//         location.replace(result.after);
//     }
// }());

// 電腦/手機版轉址
(function () {
    let currentUrl = location.pathname.replace(/(.html|.htm)$/, '') + location.hash;

    let urlMaps = [
        // 中小企業
        {
            desktop: '/tw/dsc/solution/WB002839/WB00283901',
            mobile: '/tw/dsc/solution/mobile/WB002839/index#/'
        },
        {
            desktop: '/tw/dsc/solution/WB002839/manufacture',
            mobile: '/tw/dsc/solution/mobile/WB002839/index#/manufacture'
        },
        {
            desktop: '/tw/dsc/solution/WB002839/merchandise',
            mobile: '/tw/dsc/solution/mobile/WB002839/index#/merchandise'
        },
        {
            desktop: '/tw/dsc/solution/WB002839/solution',
            mobile: '/tw/dsc/solution/mobile/WB002839/index#/solution'
        },
        {
            desktop: '/tw/dsc/solution/WB002839/case',
            mobile: '/tw/dsc/solution/mobile/WB002839/index#/case'
        },
        {
            desktop: '/tw/dsc/solution/WB002839/online',
            mobile: '/tw/dsc/solution/mobile/WB002839/index#/online'
        },
        {
            desktop: '/tw/dsc/solution/WB002839/iso',
            mobile: '/tw/dsc/solution/mobile/WB002839/index#/iso'
        },
        {
            desktop: '/tw/dsc/solution/WB002839/eform',
            mobile: '/tw/dsc/solution/mobile/WB002839/index#/eform'
        },
        {
            desktop: '/tw/dsc/solution/WB002839/inventory',
            mobile: '/tw/dsc/solution/mobile/WB002839/index#/inventory'
        },
        // 電子發票
        {
            desktop: '/tw/dsc/solution/WB002742/WB00274201',
            mobile: '/tw/dsc/solution/mobile/WB002742/index#/'
        },
        {
            desktop: '/tw/dsc/solution/WB002742/WB00274201_law',
            mobile: '/tw/dsc/solution/mobile/WB002742/index#/law'
        },
        {
            desktop: '/tw/dsc/solution/WB002742/WB00274201_seminar',
            mobile: '/tw/dsc/solution/mobile/WB002742/index#/seminar'
        },
        {
            desktop: '/tw/dsc/solution/WB002742/WB00274201_solution',
            mobile: '/tw/dsc/solution/mobile/WB002742/index#/solution'
        },
    ];

    // 判斷目的裝置
    let md = new MobileDetect(window.navigator.userAgent);
    let device = md.mobile() ? 'desktop' : 'mobile';
    document.querySelector('html').classList.add(md.os());

    // 比對網址
    let result = urlMaps.find(function (item) {
        let regex = new RegExp(item[device] + '$');
        return currentUrl.search(regex) !== -1;
    });

    // 如比對成功進行轉址
    if (result && device === 'desktop') {
        location.replace(result.mobile);
    }
    else if (result && device === 'mobile') {
        location.replace(result.desktop);
    }
}());

$(document).ready(function () {
    // 修改手機版電話號碼(與後台電腦版連動)
    let target = document.querySelector('#toolbar .p-2');
    if (target) {
        let phoneNum = target.innerText.trim();
        document.querySelector('.xz-fudong a').setAttribute('href', 'tel:' + phoneNum);
    }
});