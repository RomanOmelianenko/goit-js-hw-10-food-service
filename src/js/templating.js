import itemsTemplate from '../templates/gallery-items.hbs';
import menu from '../menu.json';

const markup = itemsTemplate(menu);
const galleryMenuRef = document.querySelector('.js-menu');
galleryMenuRef.insertAdjacentHTML('beforeend', markup);
