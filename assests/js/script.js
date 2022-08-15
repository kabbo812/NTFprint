$(document).ready(function(){

    
    // Mobile Menu
    $('.mobile-menu').click(function(){
        $('.header-menu ul').slideToggle()
    });





    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        center: true,
        items:4,
        loop:true,
        autoplay:true,
        margin:20,
        nav:true,
        dots:false,
        autoplayTimeout:1500,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            700:{
                items:3
            },
            900:{
                items:4
            }
        }
    });
    
    $('.popup').magnificPopup({
        type:'image',
        gallery:{
        enabled:true,
        zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out'
        }
    }
});

});
    // Pay Option
    $('.pay-item').owlCarousel({
        center:false,
        items:7,
        loop:true,
        autoplay:true,
        autoplayTimeout:1500,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            400:{
                items:3
            },
            700:{
                items:4
            },
            1000:{
                items:7
            }
        }
    })

    // $(document).ready(function(){
    //     $(".mobile-menu a").click(function(){
    //       $(".header-menu ul").slideToggle("slow");
    //     });
    //   })