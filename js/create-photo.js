import {arrayOfObjectsPhoto} from './data.js';

const picture_container = document.querySelector('.pictures');
const similar_template = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();


arrayOfObjectsPhoto.forEach(({url, likes, comments}) => {
  const picture_template = similar_template.cloneNode(true);
  picture_template.querySelector('.picture__img').src = url;
  picture_template.querySelector('.picture__likes').textContent = likes;
  picture_template.querySelector('.picture__comments').textContent = comments;

  fragment.appendChild(picture_template);
});


picture_container.appendChild(fragment);


