// =============================================================================
// function
// =============================================================================
/**
 * jquery ajax
 * @param {string} method
 * @param {string} url
 * @param {*} data
 * @param {function} callback
 * @returns {object} deferred
 */
function ajaxSensor(method, url, data, callback) {
    return $.ajax({
        method,
        url,
        data
    })
        .done(response => {
            if (callback) {
                // json字串處理
                if (typeof response === 'string') {
                    response = JSON.parse(response);
                }
                callback(response);
            }
        })
        .fail(() => {
            if (callback) {
                setTimeout(() => {
                    alert('系統忙碌中，請稍後再試。');
                }, 600);
            }
        });
}

// =============================================================================
// event
// =============================================================================
// 錨點連結
$(document).on('click', '.js-nav', function(event) {
    event.preventDefault();
    let target = $(this).attr('href');
    let offset = $(this).data('offset');
    let targetPos = $(target).offset().top;
    let finalPos = offset ? targetPos - offset : targetPos;
    $('html, body').animate({ scrollTop: finalPos });
});
