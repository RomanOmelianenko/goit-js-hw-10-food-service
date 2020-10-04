import itemsTemplate from '../templates/gallery-items.hbs';
import menu from '../menu.json';

// const markup = itemsTemplate(menu);
const galleryMenuRef = document.querySelector('.js-menu');
const markup = menu.map(el => itemsTemplate(el)).join('');
galleryMenuRef.insertAdjacentHTML('beforeend', markup);
// galleryMenuRef.insertAdjacentHTML('beforeend', markup);
