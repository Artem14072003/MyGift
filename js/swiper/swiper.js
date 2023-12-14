"use strict";

// Swiper 1 (Thumb)
const swiperThumb = new Swiper('.gift__swiper--thumb', {
    spaceBetween: 16,
    slidesPerView: 6,
    freeMode: true,
});

// Swiper 2 (Main)
const swiperMain = new Swiper('.gift__swiper--card', {
    spaceBetween: 20,
    thumbs: {
        swiper: swiperThumb
    }
});
