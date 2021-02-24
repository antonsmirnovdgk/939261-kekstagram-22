import {arrayOfObjectsPhoto} from './data.js';


const picture_container = document.querySelector('.pictures');
const similar_template = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();



arrayOfObjectsPhoto.forEach((item) => {
  const picture_template = similar_template.cloneNode(true);
  picture_template.querySelector('.picture__img').src = item.url;
  picture_template.querySelector('.picture__likes').textContent = item.likes;
  picture_template.querySelector('.picture__comments').textContent = item.message;
  picture_template.id = item.id;

  fragment.appendChild(picture_template);
});




picture_container.appendChild(fragment);


window.console.log(arrayOfObjectsPhoto);
