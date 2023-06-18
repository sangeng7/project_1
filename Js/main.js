$(document).ready(function() {
    $('#carousel1').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout: 2000, 
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
    $('#carousel2').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
  });

  $(window).scroll(function(){
    if($(this).scrollTop()>250){
        $(".nav-bg").addClass("sticky")
        $('.logo-2').show()
        $('.logo-1').hide()
        $('.scrollTop').show()

    }
    else{
        $(".nav-bg").removeClass("sticky")
        $('.logo-2').hide()
        $('.logo-1').show()
        $('.scrollTop').hide()
    }
})



