const valueField = document.querySelector('.scale__control--value');
const onBiggerButton = document.querySelector('.scale__control--bigger');
const bigImg = document.querySelector('.img-upload__preview');
const onSmallerButton = document.querySelector('.scale__control--smaller');
// const onRadioEffect = document.querySelectorAll('.effects__radio');
const effectField = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const formImgUpload = document.querySelector('.img-upload');
let scaleStep = 100;


valueField.value = 100 + '%';

onBiggerButton.addEventListener('click', function(){
  if(parseInt(valueField.value) < 100){
    scaleStep = scaleStep + 25;
    valueField.value = scaleStep + '%';
    bigImg.style.transform = `scale(${scaleStep / 100})`;
  }
})

onSmallerButton.addEventListener('click', function(){
  if(parseInt(valueField.value) > 25){
    scaleStep = scaleStep - 25;
    valueField.value = scaleStep + '%';
    bigImg.style.transform = `scale(${scaleStep / 100})`;
  }
})



// eslint-disable-next-line no-undef
noUiSlider.create(effectField, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
});


document.querySelector('.noUi-target').classList.add('visually-hidden')

const onParrentUploadContaierCLick = function(evt){

  if(evt.target.matches('input[type="radio"]')){


    if(evt.target.checked && evt.target.id === 'effect-none') {

      effectField.noUiSlider.on('update', (_, handle, unencoded) => {
        effectValue.value = unencoded[handle];
        bigImg.style.filter = 'none';
      });


      document.querySelector('.noUi-target').classList.add('visually-hidden')
    }

    if(evt.target.checked && evt.target.id === 'effect-chrome') {
      bigImg.classList.add('effects__preview--chrome');


      effectField.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },

        step: 0.1,
        start: 1,
      });

      effectField.noUiSlider.on('update', (_, handle, unencoded) => {
        effectValue.value = unencoded[handle];
        bigImg.style.filter = 'grayscale('+effectValue.value+')';
      });

      document.querySelector('.noUi-target').classList.remove('visually-hidden');
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

      document.querySelector('.noUi-target').classList.remove('visually-hidden');
    }

    if(evt.target.checked && evt.target.id === 'effect-marvin') {
      bigImg.classList.add('effects__preview--marvin')

      effectField.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
      });

      effectField.noUiSlider.on('update', (_, handle, unencoded) => {
        effectValue.value = unencoded[handle];
        bigImg.style.filter = 'invert(' + effectValue.value + '%)';
      });

      document.querySelector('.noUi-target').classList.remove('visually-hidden');
    }



    if(evt.target.checked && evt.target.id === 'effect-phobos') {
      bigImg.classList.add('effects__preview--phobos')

      effectField.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });


      effectField.noUiSlider.on('update', (_, handle, unencoded) => {
        effectValue.value = unencoded[handle];
        bigImg.style.filter = 'blur(' + effectValue.value + 'px)';
      });

      document.querySelector('.noUi-target').classList.remove('visually-hidden');
    }



    if(evt.target.checked && evt.target.id === 'effect-heat') {
      bigImg.classList.add('effects__preview--heat')

      effectField.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      });


      effectField.noUiSlider.on('update', (_, handle, unencoded) => {
        effectValue.value = unencoded[handle];
        bigImg.style.filter = 'brightness(' + effectValue.value + ')';
      });

      document.querySelector('.noUi-target').classList.remove('visually-hidden');
    }
  }
}

formImgUpload.addEventListener('change', onParrentUploadContaierCLick)


// onRadioEffect.forEach((item) => {
//   item.addEventListener('change', (evt) => {

//     document.querySelector('.noUi-target').classList.add('visually-hidden');

//     if(evt.target.checked && evt.target.id === 'effect-none') {

//       effectField.noUiSlider.on('update', (_, handle, unencoded) => {
//         effectValue.value = unencoded[handle];
//         bigImg.style.filter = 'none';
//       })

//     }

//     if(evt.target.checked && evt.target.id === 'effect-chrome') {
//       bigImg.classList.add('effects__preview--chrome')

//       effectField.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 1,
//         },

//         step: 0.1,
//         start: 1,
//       });

//       effectField.noUiSlider.on('update', (_, handle, unencoded) => {
//         effectValue.value = unencoded[handle];
//         bigImg.style.filter = 'grayscale('+effectValue.value+')';
//       })

//       document.querySelector('.noUi-target').classList.remove('visually-hidden');
//     }

//     if(evt.target.checked && evt.target.id === 'effect-sepia') {
//       bigImg.classList.add('effects__preview--sepia')

//       effectField.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 1,
//         },
//         step: 0.1,
//       });


//       effectField.noUiSlider.on('update', (_, handle, unencoded) => {
//         effectValue.value = unencoded[handle];
//         bigImg.style.filter = 'sepia('+effectValue.value+')';
//       })

//     }

//     if(evt.target.checked && evt.target.id === 'effect-marvin') {
//       bigImg.classList.add('effects__preview--marvin')

//       effectField.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 100,
//         },
//         start: 100,
//       });

//       effectField.noUiSlider.on('update', (_, handle, unencoded) => {
//         effectValue.value = unencoded[handle];
//         bigImg.style.filter = 'invert(' + effectValue.value + '%)';
//       })
//     }



//     if(evt.target.checked && evt.target.id === 'effect-phobos') {
//       bigImg.classList.add('effects__preview--phobos')

//       effectField.noUiSlider.updateOptions({
//         range: {
//           min: 0,
//           max: 3,
//         },
//         start: 3,
//         step: 0.1,
//       });


//       effectField.noUiSlider.on('update', (_, handle, unencoded) => {
//         effectValue.value = unencoded[handle];
//         bigImg.style.filter = 'blur(' + effectValue.value + 'px)';
//       })
//     }



//     if(evt.target.checked && evt.target.id === 'effect-heat') {
//       bigImg.classList.add('effects__preview--heat')

//       effectField.noUiSlider.updateOptions({
//         range: {
//           min: 1,
//           max: 3,
//         },
//         start: 3,
//         step: 0.1,
//       });


//       effectField.noUiSlider.on('update', (_, handle, unencoded) => {
//         effectValue.value = unencoded[handle];
//         bigImg.style.filter = 'brightness(' + effectValue.value + ')';
//       })
//     }

//   });
// });


