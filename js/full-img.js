import {arrayOfObjectsPhoto} from './data.js'

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




const addSmallPictureClick = function(evt){
  if(evt.target.parentNode.matches('a')) {
    document.body.classList.add('modal-open');
    fullImg.classList.remove('hidden');
    loaderComment.classList.add('hidden');
    likesCount.classList.add('hidden');

    let objectOfSmallPic = arrayOfObjectsPhoto.find((item) => {
      if(+item.id === +evt.target.parentNode.id){
        return item;
      }
    })

    divWithImg.childNodes[1].src = objectOfSmallPic.url;
    likes.innerHTML = objectOfSmallPic.likes;
    description.textContent = objectOfSmallPic.description;


    for(let i = 0; i < commentText.length; i++){
      commentText[i].textContent = objectOfSmallPic.comments[i].message;
    }

    for(let i = 0; i < socialImg.length; i++){
      socialImg[i].alt = objectOfSmallPic.comments[i].name;
      socialImg[i].src = objectOfSmallPic.comments[i].avatar
    }
  }

}

parrentContainer.addEventListener('click', addSmallPictureClick)


closedButton.addEventListener('click', function(){
  document.body.classList.remove('modal-open');
  fullImg.classList.add('hidden');
})


document.addEventListener('keydown', function(evt){
  if(evt.keyCode === 27) {
    fullImg.classList.add('hidden');
  }
})


