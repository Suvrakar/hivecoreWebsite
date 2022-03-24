$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  // autoplay: true,
  centerMode: true,
  centerPadding: "40%",
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  verticalSwiping: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: true,
        // centerMode: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        vertical: true,
        // centerMode: true,
      }
    },
    {
      breakpoint: 580,
      settings: {
        vertical: true,
        slidesToShow: 3,
        // centerMode: true,
      }
    },
    {
      breakpoint: 380,
      settings: {
        vertical: true,
        slidesToShow: 2,
        centerMode: true,
      }
    }
  ]
});


$(document).ready(function() {
  //var slider = $('.slider');
  var slider=document.getElementById("myRange")
    $('input[type="range"]').on('input', function(){
      var position = document.getElementById("myRange").value;
     slider.slick('slickGoTo', position)
     console.log(position)
    }); 
  
    slider.slick({
        // dots: true,
        infinite: false,
        centerMode: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                // centerMode: true,

            }

        }]
    });


});