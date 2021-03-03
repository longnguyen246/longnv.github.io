$(document).ready(function () {
    "use strict";
    $(".hamburger").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('#toggle-menu').toggleClass('active');
        $('.menu').toggleClass('active');
        $('.sub-menu').hide();

    });

    var e = document.getElementById('js-slider');

    if (e) {
        var d = window.innerHeight;
        document.getElementById('top_info').style.height = d + "px"
    }

    loading();
    set_slide();
});

function loading() {
    var $loading = $('#loading');

    setTimeout(function () {
        $loading.addClass('loading-hide');
    }, 2000);
}

function set_slide() {
    $('.mainvisual')
        .on('init', function () {
            if ($('.slide').length > 1) {
                $('.slick-slide[data-slick-index="0"]').addClass('moving');
            }
        })
        .slick({
            autoplay: true,
            speed: 3500,
            autoplaySpeed: 3500,
            pauseOnFocus: false,
            pauseOnHover: false,
            draggable: false,
            slidesToShow: 1,
            dots: false,
            arrows: false,
            infinite: true,
            fade: true,
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            if ($('.slide').length > 1) {
                var slide_num = $('.slide').length;
                $('.slide[data-slick-index="' + (currentSlide - 1) + '"]').removeClass('moving');
                $('.slide[data-slick-index="' + nextSlide + '"]').addClass('moving');
                if (currentSlide == 0) {
                    $('.slide[data-slick-index="' + (slide_num - 1) + '"]').removeClass('moving');
                }
            }
        });
}
