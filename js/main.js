$(function(){
    $('.menu_icon').on('click',function(){
        $('.sidebar').css('transform','translateX(0)');
    })
    $('.close_btn').on('click',function(){
        $('.sidebar').css('transform','translateX(100%)');
    })
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});