$(document).ready(function(){
    // Sticky Header For Header Section
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 20){
            $('#header_area').addClass('sticky');
        }else{
            $('#header_area').removeClass('sticky');
        }
    })

    // Magnific Popup For Project Section
    $('.project-popup').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
          }
    })
    
    // Slick Slider For  Testimonial Sectiono
    $('.testimonial-slider').slick({
        arrows: false,
        dots: true
    });

})