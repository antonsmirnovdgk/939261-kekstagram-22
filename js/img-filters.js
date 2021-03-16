import {getRandomNum} from './utils.js';
import {createPhotos} from './create-photo.js';

const imgFilterElement = document.querySelector('.img-filters');
const imgFilterFormElement = document.querySelector('.img-filters__form');
const filterButtons = imgFilterFormElement.querySelectorAll('.img-filters__button');

const onFilterFormClick = function(evt){

  filterButtons.forEach((button) => {
    if (button.id !== evt.target.id) {
      button.classList.remove('img-filters__button--active');
    } else {
      button.classList.add('img-filters__button--active');
    }
  });
}

imgFilterFormElement.addEventListener('click', onFilterFormClick);


// Показать блок с филтром
const showImgFilterElement = function(){
  imgFilterElement.classList.remove('img-filters--inactive');
}

//Случайный список элементов
const randomElements = function(array){
  const randomPhotos = array.slice().sort(getRandomNum);
  createPhotos(randomPhotos.slice(0, 10));
}


const onFilterButtonClick = function(evt, array){
  if(evt.target.id === 'filter-random'){
    randomElements(array)
  }
}


imgFilterFormElement.addEventListener('click', onFilterButtonClick);

export {showImgFilterElement}
