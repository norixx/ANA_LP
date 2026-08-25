export class LPAccordion {
  #clsOpen = 'is-open';

  constructor(rootSelector = '.ats-root') {
    this.root = document.querySelector(rootSelector);
    this.faq = this.root.querySelector('.js-ats-faq');

    if (!this.root || !this.faq) return;

    this.init();
  }

  init() {
    this.faq.addEventListener('click', this.#handleClick);
  }

  #handleClick = (e) => {
    const target = e.target;
    if (!target.classList.contains('js-ats-faq__toggle')) return;

    const item = target.closest('.js-ats-faq__item');
    const answer = item.querySelector('.js-ats-faq__a');
    const isOpened = item.classList.contains(this.#clsOpen);
    console.log(isOpened)
    item.classList.toggle(this.#clsOpen, !isOpened);
    target.setAttribute('aria-expanded', !isOpened);
    target.setAttribute('aria-label', !isOpened ? '回答を閉じる' : '回答を開く');
    answer.setAttribute('aria-hidden', isOpened);

  }

}