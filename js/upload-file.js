import {resetSlider} from './photos-effect.js';
import {isEscEvent} from './utils.js';
import {onFieldFocus} from './valid-hashtags.js';


const uploadFieldElement = document.querySelector('#upload-file');
const imgUploadElement = document.querySelector('.img-upload__overlay');
const closeUploadButtonElement = document.querySelector('#upload-cancel');
const allTextElement = document.querySelector('.img-upload__text');


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
  document.removeEventListener('keydown', onEscKeyDown);
  closeImg();
});

const closeImg = function(){
  imgUploadElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const onEscKeyDown = function(evt){
  if(isEscEvent(evt)){
    closeImg();
  }
};
