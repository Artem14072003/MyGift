"use strict";

// Swiper 1 (Thumb)
const swiperThumb = new Swiper('.gift__swiper--thumb', {
    spaceBetween: 16,
    slidesPerView: 6,
    freeMode: true,
    breakpoints: {
        320: {
            slidesPerView: 5,
            spaceBetween: 12,
        },
        1141: {
            spaceBetween: 16,
            slidesPerView: 6,
        }
    }
});

// Swiper 2 (Main)
const swiperMain = new Swiper('.gift__swiper--card', {
    spaceBetween: 20,
    thumbs: {
        swiper: swiperThumb
    }
});
