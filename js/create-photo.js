// import {arrayOfObjectsPhoto} from './data.js';
import {getData} from  './fetch.js';
import {isEscEvent} from './utils.js';

const pictureContainer = document.querySelector('.pictures');
const similarTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();
const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const mainElement = document.querySelector('main');
const errMessageElement = document.querySelector('#error').content.querySelector('.error');

const createPhotos = function(photos) {
  photos.forEach((item) => {
    const pictureTemplate = similarTemplate.cloneNode(true);
    pictureTemplate.querySelector('.picture__img').src = item.url;
    pictureTemplate.querySelector('.picture__likes').textContent = item.likes;
    pictureTemplate.querySelector('.picture__comments').textContent = item.message;
    pictureTemplate.id = item.id;
    fragment.appendChild(pictureTemplate);
  });
  pictureContainer.appendChild(fragment);
};

// Шаблон успешной загрузки данных
const createSuccessMessage = function() {
  const successMessageTemplate = successMessageElement.cloneNode(true);
  mainElement.appendChild(successMessageTemplate);

  const onEscKeyDown = function(evt){
    if(isEscEvent(evt)){
      onSuccessButtonClick();
    }
  };

  document.addEventListener('keydown', onEscKeyDown);

  const onDocumentClick = function(evt) {
    const successRegionElement = evt.target.className === 'success';
    const successButtonElement = evt.target.className === 'success__button';

    if (successRegionElement || successButtonElement)  {
      successMessageTemplate.classList.add('hidden')
      document.removeEventListener('keydown', onEscKeyDown);
      document.removeEventListener('click', onDocumentClick);
    }
  };

  document.addEventListener('click', onDocumentClick);

  const onSuccessButtonClick = function(){
    successMessageTemplate.classList.add('hidden');
    document.removeEventListener('keydown', onEscKeyDown);
    document.removeEventListener('click', onDocumentClick);
  }
};

// Шаблон не успешной загрузки данных
const createErrMessage = function() {
  const errMessageTemplate = errMessageElement.cloneNode(true);
  mainElement.appendChild(errMessageTemplate);

  const onEscKeyDown = function(evt){
    if(isEscEvent(evt)){
      onErrButtonClose();
    }
  };

  const onDocumentClick = function(evt) {
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

  const onErrButtonClose = function(){
    errMessageTemplate.classList.add('hidden');
    document.removeEventListener('keydown', onEscKeyDown);
    document.removeEventListener('click', onDocumentClick);
  }
};

getData(createPhotos);

export {createSuccessMessage, createErrMessage};
