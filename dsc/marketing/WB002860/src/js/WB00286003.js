// 點擊導覽列連結
$(document).on('click', '.js-nav', function(event) {
    event.preventDefault();
    if (!$(this).hasClass('active')) {
        var target = $(this).attr('href');

        // 取得移動目標位置
        let targetPos = $(target).offset().top;

        // 移動頁面
        $('html, body').animate({ scrollTop: targetPos });
    }
});