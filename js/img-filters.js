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


//Показать блок с филтра
const showImgFilterElement = function(){
  imgFilterElement.classList.remove('img-filters--inactive');
}

export {showImgFilterElement}
