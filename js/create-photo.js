// import {arrayOfObjectsPhoto} from './data.js';
import {getData} from  './fetch.js';
import {isEscEvent} from './utils.js';


const picture_container = document.querySelector('.pictures');
const similar_template = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();
const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const mainElement = document.querySelector('main');
const errMessageElement = document.querySelector('#error').content.querySelector('.error');



const createPhotos = function(photos) {

  photos.forEach((item) => {
    const picture_template = similar_template.cloneNode(true);
    picture_template.querySelector('.picture__img').src = item.url;
    picture_template.querySelector('.picture__likes').textContent = item.likes;
    picture_template.querySelector('.picture__comments').textContent = item.message;
    picture_template.id = item.id;

    fragment.appendChild(picture_template);
  });

  picture_container.appendChild(fragment);

};



// Шаблон успешной загрузки данных

const createSuccessMessage = function() {
  const successMessageTemplate = successMessageElement.cloneNode(true);
  const buttonCloseElement = successMessageTemplate.querySelector('.success__button');
  mainElement.appendChild(successMessageTemplate);

  buttonCloseElement.addEventListener('click', function() {
    onSuccessButtonClick();
  });


  const onEscKeyDown = function(evt){
    if(isEscEvent(evt)){
      onSuccessButtonClick();
    }
  };


  document.addEventListener('keydown', onEscKeyDown);

  document.addEventListener('click', function(){
    successMessageTemplate.classList.add('hidden')
    buttonCloseElement.removeEventListener('click', function(){});
    document.removeEventListener('click', function(){});
    document.removeEventListener('keydown', onEscKeyDown);
  });


  const onSuccessButtonClick = function(){
    successMessageTemplate.classList.add('hidden');
    document.removeEventListener('keydown', onEscKeyDown);
    document.removeEventListener('click', function(){});
  }

};


// Шаблон не успешной загрузки данных

const createErrMessage = function() {
  const errMessageTemplate = errMessageElement.cloneNode(true);
  const errButtonCloseElement = errMessageTemplate.querySelector('.error__button');
  mainElement.appendChild(errMessageTemplate);



  const onEscKeyDown = function(evt){
    if(isEscEvent(evt)){
      onErrButtonClose();
    }
  };


  document.addEventListener('keydown', onEscKeyDown);
  errButtonCloseElement.addEventListener('click', function(){
    onErrButtonClose();
  })


  const onErrButtonClose = function(){
    errMessageTemplate.classList.add('hidden');
    document.removeEventListener('keydown', onEscKeyDown);
    errButtonCloseElement.removeEventListener('click', function(){});
  }

  document.addEventListener('click', function(){
    errMessageTemplate.classList.add('hidden')
    errButtonCloseElement.removeEventListener('click', function(){});
    document.removeEventListener('click', function(){});
    document.removeEventListener('keydown', onEscKeyDown);
  });



}



getData(createPhotos);

export {createSuccessMessage, createErrMessage};
