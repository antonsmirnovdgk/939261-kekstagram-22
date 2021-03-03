const valueField = document.querySelector('.scale__control--value');
const onBiggerButton = document.querySelector('.scale__control--bigger');
const bigImg = document.querySelector('.img-upload__preview');
const onSmallerButton = document.querySelector('.scale__control--smaller');
const effectField = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const formImgUpload = document.querySelector('.img-upload');
const uploadOverlay = formImgUpload.querySelector('.img-upload__overlay');
const onUploadButton = formImgUpload.querySelector('.img-upload__label');
const onCancelButton = formImgUpload.querySelector('.img-upload__cancel');
const sliderLevel = document.querySelector('.effect-level');
let scaleStep = 25;
const STEP = 25;
const SCALE_BUTTOM = 25;
const SCALE_TOP = 100;



onUploadButton.addEventListener('click', function() {
  uploadOverlay.classList.remove('hidden')
});


onCancelButton.addEventListener('click', function(){
  uploadOverlay.classList.add('hidden');
  bigImg.style.filter = 'none';
  sliderLevel.classList.add('visually-hidden');
})

valueField.value = `${SCALE_TOP}%`;

onBiggerButton.addEventListener('click', function(){
  if(parseInt(valueField.value) < SCALE_TOP){
    scaleStep = scaleStep + STEP;
    valueField.value = `${scaleStep}%`;
    bigImg.style.transform = 'scale' + '(' + scaleStep / 100 + ')';
  }
})

onSmallerButton.addEventListener('click', function(){
  if(parseInt(valueField.value) > SCALE_BUTTOM){
    scaleStep = parseInt(valueField.value) - STEP;
    valueField.value = `${scaleStep}%`;
    bigImg.style.transform = 'scale' + '(' + scaleStep / 100 + ')';
  }
})

/* global noUiSlider:readonly */

noUiSlider.create(effectField, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});


const setEffectFieldValue = function(filterValue, value)  {
  effectField.noUiSlider.on('update', (_, handle, unencoded) => {
    effectValue.value = unencoded[handle];
    bigImg.style.filter = `${filterValue}` + '(' + effectValue.value + `${value}`; ')';
  });
}

const updateOptions = function(min, max, start, step) {
  effectField.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    step,
    start,
  });
}


document.querySelector('.effect-level').classList.add('visually-hidden')

const onParrentUploadContaierCLick = function(evt){

  if(evt.target.matches('input[type="radio"]')){


    if(evt.target.checked && evt.target.id === 'effect-none') {

      sliderLevel.classList.add('visually-hidden');

      bigImg.style.filter = 'none';
    }


    if(evt.target.checked && evt.target.id === 'effect-chrome') {
      bigImg.classList.add('effects__preview--chrome');

      updateOptions(0, 1, 1, 0.1)

      setEffectFieldValue('grayscale' , '');

      sliderLevel.classList.remove('visually-hidden')
    }


    if(evt.target.checked && evt.target.id === 'effect-sepia') {
      bigImg.classList.add('effects__preview--sepia')

      updateOptions(0, 1, 1, 0.1)

      setEffectFieldValue('sepia' , '');

      sliderLevel.classList.remove('visually-hidden')
    }

    if(evt.target.checked && evt.target.id === 'effect-marvin') {
      bigImg.classList.add('effects__preview--marvin')

      updateOptions(0, 100, 100, 1);

      setEffectFieldValue('invert' , '%');

      sliderLevel.classList.remove('visually-hidden')
    }



    if(evt.target.checked && evt.target.id === 'effect-phobos') {
      bigImg.classList.add('effects__preview--phobos')

      updateOptions(0, 3, 3, 0.1);

      setEffectFieldValue('blur', 'px');

      sliderLevel.classList.remove('visually-hidden')
    }



    if(evt.target.checked && evt.target.id === 'effect-heat') {
      bigImg.classList.add('effects__preview--heat')

      updateOptions(1, 3, 3, 0.1);

      setEffectFieldValue('brightness' , '');

      sliderLevel.classList.remove('visually-hidden')
    }

  }
}

formImgUpload.addEventListener('change', onParrentUploadContaierCLick)


