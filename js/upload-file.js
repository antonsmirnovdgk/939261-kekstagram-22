import {resetSlider} from './photos-effect.js';
import {isEscEvent} from './utils.js';


const uploadField = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const closeUploadButton = document.querySelector('#upload-cancel');


uploadField.addEventListener('click', function(){
  resetSlider();
  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEscKeyDown);
});

closeUploadButton.addEventListener('click', function(){
  document.removeEventListener('keydown', onEscKeyDown);
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
