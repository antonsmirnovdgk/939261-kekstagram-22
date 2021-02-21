import {arrayOfObjectsPhoto} from './data.js';

const PICTURE_CONTAINER = document.querySelector('.pictures');
const SIMILAR_TEMPLATE = document.querySelector('#picture').content.querySelector('.picture');
const SIMILAR_PICTURES = arrayOfObjectsPhoto;
const FRAGMENT = document.createDocumentFragment();





SIMILAR_PICTURES.forEach(({url, likes, comments}) => {
  const PICTURE_TEMPLATE = SIMILAR_TEMPLATE.cloneNode(true);
  PICTURE_TEMPLATE.querySelector('.picture__img').src = url;
  PICTURE_TEMPLATE.querySelector('.picture__likes').textContent = likes;
  PICTURE_TEMPLATE.querySelector('.picture__comments').textContent = comments;

  FRAGMENT.appendChild(PICTURE_TEMPLATE);
});


PICTURE_CONTAINER.appendChild(FRAGMENT);


