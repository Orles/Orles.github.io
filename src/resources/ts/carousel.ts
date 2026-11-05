import type { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import { initSwiper } from './swiper';

const CAROUSEL_SELECTOR = '.js-carousel';

const SWIPER_OPTIONS: SwiperOptions = {
  modules: [Navigation, Pagination],
  slidesPerView: 1.1,
  spaceBetween: 16,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    720: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
};

export function initCarousels() {
  for (const element of document.querySelectorAll<HTMLElement>(
    CAROUSEL_SELECTOR,
  )) {
    initSwiper(element, { ...SWIPER_OPTIONS });
  }
}
