import {sendData} from './fetch.js';
import {resetSlider} from './photos-effect.js';
import {isEscEvent} from './utils.js';
import {fieldHashtagElement} from './valid-hashtags.js';
import {createSuccessMessage, createErrMessage} from './create-photo.js'

const uploadFieldElement = document.querySelector('#upload-file');
const imgUploadElement = document.querySelector('.img-upload__overlay');
const closeUploadButtonElement = document.querySelector('#upload-cancel');
const allTextElement = document.querySelector('.img-upload__text');
const uploadFormElement = document.querySelector('.img-upload__form');
const commentFieldElement = document.querySelector('.text__description');

// Открытие поп-ап
uploadFieldElement.addEventListener('change', () => {
  resetSlider();
  document.addEventListener('keydown', onEscKeyDown);
  allTextElement.addEventListener('focusin', onFieldFocus);
  document.body.classList.add('modal-open');
  imgUploadElement.classList.remove('hidden');
});

//закрытие поп-ап
closeUploadButtonElement.addEventListener('click', () => {
  closeImg();
});

//функция сброса настроек поп-ап окна
const resetPopUp = () => {
  fieldHashtagElement.value = '';
  commentFieldElement.value = '';
}

const closeImg = () => {
  resetSlider();
  resetPopUp();
  imgUploadElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  uploadFieldElement.value = '';
}

const onEscKeyDown = (evt) => {
  if(isEscEvent(evt)){
    closeImg();
  }
};

//запрет закрытия поп-ап окна при фокусе на текстовом блоке
const onFieldFocus = (evt) => {

  evt.target.addEventListener('keydown', (evt) => {

    if(isEscEvent(evt)) {
      evt.preventDefault();
      evt.stopPropagation();
    }
  });
};

//Отправка файлов на сервер
const onUploadFormSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  sendData(createSuccessMessage, createErrMessage, formData);
  closeImg();
}

uploadFormElement.addEventListener('submit', onUploadFormSubmit)
