var $body = $('body');

// 如果滑鼠進入動畫範圍時移除動畫
$('#angle1')
    .on('mouseenter', function () {
        if (!$body.hasClass('active')) {
            $body.removeClass('animated');
        }
    })
    .on('mouseleave', function () {
        if (!$body.hasClass('active')) {
            $body.addClass('animated');
        }
    });

$('#angle1').on('click', function () {
    $body.removeClass('animated').addClass('active');
    setTimeout(() => {
        initFirework();
        $(this).off('click');
    }, 1000);
});

// add/remove canvas when resize window
// var resizeWidth = function (pMatchMedia) {
//     if (pMatchMedia.matches) {
//         $('canvas').remove();
//     } else if ($body.hasClass('active')) {
//         initFirework();
//     }
// };
// var mm = window.matchMedia("(max-width: 768px)");
// mm.addListener(resizeWidth);
// resizeWidth(mm);

