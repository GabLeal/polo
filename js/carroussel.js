$('.carroussel-resposive').slick({
    arrows: true,
    dots: true,
    infinite: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });