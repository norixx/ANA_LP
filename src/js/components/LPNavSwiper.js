import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

export class LPNavSwiper {

  constructor(selector = '.js-nav-sales') {
    this.root = document.querySelector('.ats-root');
    if (!this.root) return;

    this.nav = this.root.querySelector(selector);
    this.outer = this.nav?.closest('.js-nav-sales-container');
    if (!this.nav) return;

    this.swiper = this.init();
  }

  init() {
    const searchRoot = this.outer || this.nav; // outerがあればそちらを起点に

    return new Swiper(this.nav, {
      modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      spaceBetween: 8,
      navigation: {
        nextEl: searchRoot.querySelector('.ats-nav-sales__button-next'),
        prevEl: searchRoot.querySelector('.ats-nav-sales__button-prev'),
        enabled: false,
      },
      // pagination: {
      //   el: this.nav.querySelector('.lp-swiper__pagination'),
      //   clickable: true,
      // },
      breakpoints: {
        768: {
          navigation: {
            enabled: true,
          },
        },
        // 1024: { slidesPerView: 3 },
      },
    });
  }
}



