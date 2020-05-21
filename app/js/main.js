$(function(){

    $(".rate-star").rateYo({
        rating: 4.6,
        readOnly: true,
        starWidth: "12px",
    });

    $('.product__slider-inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
    });

    var mixer = mixitup('.products__inner-box');


    
});