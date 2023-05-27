function scrollHeader() {
    const header = document.getElementById("header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);


var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".room-slider", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".gallery-slider", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


const accordionItems = document.querySelectorAll(".faq__content-item");

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".header");
    accordionHeader.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-open");
        toggleItem(item);
        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});
const toggleItem = (item) => {
    const accordionContent = item.querySelector(".desc");
    if (accordionContent.style.height != 0) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion-open");
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 33 + "px";
        accordionContent.style.padding = "1rem 1rem";

        item.classList.add("accordion-open");
    }
};


const nav_open = document.getElementById("menu-bars");
const nav_close = document.getElementById("menu-close");
const nav_list = document.querySelector(".header #nav_list");

nav_open.onclick = () => {
    nav_open.classList.toggle('fa-times');
    nav_list.classList.toggle('show-menu');
}
window.onscroll = () => {
    nav_open.classList.remove('fa-times');
    nav_list.classList.remove('show-menu');
}