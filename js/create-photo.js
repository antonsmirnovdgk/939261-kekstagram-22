import {arrayOfObjectsPhoto} from './data.js'

const pictureContainer = document.querySelector('.pictures');
const similarTemplate = document.querySelector('#picture').content.querySelector('.picture');
const similarPictures = arrayOfObjectsPhoto();
const fragment = document.createDocumentFragment();




similarPictures.forEach((picture) => {
  const pictureTemplate = similarTemplate.cloneNode(true);
  pictureTemplate.querySelector('.picture__img').src = picture.url;
  pictureTemplate.querySelector('.picture__likes').textContent = picture.likes;
  pictureTemplate.querySelector('.picture__comments').textContent = picture.comments;

  fragment.appendChild(pictureTemplate);
});

pictureContainer.appendChild(fragment);

