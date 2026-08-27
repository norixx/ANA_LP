export function planList() {
  return {
    plans: [],
    async fetchPlans() {
      const res = await fetch('/data/plan-domestic.json');
      this.plans = await res.json();

      console.log(this.plans)
    },
    tagClass(tag) {
      const prefix = 'ats-c-plan-card__tag--'
      switch (tag) {
        case 'エコノミー':
          return prefix + 'economy'
        case '人気':
          return prefix + 'popular'
        case '会員限定クーポン対象':
          return prefix + 'members'
        case '特典付きプラン対象ホテル':
          return prefix + 'benefit'
        default:
          return ''
      }
    }
  };
}