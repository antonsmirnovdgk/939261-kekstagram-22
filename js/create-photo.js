// import {arrayOfObjectsPhoto} from './data.js';
import {getData} from  './fetch.js';
import {isEscEvent} from './utils.js';


const picture_container = document.querySelector('.pictures');
const similar_template = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();
const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const mainElement = document.querySelector('main');
const errMessageElement = document.querySelector('#error').content.querySelector('.error');



const createPhotos = function(photos) {

  photos.forEach((item) => {
    const picture_template = similar_template.cloneNode(true);
    picture_template.querySelector('.picture__img').src = item.url;
    picture_template.querySelector('.picture__likes').textContent = item.likes;
    picture_template.querySelector('.picture__comments').textContent = item.message;
    picture_template.id = item.id;

    fragment.appendChild(picture_template);
  });

  picture_container.appendChild(fragment);

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

    if (evt.target.className === 'error' ||  evt.target.className === 'error__button') {

      successMessageTemplate.classList.add('hidden')
      document.removeEventListener('keydown', onEscKeyDown);
      document.removeEventListener('click', onDocumentClick);
    }
  }

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

  document.addEventListener('keydown', onEscKeyDown);
  document.addEventListener('click', onDocumentClick);

  const onDocumentClick = function(evt) {

    if (evt.target.className === 'error' || evt.target.className === 'error__button') {
      errMessageTemplate.classList.add('hidden')
      document.removeEventListener('keydown', onEscKeyDown);
      document.removeEventListener('click', onDocumentClick);
    }
  }

  const onErrButtonClose = function(){
    errMessageTemplate.classList.add('hidden');
    document.removeEventListener('keydown', onEscKeyDown);
    document.removeEventListener('click', onDocumentClick);
  }
}

getData(createPhotos);

export {createSuccessMessage, createErrMessage};
