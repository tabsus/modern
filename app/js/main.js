$(function () {

   var mixer = mixitup('.products__inner-container');

   $(".rate-star").rateYo({
      rating: 5,
      starWidth: "12px",
      readOnly: true
   });

   $('.product-slider__inner').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: true,
      arrows: false,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 6000
   });

});