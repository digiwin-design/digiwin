'use strict';

var $win = $(window);
var $htmlBody = $('html, body');
var _winTop = $win.scrollTop();
var _winWidth = $win.width();

function scrollDown(scrollDownNum) {
    $htmlBody.stop().animate({ scrollTop: scrollDownNum });
}

$('.scrollDown, .keyAppList li, .btn-contact').click(function () {
    var anchor = $(this).data('anchor');
    var scrollDownNum = $('#' + anchor).offset().top - 100;
    scrollDown(scrollDownNum);
});

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        width: '100%',
        height: '100%',
        videoId: 'pj9lg7xyPEM',
        playerVars: {
            rel: 0
        }
    });
}

$('.playVideo').click(function () {
    $('.mask').fadeOut();
    player.playVideo();
    $('#rightIcon').fadeOut();
});

function browserSupports360() {
    var ua = navigator.userAgent;

    // No mobile browser is supported at the moment
    // if (/Mobile/.test(ua) || /Tablet/.test(ua)) return false;

    // Chrome >= 40
    if (/Chrome\/[^123][0-9]/.test(ua) && !/Edge\//.test(ua) && !/OPR\//.test(ua)) return true;

    // Firefox >= 40
    if (/Firefox\/[^123][0-9]/.test(ua)) return true;

    // Microsoft Edge
    if (/Edge\//.test(ua)) return true;

    // Opera >= 30
    if (/OPR\/[^12][0-9]/.test(ua)) return true;

    return false;
}

if (!browserSupports360()) {
    $('.postscript').html('您的瀏覽器不支援360影片，<br>建議您使用Chrome或Firefox等其他瀏覽器以達到最佳瀏覽效果。');
} else {
    $('.postscript').text('可於影片右下角將畫質調整至4K以達到最佳瀏覽效果喔！');
    $('.postscript').css('color', '#fff');
}
//# sourceMappingURL=smartManufactur.js.map
