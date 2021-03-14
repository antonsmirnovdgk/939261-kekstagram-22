import {getRandomNum} from './utils.js';

const imgFilterElement = document.querySelector('.img-filters');
const imgFilterFormElement = document.querySelector('.img-filters__form');


const onFilterFormClick = function(evt){
  if(evt.target.className === 'img-filters__button'){
    evt.target.classList.add('img-filters__button--active')
  }else {
    evt.target.classList.remove('img-filters__button--active')
  }
}

imgFilterFormElement.addEventListener('click', onFilterFormClick);

//Показать блок с филтром
const showImgFilterElement = function(){
  imgFilterElement.classList.remove('img-filters--inactive');
}

const getRandomnElements = function(array){
  const randomElements = new Array();
  if(randomElements.length < 10) {
    const randomPhoto = array[getRandomNum(0, array.length - 1)];
    const equalPhoto = randomElements.includes(randomPhoto);

    if(!equalPhoto){
      randomElements.push(randomPhoto);
    }
  }
}


export {showImgFilterElement}
