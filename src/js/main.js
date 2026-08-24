import '../css/style.css';
import Alpine from 'alpinejs';
import { LPAccordion } from './components/LPAccordion';

// 将来的にAPIフェッチに簡単に差し替えられるよう、データ取得処理を関数化
async function fetchCards() {
  try {
    // 開発中はローカルのJSONを非同期ロード
    // 本番のAPI連携時は、以下のコメントアウトを解除してURLを書き換えるだけで動作します
    // const response = await fetch('https://api.example.com/cards');
    // return await response.json();

    const data = await import('../data/cards.json');
    return data.default;
  } catch (error) {
    console.error('Failed to load card data', error);
    return [];
  }
}

// Alpine.js のコンポーネントデータを登録
document.addEventListener('alpine:init', () => {
  Alpine.data('cardApp', () => ({
    cards: [],
    isLoading: true,
    async init() {
      this.cards = await fetchCards();
      this.isLoading = false;
    }
  }));
});

window.Alpine = Alpine;
Alpine.start();

new LPAccordion();

// console.log('🚀 Vite + EJS + Tailwind CSS + Alpine.js (Self-hosted) Initialized!');
