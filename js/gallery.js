import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = ceateImgCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);
galleryContainer.addEventListener("click", listnerClickOfImg);

function ceateImgCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `

      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${original}"
            alt="${description}"
          />
        </a>
      </div>

      
        `;
    })
    .join("");
}

function listnerClickOfImg(e) {
  e.preventDefault();
  const isGalleryImgEl = e.target.classList.contains("gallery__image");

  if (!isGalleryImgEl) {
    return;
  }

  const srcImgEl = e.target.src;
  const altImgEl = e.target.alt;
  const instance = basicLightbox.create(`
  <img src="${srcImgEl}" alt="${altImgEl}" width="800" height="600">
`);

  instance.show();
}
