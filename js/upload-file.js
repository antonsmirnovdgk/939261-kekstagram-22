import {resetSlider} from './photos-effect.js';

const uploadField = document.querySelector('#upload-file');
const imgUpload = document.querySelector('.img-upload__overlay');
const closeUploadButton = document.querySelector('#upload-cancel');


uploadField.addEventListener('click', function(){
  resetSlider();
  imgUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

closeUploadButton.addEventListener('click', function(){
  imgUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
})

