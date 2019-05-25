let md = new MobileDetect(window.navigator.userAgent);
if (md.mobile()) {
    new WOW().init();
}
