export class LPAccordion {
  #clsOpen = 'is-open';

  constructor(rootSelector = '.ats-root') {
    this.root = document.querySelector(rootSelector);
    this.faq = this.root.querySelector('.js-ats-faq');

    if (!this.root || !this.faq) return;

    this.init();
  }

  init() {
    this.faq.addEventListener('click', this.handleClick);
  }

  handleClick(e) {
    const target = e.target;
    if (!target.classList.contains('js-ats-faq__toggle')) return;

    const item = target.closest('.js-ats-faq__item');
    item.classList.toggle('is-open');

  }

}