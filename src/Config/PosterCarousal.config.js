const settings = {
    infinite: true,
    speed: 1300,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    InitialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  };

  export default settings;