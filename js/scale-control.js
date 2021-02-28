const valueField = document.querySelector('.scale__control--value');
const biggerButton = document.querySelector('.scale__control--bigger');
// const bigImg = document.querySelector('.img-upload__preview');
const smallerButton = document.querySelector('.scale__control--smaller');

valueField.value = 100 + '%';

biggerButton.addEventListener('click', function(evt){
  evt.preventDefault();
  if(parseInt(valueField.value) < 100){
    valueField.value = parseInt(valueField.value) + 25 + '%';
  }
})

smallerButton.addEventListener('click', function(evt){
  evt.preventDefault();
  if(parseInt(valueField.value) > 0){
    valueField.value = parseInt(valueField.value) - 25 + '%';
  }
})
