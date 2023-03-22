import { jacketArr, giletArr, giletLongArr, tracksuitArr } from './product-jacket-items.js';

const category = localStorage.getItem('category');
const galleryContainer = document.querySelector('.product__container');

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

const cardsMarkup = ceateImgCardsMarkup(json);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function ceateImgCardsMarkup(productItems) {
  return json
    .map(({ ountification, preview, description, name }) => {
      return `
        <div class="card-product">
            <div class="card-product__wrpa-photo">
                <img class="card-product__photo" src="${preview}" alt="${description}">
                <div class="card-product__sale">SALE -30%</div>
            </div>
            <div class="card-product__wrpa-info">
                <h2 class="second-title card-product__second-title">${name}</h2>
                <div class="card-price">
                    <div class="card-price__new">990 грн</div>
                    <div class="card-price__old">1415 грн</div>
                </div>
                <button class="card-btn" data-key="${ountification}">Подробнее</button>
            </div>
        </div>
        `;
    })
    .join('');
}

// localStorage.clear();
