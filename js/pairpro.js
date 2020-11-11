var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides : true,
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            speed: 3000,
            autoplay: {
            delay: 8000,
            disableOnInteraction: true
  },
        });
