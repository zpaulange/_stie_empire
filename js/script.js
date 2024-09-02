$(document).ready(function(){

//===menu mobile;
$('.js-btn-menu').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__center').toggleClass('active');
});

//===header fixed
$(window).scroll(function(){
    if($(window).scrollTop()>80){
        $('.header').addClass('header-fixed');
    }else{
        $('.header').removeClass('header-fixed');
    }
    
});

//====slick
//slide firstface
$('.js-slide-firstface').slick({
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    prevArrow:'<span class="mdi mdi-chevron-left"></span>',
    nextArrow:'<span class="mdi mdi-chevron-right"></span>',
});
//slide actuality
$('.js-slide-actuality').slick({
    dots:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    prevArrow:'<span class="btn-actuality-left"><img src="images/arrow-l1.svg" alt="btn-left"/></span>',
    nextArrow:'<span class="btn-actuality-right"><img src="images/arrow-r1.svg"  alt="btn-right"/></span>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
    ],
});
//slide events
$('.js-slide-events').slick({
    dots:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    prevArrow:'<span class="mdi mdi-arrow-left"></span>',
    nextArrow:'<span class="mdi mdi-arrow-right"></span>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 442,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
    ],
});
//slide country
$('.js-slide-country').slick({
    dots:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 385,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
    ],
});
//current event slide
$('.js-slide-currentEnvent').slick({
    dots:true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0px",
    speed: 500,

});

//sidebar
$('.js_btn-sidebar').on('click', function(e){
    e.preventDefault();
    $('.sidebar').toggleClass('active');
});

//====aos
AOS.init();

});