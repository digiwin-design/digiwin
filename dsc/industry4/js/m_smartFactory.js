'use strict';

{
    var moveSixProcessTxt = function moveSixProcessTxt(processNum, nextProcessName, prevProcessName) {
        move = processNum * winWidth;
        $sixProcessNext.find('.processName').text(nextProcessName);
        $sixProcessPrev.find('.processName').text(prevProcessName);
        $sixProcessListInner.stop().animate({ left: -move });
        $sixProcessBtn.removeClass('active').eq(processNum).addClass('active');
    };

    /*三大關鍵*/


    var moveThreePoint = function moveThreePoint(threePointNum) {
        move = threePointNum * winWidth;
        $threePointListInner.stop().animate({ left: -move });
        $threePointIcon.removeClass('active').eq(threePointNum).addClass('active');
        $threePointOrder.removeClass('active').eq(threePointNum).addClass('active');
    };

    var $win = $(window);
    var $htmlBody = $('html,body');
    var winWidth = $win.outerWidth();
    var processNum = 0;
    var threePointNum = 0;
    var move, prevProcessName, nextProcessName;
    var $sixProcessTxtOuter = $('.sixProcessTxtOuter');
    var $sixProcessNext = $('.sixProcessList .next');
    var $sixProcessPrev = $('.sixProcessList .prev');
    var $sixProcessListInner = $('.sixProcessListInner');
    var $sixProcessBtn = $('.sixProcessBtn');
    var $threePointListInner = $('.threePointListInner');
    var $threePointIcon = $('.threePointIcon');
    var $threePointOrder = $('.threePointList .order li');
    var isPrevClose = true;

    $win.resize(function () {
        winWidth = $win.outerWidth();
    });

    /*主視覺了解更多*/
    $('.scrollDown').click(function () {
        $htmlBody.stop().animate({ scrollTop: $('#sixProcess').offset().top });
    });

    /*六階段場景*/
    $sixProcessBtn.click(function () {
        processNum = $(this).index();
        prevProcessName = $sixProcessTxtOuter.eq(processNum - 1).find('h4').text();
        nextProcessName = $sixProcessTxtOuter.eq(processNum + 1).find('h4').text();
        if (isPrevClose) {
            if (processNum !== 0) {
                $sixProcessPrev.show();
                isPrevClose = false;
            }
        } else {
            if (processNum == 0) {
                $sixProcessPrev.hide();
                isPrevClose = true;
            }
        }

        if (processNum == 6) {
            nextProcessName = '解决方案';
        }
        moveSixProcessTxt(processNum, nextProcessName, prevProcessName);
        $('#sixProcessTxtGroup').delay(300).fadeIn();
    });

    /*點擊>*/
    $sixProcessNext.click(function () {
        prevProcessName = $sixProcessTxtOuter.eq(processNum).find('h4').text();
        if (isPrevClose) {
            $sixProcessPrev.show();
            isPrevClose = false;
        }

        if (processNum < 5) {
            processNum++;
            nextProcessName = $sixProcessTxtOuter.eq(processNum + 1).find('h4').text();
            moveSixProcessTxt(processNum, nextProcessName, prevProcessName);
        } else if (processNum == 5) {
            processNum++;
            nextProcessName = '解决方案';
            moveSixProcessTxt(processNum, nextProcessName, prevProcessName);
        } else {
            $htmlBody.stop().animate({ scrollTop: $('#threePoint').offset().top });
            $('#sixProcessTxtGroup').fadeOut();
        }
    });

    /*點擊<*/
    $sixProcessPrev.click(function () {
        nextProcessName = $sixProcessTxtOuter.eq(processNum).find('h4').text();
        if (processNum == 1) {
            $sixProcessPrev.hide();
            isPrevClose = true;
        }

        if (processNum > 0) {
            processNum--;
            prevProcessName = $sixProcessTxtOuter.eq(processNum - 1).find('h4').text();
            moveSixProcessTxt(processNum, nextProcessName, prevProcessName);
        } else {
            return;
        }
    });

    $('.threePointIcon').click(function () {
        threePointNum = $(this).index() - 1;
        moveThreePoint(threePointNum);
        $('#threePointTxtGroup').delay(300).fadeIn();
    });

    $threePointOrder.click(function () {
        threePointNum = $(this).index();
        moveThreePoint(threePointNum);
        $('#threePointTxtGroup').delay(300).fadeIn();
    });

    $('.close').click(function () {
        var $this = $(this);
        $this.parents().find('.txtGroup').fadeOut();
    });

    /*影片*/
    var videoNum = 0;
    var videoWidth = $('.videoTxt').outerWidth();
    $('#videoCase .order li').click(function () {
        videoNum = $(this).index();
        move = videoNum * videoWidth;
        $('.videoContainer').stop().animate({ left: -move });
        $('#videoCase .order li').removeClass('active').eq(videoNum).addClass('active');
    });

    // 輪播
    new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            disableOnInteraction: false,
            delay: 5000
        },
        pagination: {
            el: '.case-pagination',
            clickable: true,
            bulletClass: 'case-pagination-bullet',
            bulletActiveClass: 'case-pagination-bullet-active'
        }
    });
}
//# sourceMappingURL=m_smartFactory.js.map
