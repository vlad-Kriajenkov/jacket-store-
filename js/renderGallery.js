import { productItems } from './product-jacket-items.js';
 

const galleryContainer = document.querySelector('.product__container');
const modalGalleryContainer = document.querySelector('.modal-gallery');

galleryContainer.addEventListener('click', listnerClickOfProductCart);

function listnerClickOfProductCart(e) {
  const keyProductCard = e.target.dataset.key;
  const newproductItems = productItems.filter(el => {
    if (keyProductCard === el.ountification) {
      return el;
    }
  });
  
  newproductItems.map(({ ountification, preview, description, name, listsPhoto }) => {
    const photoElements = listsPhoto.map(el => {
      return `
        <div class="modal-gallery__photo modal-gallery__photo--small">
            <img src="${el}" alt="${description}" />
            </div> 
      `;
    }).join('');

    modalGalleryContainer.innerHTML = photoElements;
    $(modalGalleryContainer).slick({
      // Ваши настройки карусели
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
  });
}
