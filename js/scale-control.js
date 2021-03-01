const valueField = document.querySelector('.scale__control--value');
const onBiggerButton = document.querySelector('.scale__control--bigger');
const bigImg = document.querySelector('.img-upload__preview');
const onSmallerButton = document.querySelector('.scale__control--smaller');
const onRadioEffect = document.querySelectorAll('.effects__radio');
const effectField = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
let a = 25;


valueField.value = 100 + '%';

onBiggerButton.addEventListener('click', function(){
  if(parseInt(valueField.value) < 100){
    a = a + 25;
    valueField.value = a + '%';
    bigImg.style.transform = `scale(${a / 100})`;
  }
})

onSmallerButton.addEventListener('click', function(){
  if(parseInt(valueField.value) > 25){
    a = a - 25;
    window.console.log(a);
    valueField.value = a + '%';
    bigImg.style.transform = `scale(${a / 100})`;
  }
})



noUiSlider.create(effectField, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
});


effectField.noUiSlider.on('update', (_, handle, unencoded) => {
  effectValue.value = unencoded[handle];
  // bigImg.style.filter = 'grayscale('+effectValue.value+')';
});


const updateSlider = function(effect){
  effectField.noUiSlider.on('update', (_, handle, unencoded) => {
    effectValue.value = unencoded[handle];
    bigImg.style.filter = effect;
  })
}


onRadioEffect.forEach((item) => {
  item.addEventListener('change', (evt) => {

    if(evt.target.checked && evt.target.id === 'effect-none') {

      updateSlider('none');
    }

    if(evt.target.checked && evt.target.id === 'effect-chrome') {
      bigImg.classList.add('effects__preview--chrome')

      effectField.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
      });

      effectField.noUiSlider.on('update', (_, handle, unencoded) => {
        effectValue.value = unencoded[handle];
        bigImg.style.filter = 'grayscale(' + effectValue.value + ')';
      });

    }

    if(evt.target.checked && evt.target.id === 'effect-sepia') {
      bigImg.classList.add('effects__preview--sepia')

      effectField.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
      });
      effectField.noUiSlider.on('update', (_, handle, unencoded) => {
        effectValue.value = unencoded[handle];
        bigImg.style.filter = 'sepia('+effectValue.value+')';
      });

    }



    if(evt.target.checked && evt.target.id === 'effect-marvin') {
      bigImg.classList.add('effects__preview--marvin')

      effectField.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
      });
      effectField.noUiSlider.on('update', (_, handle, unencoded) => {
        effectValue.value = unencoded[handle];
        bigImg.style.filter = 'invert('+effectValue.value+ '%)';
      });

    }



    if(evt.target.checked && evt.target.id === 'effect-phobos') {
      bigImg.classList.add('effects__preview--phobos')

      effectField.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
      });
      effectField.noUiSlider.on('update', (_, handle, unencoded) => {
        effectValue.value = unencoded[handle];
        bigImg.style.filter = 'blur('+effectValue.value+')';
      });
    }



    if(evt.target.checked && evt.target.id === 'effect-heat') {
      bigImg.classList.add('effects__preview--heat')

      effectField.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
      });
      effectField.noUiSlider.on('update', (_, handle, unencoded) => {
        effectValue.value = unencoded[handle];
        bigImg.style.filter = 'brightness('+effectValue.value+')';
      });
    }

  });
});


