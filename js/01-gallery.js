import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(makeGalleryCard);

const galleryEl = document.querySelector('.gallery');

const makeGalleryCard = ({preview, original, description} = {}) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
    </li>
    `;
  };

  const galleryCard = galleryItems.map((el) => makeGalleryCard(el));

  galleryEl.insertAdjacentHTML('beforeend', galleryCard.join(''));

const onGallryImgClick = (event) => {
    event.preventDefault();
    const {target} = event;

    if(target.nodeName !== 'IMG') {
        return;
    }

const largeImgSrc = target.dataset.source;
const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" width="800" height="600">
`)

instance.show()

document.addEventListener("keydown", event => {
    if(event.code === "Escape")
    instance.close();
  });
};

galleryEl.addEventListener('click', onGallryImgClick);




