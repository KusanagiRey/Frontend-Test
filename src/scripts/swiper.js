const swiper = new Swiper('.swiper-speecker',{
    slidesPerView: 2,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints:{
        1240:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
            pagination:{
                dynamicBullets: true
            },
        }
    }
});

const swiperPhoto = new Swiper('.swiper-second',{
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: false,
    },
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique'
    },
    breakpoints:{
        1240: {
            slidesPerView: 4,
            grid: {
                rows: 4,
            },
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 38,
            grid: {
                rows: 2,
            },
        },
        320: {
            slidesPerView: 1,
            grid: {
                rows: 1,
            },
            pagination:{
                dynamicBullets: true
            },
        },
    },
});