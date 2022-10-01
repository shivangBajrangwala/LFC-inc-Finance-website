$(document).ready(function() {

    $('.our-team-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 2500,
        arrows: true,
        dots: true,
        prevArrow: '<button class="slide-arrow slick-prev"><span>Previous</span></button>',
        nextArrow: '<button class="slide-arrow slick-next"><span>Next</span></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });

    $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        arrows: true,
        dots: true,
        prevArrow: '<button class="slide-arrow slick-prev"><span>Previous</span></button>',
        nextArrow: '<button class="slide-arrow slick-next"><span>Next</span></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    $('.clients-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 2000,
        arrows: false,
        dots: false,
        prevArrow: '<button class="slide-arrow slick-prev"><span>Previous</span></button>',
        nextArrow: '<button class="slide-arrow slick-next"><span>Next</span></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    jQuery(window).on('load resize', function() {
        var window_size = jQuery(window).width();
        if (window_size <= 991) {
            jQuery('.major-service-slider').not('.slick-initialized').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 4000,
                prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
                nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
                responsive: [{
                        breakpoint: 9999,
                        settings: 'unslick',
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                        }
                    }
                ]
            });
        }
    });

    new WOW().init();

    jQuery(window).scroll(function() { // this will work when your window scrolled.
        var height = jQuery(window).scrollTop(); //getting the scrolling height of window
        if (height > 250) {
            jQuery(".site-header").addClass("sticky_head");
        } else {
            jQuery(".site-header").removeClass("sticky_head");
        }
    });

    $(".menu-toggle").click(function() {
        $(".main-navigation").toggleClass("toggled");
    });




});

// Window Load and Resize JS
jQuery(window).on('load resize', function() {

    var window_size = jQuery(window).width();
    if (window_size <= 991) {
        jQuery('body').on('click', '.main-menu-container .sub-service-menu', function() {
            jQuery(this).toggleClass('active-sub-menu');
            jQuery(".main-menu-container .sub-service-menu .sub-menu").slideToggle();
        });
    }
});