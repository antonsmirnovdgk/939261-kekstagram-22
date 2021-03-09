import {resetScale} from './scale-photo.js';
import {validateHashtags} from './valid-hashtags.js';


const bigImgUploadElement = document.querySelector('.img-upload__preview');
const effectFieldElement = document.querySelector('.effect-level__slider');
const effectValueElement = document.querySelector('.effect-level__value');
const formImgUploadElement = document.querySelector('.img-upload__effects');
const sliderLevelElement = document.querySelector('.effect-level');



const resetSlider = function(){
  resetScale();
  validateHashtags();
  bigImgUploadElement.style.filter = 'none';
  sliderLevelElement.classList.add('visually-hidden');
}


/* global noUiSlider:readonly */

noUiSlider.create(effectFieldElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});


document.querySelector('.effect-level').classList.add('visually-hidden')


const effectMap = {
  none: {
    className: 'effects__preview--none',
  },
  chrome: {
    className: 'effects__preview--chrome',
    filter: 'grayscale',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.01,
    },
  },
  sepia: {
    className: 'effects__preview--sepia',
    filter: 'sepia',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.01,
    },
  },
  marvin: {
    className: 'effects__preview--marvin',
    filter: 'invert',
    unit: '%',
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
  },
  phobos: {
    className: 'effects__preview--phobos',
    filter: 'blur',
    unit: 'px',
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.03,
    },
  },
  heat: {
    className: 'effects__preview--heat',
    filter: 'brightness',
    unit: '',
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.03,
    },
  },
};




let filter = null; // название фильтра
let unit = null; // единица измереиня


const onParrentUploadContaierCLick = function({target}){


  if(target.id === 'effect-none') {
    resetSlider();
    return null;
  } else {
    sliderLevelElement.classList.remove('visually-hidden');
  }

  filter = effectMap[target.value].filter;
  unit = effectMap[target.value].unit;


  effectFieldElement.noUiSlider.updateOptions(effectMap[target.value].options);

  effectFieldElement.noUiSlider.on('update', (values, handle) => {
    effectValueElement.value = values[handle];
    bigImgUploadElement.style.filter = `${filter}(${values[handle]}${unit})`;
  });
};

formImgUploadElement.addEventListener('change', onParrentUploadContaierCLick);


export {resetSlider};
