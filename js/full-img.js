import {isEscEvent} from './utils.js';
import {arrayOfPhotos} from './create-photo.js';

const parrentContainerElement = document.querySelector('.pictures');
const fullImgElement = document.querySelector('.big-picture');
const closedButtonElement = fullImgElement.querySelector('.big-picture__cancel');
const bigImgElement = fullImgElement.querySelector('.big-picture__img');
const commentCountElement = fullImgElement.querySelector('.social__comment-count');
const loaderCommentElement = fullImgElement.querySelector('.comments-loader');
const likesCountElement = fullImgElement.querySelector('.likes-count');
const descriptionElement = document.querySelector('.social__caption');
const commentsCount = fullImgElement.querySelector('.comments-count');
const pictureSocialElement = fullImgElement.querySelector('.comments-loader');
const COUNTER_STEP = 5;
let commetsQty = 5;
let loaderComment;

const onParentContainerClick = (evt) => {
  if(evt.target.parentNode.matches('a')) {
    const objectOfSmallPic = arrayOfPhotos.find((item) => +item.id === +evt.target.parentNode.id);
    fillBigPucture(objectOfSmallPic);
    showBigPicture();
  }
}

const createComment = (object) => {
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

const showBigPicture = () => {
  document.body.classList.add('modal-open');
  fullImgElement.classList.remove('hidden');
  document.addEventListener('keydown', onEscKeyDown);

};

const fillBigPucture = (object) => {
  const socialComments = fullImgElement.querySelector('.social__comments');

  bigImgElement.childNodes[1].src = object.url;
  likesCountElement.textContent = object.likes;
  descriptionElement.textContent = object.description;
  commentsCount.textContent = object.comments.length;

  const commentsArray = object.comments.map((currentValue) => {
    return createComment(currentValue)
  });

  //Загрузка комментариев
  loaderCommentElement.classList.add('hidden');

  if(commentsArray.length > commetsQty) {
    loaderCommentElement.classList.remove('hidden');
  }

  socialComments.innerHTML = commentsArray.slice(0, commetsQty).join('');
  commentCountElement.innerHTML = `${commetsQty} из ${commentsArray.length} комментариев`;

  loaderComment = () => {
    commetsQty = commetsQty + COUNTER_STEP;
    commentCountElement.innerHTML = `${commetsQty} из ${commentsArray.length} комментариев`;
    socialComments.innerHTML = commentsArray.slice(0, commetsQty).join('');

    if(commentsArray.length < commetsQty) {
      loaderCommentElement.classList.add('hidden');
      commentCountElement.innerHTML = `${commentsArray.length} из ${commentsArray.length} комментариев`;
    }
  }

  pictureSocialElement.addEventListener('click', loaderComment);
};

const onEscKeyDown = (evt) => {
  if(isEscEvent(evt)){
    closeBigImg();
  }
};

const closeBigImg = () => {
  fullImgElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pictureSocialElement.removeEventListener('click', loaderComment);
  commetsQty = 5;
};

closedButtonElement.addEventListener('click', () => {
  document.removeEventListener('keydown', onEscKeyDown);
  closeBigImg();
});


parrentContainerElement.addEventListener('click', onParentContainerClick);
