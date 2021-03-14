import {getRandomNum} from './utils.js';

const imgFilterElement = document.querySelector('.img-filters');
const filterRandomElement = document.querySelector('#filter-random');

// const imgFilterFormElement = document.querySelector('.img-filters__form');


// const onFilterFormClick = function(evt){
//   if(evt.target.id === 'filter-random'){
//     evt.target.classList.add('img-filters__button--active')

//   }else {
//     evt.target.classList.remove('img-filters__button--active')
//   }
// }

// imgFilterFormElement.addEventListener('click', onFilterFormClick);



//Показать блок с филтром
const showImgFilterElement = function(){
  imgFilterElement.classList.remove('img-filters--inactive');
}


let arrONe = ['qwe', 'ewq', 'qwe', 'asd', 'asd', 'aaa', 'ccc', 'ddd', 'aaa', 'cdc', 'ascd', 'asd', 'bbb', 'qwe', 'ewq', 'qwe', 'asd', 'asd', 'aaa', 'ccc', 'ddd', 'aaa', 'cdc', 'ascd', 'asd', 'bbb'];


const filterRandom = function(array){


  // const filterRandom = function(array){
//   const result = [];
//   for(let i = 0; result.length < 10; i++) {
//     const randomElement = array[getRandomNum(0, array.length - 1)];
//     if (!result.includes(randomElement)) {
//       result.push(randomElement);
//     }
//   }
//   return result;
// }


filterRandomElement.addEventListener('click', filterRandom(arrONe));


export {showImgFilterElement}
