// import {arrayOfObjectsPhoto} from './data.js';
import {isEscEvent} from './utils.js';
import {arrayOfPhotos} from './create-photo.js';



const parrentContainerElement = document.querySelector('.pictures');
const fullImgElement = document.querySelector('.big-picture');
const closedButtonElement = fullImgElement.querySelector('.big-picture__cancel');
const bigImgElement = fullImgElement.querySelector('.big-picture__img');
const commentCountElement = fullImgElement.querySelector('.social__comment-count');
const loaderCommentElement = fullImgElement.querySelector('.comments-loader');
const likesCountElement = fullImgElement.querySelector('.likes-count');
const socialImgElement = document.querySelectorAll('.social__picture');
const commentTextElement = document.querySelectorAll('.social__text');
const descriptionElement = document.querySelector('.social__caption');
const commentsCount = fullImgElement.querySelector('.comments-count');



const onParentContainerClick = function(evt){
  if(evt.target.parentNode.matches('a')) {
    const objectOfSmallPic = arrayOfPhotos.find((item) => +item.id === +evt.target.parentNode.id);
    fillBigPucture(objectOfSmallPic);
    showBigPicture();
  }
}


const createComment = function(object){
  return `<li class="social__comment">
  <img
    class="social__picture"
    src="${object.avatar}"
    alt="${object.name}"
    width="35" height="35">
   <p class="social__text">
   ${object.message}
   </p>
  </li>`
}

const showBigPicture = function(){
  document.body.classList.add('modal-open');
  fullImgElement.classList.remove('hidden');
  // loaderCommentElement.classList.add('hidden');
  // commentCountElement.classList.add('hidden');
  document.addEventListener('keydown', onEscKeyDown);
};

const fillBigPucture = function(object){

  const socialComments = fullImgElement.querySelector('.social__comments');


  bigImgElement.childNodes[1].src = object.url;
  likesCountElement.textContent = object.likes;
  descriptionElement.textContent = object.description;
  commentsCount.textContent = object.comments.length;

  window.console.log(object.comments);


  const commentsArray = object.comments.map(function(currentValue) {
    return createComment(currentValue)
  });

  socialComments.innerHTML = commentsArray.join('');

};


const onEscKeyDown = function(evt){
  if(isEscEvent(evt)){
    closeBigImg();
  }
};

const closeBigImg = function(){
  fullImgElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

closedButtonElement.addEventListener('click', function(){
  document.removeEventListener('keydown', onEscKeyDown);
  closeBigImg();
});

parrentContainerElement.addEventListener('click', onParentContainerClick);
