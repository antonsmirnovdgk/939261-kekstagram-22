let getRandom =  function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (min >= max) ?  alert('Введите число больше  MIN') : Math.floor(Math.random() * (max - min + 1)) + min;
};

alert(getRandom(2, 2));


let lengthFeild = 140;
let field = document.querySelector('.comment');

let getLengthField = function(field, lengthFeild) {
  return (field.length <= lengthFeild) ? true : false;
}

getLengthField(field, lengthFeild);
