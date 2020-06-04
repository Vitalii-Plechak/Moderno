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

    $('.js-range-slider').ionRangeSlider({
        type: "double",
        skin: "round",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        grid: false,
        hide_min_max: true,
        prefix: "$",
    });

    $('.icon-th-list').on('click', function(){
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active')
    });

    $('.icon-th-large').on('click', function(){
        $('.product__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active')
    });

    
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
    });

    $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('input[type="file"], select').styler({
        locale: 'en',
            locales: {
            'en': {
                filePlaceholder: 'No File Choosen',
                fileBrowse: 'Choose File',
                fileNumber: 'Selected files: %s',
                selectPlaceholder: 'Select...',
                selectSearchNotFound: 'No matches found',
                selectSearchPlaceholder: 'Search...'
            }
	    },
    });


    var mixer = mixitup('.products__inner-box');


    
});