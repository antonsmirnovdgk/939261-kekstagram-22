const onSmallerButton = document.querySelector('.scale__control--smaller');
const valueField = document.querySelector('.scale__control--value');
const onBiggerButton = document.querySelector('.scale__control--bigger');
const bigImg = document.querySelector('.img-upload__preview');
let scaleStep = 25;
const STEP = 25;
const SCALE_BUTTOM = 25;
const SCALE_TOP = 100;

const resetScale = () => {
  valueField.value =`${SCALE_TOP}%`;
  bigImg.style.transform = 'none';
}

valueField.value = `${SCALE_TOP}%`;

onBiggerButton.addEventListener('click', () => {
  if(parseInt(valueField.value) < SCALE_TOP){
    scaleStep = scaleStep + STEP;
    valueField.value = `${scaleStep}%`;
    bigImg.style.transform = 'scale' + '(' + scaleStep / 100 + ')';
  }
})

onSmallerButton.addEventListener('click', () => {
  if(parseInt(valueField.value) > SCALE_BUTTOM){
    scaleStep = parseInt(valueField.value) - STEP;
    valueField.value = `${scaleStep}%`;
    bigImg.style.transform = 'scale' + '(' + scaleStep / 100 + ')';
  }
})

export {resetScale};
