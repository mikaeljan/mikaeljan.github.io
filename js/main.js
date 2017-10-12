$(document).ready(function() {
    //Smooth scrolling feature
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        let target = this.hash;
        let $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1100, 'swing', function () {
            window.location.hash = target;
        });
    });

    //Carousel
    $('#carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });
});