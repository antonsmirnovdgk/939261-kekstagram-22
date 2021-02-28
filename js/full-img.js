import {arrayOfObjectsPhoto} from './data.js';
import {isEscEvent} from './utils.js';

const parrentContainer = document.querySelector('.pictures');
const fullImg = document.querySelector('.big-picture');
const closedButton = fullImg.querySelector('.big-picture__cancel');
const divWithImg = fullImg.querySelector('.big-picture__img');
const likesCount = fullImg.querySelector('.social__comment-count');
const loaderComment = fullImg.querySelector('.comments-loader');
const likes = fullImg.querySelector('.likes-count');
const socialImg = document.querySelectorAll('.social__picture');
const commentText = document.querySelectorAll('.social__text');
const description = document.querySelector('.social__caption')




const onParentContainerClick = function(evt){
  if(evt.target.parentNode.matches('a')) {
    const objectOfSmallPic = arrayOfObjectsPhoto.find((item) => +item.id === +evt.target.parentNode.id);
    fillBigPucture(objectOfSmallPic);
    showBigPicture();
  }
}


const showBigPicture = function(){
  document.body.classList.add('modal-open');
  fullImg.classList.remove('hidden');
  loaderComment.classList.add('hidden');
  likesCount.classList.add('hidden');

  document.addEventListener('keydown', onEscKeyDown);
}

const fillBigPucture = function(object){
  divWithImg.childNodes[1].src = object.url;
  likes.textContent = object.likes;
  description.textContent = object.description;



  commentText.forEach((item, i) => {
    item.textContent = object.comments[i].message;
  });

  socialImg.forEach((item, i) => {
    item.alt = object.comments[i].name;
    item.src = object.comments[i].avatar
  });


const onEscKeyDown = function(evt){
  if(isEscEvent(evt)){
    closeBigImg();
  }
}

const closeBigImg = function(){
  fullImg.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

closedButton.addEventListener('click', function(){
  document.removeEventListener('keydown', onEscKeyDown);
  closeBigImg();
});


parrentContainer.addEventListener('click', onParentContainerClick)
