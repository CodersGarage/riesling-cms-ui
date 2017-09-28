jQuery(document).ready(function ($) {
    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu ul.nav.navbar-nav li a").on("click", function () {
        $(".mainmenu .navbar-collapse").removeClass("in");
    });
    /*WoW js Active
    =================*/
    new WOW().init({
        mobile: true,
    });

    /* Scroll to top
    ===================*/
    $.scrollUp({
        scrollText: '<i class="icofont icofont-airplane"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*--------------------------
    Jquery-Mouse-Parallax
    ---------------------------*/
    $(document).on("mousemove", function (e) {
        $('.cloud1').parallax(10, e);
        $('.cloud2').parallax(20, e);
        $('.cloud3').parallax(10, e);
    });

    /* View Slider
    =============================*/
    $('.pro_view_slide').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>']
    });

    /*----------------------
    Product-Slider-Active
    -----------------------*/
    $('.similar_product').owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        navText: ['<i class="icofont icofont-simple-left"></i>', '<i class="icofont icofont-simple-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    /* -------------------
      Dinamyc-Pagination
    ----------------------*/
    $('#pagination-demo').twbsPagination({
        totalPages: 35,
        visiblePages: 7,
        onPageClick: function (event, page) {
            $('#page-content').text('Showing 1 - ' + page + ' of 35');
        }
    });
    /*-------------------------
    Range-Slider-jQuery
    ---------------------------*/
    $(".range-input").asRange({
        range: false,
        limit: true,
        tip: {
            active: 'onMove'
        }
    });
}(jQuery));
/*--------------------------
Mega-menu-Jquery
---------------------------*/
jQuery(document).on('click', '.checkout-menu', function (e) {
    e.stopPropagation()
});