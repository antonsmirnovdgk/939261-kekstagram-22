import {getRandomNum} from './utils.js';

const imgFilterElement = document.querySelector('.img-filters');
const imgFilterFormElement = document.querySelector('.img-filters__form');
const filterButtons = imgFilterFormElement.querySelectorAll('.img-filters__button');

const onFilterFormClick = (evt) => {

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
const showImgFilterElement = () => {
  imgFilterElement.classList.remove('img-filters--inactive');
}

//Случайный список элементов
const getRandomElements = (array) => {
  let results = [];

  while(results.length < 10){
    let randomElement = array[getRandomNum(0, array.length - 1)];

    if (!results.includes(randomElement)){
      results.push(randomElement);
    }
  }
  return results;
}

const getQuantityComents = (a, b) => {
  if(a.comments.length > b.comments.length){
    return -1
  }
  if (a.comments.length < b.comments.length) {
    return 1;
  }
  return 0;
}

//Обработчик фильтров
const onFilterButtonClick = (photos, createPhotos) => {

  const uniqueSet = new Set(photos);
  const arrayOfSet = [...uniqueSet];

  imgFilterFormElement.addEventListener('click', (evt) => {
    if(evt.target.id === 'filter-random'){
      const elementsRandom = getRandomElements(arrayOfSet);
      createPhotos(elementsRandom)
    } else if (evt.target.id === 'filter-discussed') {
      const commentsLow = arrayOfSet.slice().sort(getQuantityComents);
      createPhotos(commentsLow);
    } else if (evt.target.id === 'filter-default') {
      createPhotos(arrayOfSet)
    }
  })
}


export {showImgFilterElement, onFilterButtonClick}
