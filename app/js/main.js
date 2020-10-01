$(document).ready(function () {
    $('.featured-products__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slider-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button class="slider-arrow slick-next"><span class="lnr lnr-chevron-right "></span></button>',
    });

});
$('.follower-feed__catalogue').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="catalogue-arrow prev-arrow"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="catalogue-arrow next-arrow"><span class="lnr lnr-chevron-right"></span></button>',
});

$('.testimonials__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    //  prevArrow:
    //      '<button class="testimonials-arrow prev-arrow"><span class="lnr lnr-chevron-left"></span></button>',
    //      nextArrow:
    //      '<button class="testimonials-arrow next-arrow"><span class="lnr lnr-chevron-right"></span></button>',
    //  
});


var mixer = mixitup('.new-release__catalogue');



//     jQuery(".rate-stars").rateYo({
//         rating: 5,
// starWidth: '15px',
// normalFill: 'transparent',
// ratedFillBorder: '#ffc000',
//  rating: 4.5,
//      halfStar: true

//     });