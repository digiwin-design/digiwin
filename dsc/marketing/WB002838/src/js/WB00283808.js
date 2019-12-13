let md = new MobileDetect(window.navigator.userAgent);
if (md.mobile()) {
    new WOW().init();
}

// banner link
dayjs.extend(dayjs_plugin_isBetween);
let showAd = dayjs().isBetween('2019-12-09', '2019-12-13');
if (showAd) {
    document.querySelector('#banner-link').style.display = 'block';
}