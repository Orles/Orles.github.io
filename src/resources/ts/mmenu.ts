import Menu from 'mmenu-js';

const MENU_SELECTOR = '.js-mobile-menu';
const TRIGGER_SELECTOR = '.js-mobile-menu-trigger';

export function initMmenu() {
  const menuElement = document.querySelector<HTMLElement>(MENU_SELECTOR);
  const triggerElement = document.querySelector<HTMLElement>(TRIGGER_SELECTOR);
  if (!menuElement || !triggerElement) return;

  const menu = new Menu(
    menuElement,
    {
      navbar: {
        title: 'Меню',
      },
      offCanvas: {
        position: 'right',
      },
    },
    {
      language: 'ru',
      offCanvas: {
        page: {
          selector: '.js-page',
        },
      },
    },
  );

  triggerElement.addEventListener('click', () => menu.open());

  // Закрываем меню после выбора пункта, иначе страница остаётся сдвинутой
  menuElement.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a, .js-print')) menu.close();
  });
}
