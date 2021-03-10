// import {arrayOfObjectsPhoto} from './data.js';
import {getData} from  './fetch.js'


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




const createSuccessMessage = function() {
  const successMessageTemplate = successMessageElement.cloneNode(true);
  mainElement.appendChild(successMessageTemplate);

  successMessageTemplate.addEventListener('click', function(){
    successMessageTemplate.classList.add('hidden')
  });
};

const createErrMessage = function() {
  const errMessageTemplate = errMessageElement.cloneNode(true);
  mainElement.appendChild(errMessageTemplate);
}



getData(createPhotos);

export {createSuccessMessage, createErrMessage};
