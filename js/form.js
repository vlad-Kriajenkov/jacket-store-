import { jacketArr, giletArr, giletLongArr, tracksuitArr } from './product-jacket-items.js';

const category = localStorage.getItem('category');
const galleryContainer = document.querySelector('.product__container');
const modalInfoContainer = document.querySelector('.modal-info');
const modalAllContainer = document.querySelector('.bg-modal');
const bodyEl = document.querySelector('body');
const btnCloseModal = document.querySelector('[data-closeModal]')
 
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
btnCloseModal.addEventListener('click', onCloseModal)
function listnerClickOfProductCart(e) { 
  if (e.target.className !== 'card-btn') {
    return;
  }

  modalAllContainer.style.transform = 'translateY(0%)';
  bodyEl.classList.add('modal-open')

  const keyProductCard = e.target.dataset.key; 
  const newproductItems = json
    .map(({ ountification, preview, description, name }) => {
      if (keyProductCard === ountification) {
        return `
                <h2 class="second-title modal-info__second-title">${name}</h2>
        <p class="text modal-info__text">82% хлопка 18% эластан</p>
        <div class="modal-price">
          <div class="modal-price__new">990 грн.</div>
          <div class="modal-price__old">1415 грн.</div>
        </div>
        <form id="form" class="modal-form">
          <div class="modal-form__labe" for="size">Выберите размер</div>
          <select name="size" class="modal-form__select" id="size" data-size="">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>

          <div class="modal-form__labe" for="">Ваши ФИО</div>
          <input
            type="text"
            name="name"
            class="modal-form__input"
            placeholder="Белова Анастасия Сергеевна"
          />

          <div class="modal-form__labe" for="">Ваш номер телефона</div>
          <input
            type="tel"
            name="phone"
            class="modal-form__input"
            placeholder="+380 (99) 999-99-99 "
          />
          <input type="hidden" name="comment" value="">
          <input type="hidden" name="product_id" value="">
          <button class="modal-form__btn" type="submit">Заказать</button>
        </form>
        <p class="text modal-form__text-info">
          Костюм, в котором Вы всегда будете выглядеть стильно, а чувствовать себя максимально
          комфортно! Состоит из: оригинального худи с большим капюшоном и удобным карманом,
          джоггеров свободного кроя.
        </p>
        <p class="text modal-form__text-info">
          Мы используем материал "трёхнитка петля" с процентным соотношением 82% хлопок, 18%
          эластан. Это позволяет ткани оставаться максимально натуральной, быть стойкой к
          деформациям и хорошо тянуться.
        </p>
        `;
      }
    })
    .join('');
  modalInfoContainer.innerHTML = newproductItems;
}

function onCloseModal(e) {
  modalAllContainer.style.transform = 'translateY(-100%)';
  bodyEl.classList.remove('modal-open')
  modalInfoContainer.innerHTML = '';
}