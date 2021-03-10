import {sendData} from './fetch.js';
import {resetSlider} from './photos-effect.js';
import {isEscEvent} from './utils.js';
import {fieldHashtagElement} from './valid-hashtags.js';
import {createErrMessage} from './create-photo.js';



const uploadFieldElement = document.querySelector('#upload-file');
const imgUploadElement = document.querySelector('.img-upload__overlay');
const closeUploadButtonElement = document.querySelector('#upload-cancel');
const allTextElement = document.querySelector('.img-upload__text');
const uploadFormElement = document.querySelector('.img-upload__form');
const commentFieldElement = document.querySelector('.text__description');



// Открытие поп-ап
uploadFieldElement.addEventListener('change', function(){
  resetSlider();
  document.addEventListener('keydown', onEscKeyDown);
  allTextElement.addEventListener('focusin', onFieldFocus);
  document.body.classList.add('modal-open');
  imgUploadElement.classList.remove('hidden');
});


//закрытие поп-ап
closeUploadButtonElement.addEventListener('click', function(){
  closeImg();
});

const closeImg = function(){
  resetSlider();
  imgUploadElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  fieldHashtagElement.value = '';
  commentFieldElement.value = '';
}

const onEscKeyDown = function(evt){
  if(isEscEvent(evt)){
    closeImg();
  }
};


//запрет закрытия поп-ап окна при фокусе на текстовом блоке
const onFieldFocus = function(evt) {

  evt.target.addEventListener('keydown', function(evt) {

    if(isEscEvent(evt)) {
      evt.preventDefault();
      evt.stopPropagation();
    }
  });
};

//Отправка файлов на сервер

const uploadButton = (onSuccess) => {
  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData (
      () => onSuccess(),
      () => createErrMessage(),
      new FormData(evt.target),
    )
  });
}

uploadButton(closeImg);

