import {resetSlider} from './photos-effect.js';
import {isEscEvent} from './utils.js';
import {onFieldFocus} from './valid-hashtags.js';




const uploadField = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const closeUploadButton = document.querySelector('#upload-cancel');
const onFocusText = document.querySelector('.img-upload__text');



// Открытие поп-ап
uploadField.addEventListener('change', function(){
  resetSlider();
  document.addEventListener('keydown', onEscKeyDown);
<<<<<<< HEAD
  onFocusText.addEventListener('focusin', onFieldFocus);
=======
  document.body.classList.add('modal-open');
  imgUpload.classList.remove('hidden');
>>>>>>> module6-task1
});




//закрытие поп-ап
closeUploadButton.addEventListener('click', function(){
  document.removeEventListener('keydown', onEscKeyDown);
  onFocusText.removeEventListener('focusin', onFieldFocus);
  closeImg();
});

const closeImg = function(){
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const onEscKeyDown = function(evt){
  if(isEscEvent(evt)){
    closeImg();
  }
};
