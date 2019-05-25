new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        disableOnInteraction: false
    },
    pagination: {
        el: '.banner-pagination',
        clickable: true,
        bulletClass: 'banner-pagination-bullet',
        bulletActiveClass: 'banner-pagination-bullet-active'
    }
});