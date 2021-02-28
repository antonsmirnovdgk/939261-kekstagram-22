const valueField = document.querySelector('.scale__control--value');
const onBiggerButton = document.querySelector('.scale__control--bigger');
const bigImg = document.querySelector('.img-upload__preview');
const onSmallerButton = document.querySelector('.scale__control--smaller');

valueField.value = 100 + '%';

onBiggerButton.addEventListener('click', function(){
  if(parseInt(valueField.value) < 100){
    valueField.value = parseInt(valueField.value) + 25 + '%';
    bigImg.style.transform = bigImg.style.transform + 'scale' - '(0.25)';
  }
})

onSmallerButton.addEventListener('click', function(){
  if(parseInt(valueField.value) > 0){
    valueField.value = parseInt(valueField.value) - 25 + '%';
    bigImg.style.transform = bigImg.style.transform + 'scale' + '(0.25)';
  }
})
