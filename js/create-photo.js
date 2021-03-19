/* global _:readonly */
import {getData} from  './fetch.js';
import {isEscEvent} from './utils.js';
import {onFilterButtonClick} from './img-filters.js';

const picturesContainerElement = document.querySelector('.pictures');
const similarTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const fragmentElement = document.createDocumentFragment();
const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const mainElement = document.querySelector('main');
const errMessageElement = document.querySelector('#error').content.querySelector('.error');
const RERENDER_DELAY = 500;

const clearPicturesContainer = () => {
  fragmentElement.innerHTML = '';
  const pictures = picturesContainerElement.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    picture.remove();
  });
}

let arrayOfPhotos = [];

const createPhotos = (photos) => {

  photos.forEach((item) => {
    const pictureTemplate = similarTemplateElement.cloneNode(true);
    pictureTemplate.querySelector('.picture__img').src = item.url;
    pictureTemplate.querySelector('.picture__likes').textContent = item.likes;
    pictureTemplate.querySelector('.picture__comments').textContent = item.message;
    pictureTemplate.id = item.id;
    fragmentElement.appendChild(pictureTemplate);

    arrayOfPhotos.push(item);

  });

  clearPicturesContainer();
  picturesContainerElement.appendChild(fragmentElement);
};


// Шаблон успешной загрузки данных
const createSuccessMessage = () => {
  const successMessageTemplate = successMessageElement.cloneNode(true);
  mainElement.appendChild(successMessageTemplate);

  const onEscKeyDown = (evt) => {
    if(isEscEvent(evt)){
      onSuccessButtonClick();
    }
  };

  document.addEventListener('keydown', onEscKeyDown);

  const onDocumentClick = (evt) => {
    const successRegionElement = evt.target.className === 'success';
    const successButtonElement = evt.target.className === 'success__button';

    if (successRegionElement || successButtonElement)  {
      successMessageTemplate.classList.add('hidden')
      document.removeEventListener('keydown', onEscKeyDown);
      document.removeEventListener('click', onDocumentClick);
    }
  };

  document.addEventListener('click', onDocumentClick);

  const onSuccessButtonClick = () => {
    successMessageTemplate.classList.add('hidden');
    document.removeEventListener('keydown', onEscKeyDown);
    document.removeEventListener('click', onDocumentClick);
  }
};

// Шаблон не успешной загрузки данных
const createErrMessage = () => {
  const errMessageTemplate = errMessageElement.cloneNode(true);
  mainElement.appendChild(errMessageTemplate);

  const onEscKeyDown = (evt) => {
    if(isEscEvent(evt)){
      onErrButtonClose();
    }
  };

  const onDocumentClick = (evt) => {
    const errorRegionElement = evt.target.className === 'error';
    const errorButtonElement = evt.target.className === 'error__button';

    if (errorRegionElement || errorButtonElement)  {
      errMessageTemplate.classList.add('hidden')
      document.removeEventListener('keydown', onEscKeyDown);
      document.removeEventListener('click', onDocumentClick);
    }
  };

  document.addEventListener('keydown', onEscKeyDown);
  document.addEventListener('click', onDocumentClick);

  const onErrButtonClose = () => {
    errMessageTemplate.classList.add('hidden');
    document.removeEventListener('keydown', onEscKeyDown);
    document.removeEventListener('click', onDocumentClick);
  }
};

getData((photos) => {
  createPhotos(photos);
  onFilterButtonClick(photos, _.debounce(createPhotos, RERENDER_DELAY));
});

export {createSuccessMessage, createErrMessage, arrayOfPhotos};
