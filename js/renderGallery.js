import { jacketArr, giletArr, giletLongArr, tracksuitArr } from './product-jacket-items.js';

const galleryContainer = document.querySelector('.product__container');
const modalGalleryContainer = document.querySelector('.modal-gallery');
const category = localStorage.getItem('category');

let json = [] ?? productItems;

switch (category) {
  case 'jacket':
    json = jacketArr;
    break;
  case 'gilet':
    json = giletArr;
    break;
  case 'giletLong':
    json = giletLongArr;
    break;
  case 'tracksuit':
    json = tracksuitArr;
    break;
  default:
    json = jacketArr;
    break;
}

galleryContainer.addEventListener('click', listnerClickOfProductCart);

function listnerClickOfProductCart(e) {
  const keyProductCard = e.target.dataset.key;
  const newproductItems = json.filter(el => {
    if (keyProductCard === el.ountification) {
      return el;
    }
  });

  newproductItems.map(({ ountification, preview, description, name, listsPhoto }) => {
    const photoElements = listsPhoto
      .map(el => {
        return `
        <div class="modal-gallery__photo modal-gallery__photo--small">
            <img src="${el}" alt="${description}" />
            </div> 
      `;
      })
      .join('');

    modalGalleryContainer.innerHTML = photoElements;
    $(modalGalleryContainer).slick({
      // Ваши настройки карусели
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    });
  });
}
