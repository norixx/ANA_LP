import '../css/style.css';
import Alpine from 'alpinejs';
import { planList } from './alpine/planList';
import { LPAccordion } from './components/LPAccordion';

window.Alpine = Alpine;
Alpine.data('planList', planList);
Alpine.start();

new LPAccordion();

