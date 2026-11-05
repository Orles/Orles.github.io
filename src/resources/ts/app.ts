import { initCarousels } from './carousel';
import { initMmenu } from './mmenu';

const PRINT_BUTTON_SELECTOR = '.js-print';

initCarousels();
initMmenu();

// mmenu перестраивает страницу, и браузер теряет прокрутку к якорю из адреса
if (location.hash) {
  document
    .getElementById(location.hash.slice(1))
    ?.scrollIntoView({ behavior: 'instant' });
}

for (const button of document.querySelectorAll<HTMLButtonElement>(
  PRINT_BUTTON_SELECTOR,
)) {
  button.addEventListener('click', () => window.print());
}
