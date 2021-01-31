const str = 'asdsafdfdfdfgfdgh';

const getRandomNum =  function(minNumber, maxNumber) {
  const randomNum = Math.floor(Math.random() * maxNumber); // Math.random() выведете рандомно число от 0 до 1 , потом мы умножим на maxNubmer - это будет число  с запятой , а floor его округлит к меньшему значению
  return randomNum > minNumber ? randomNum : minNumber;
};

window.console.log(getRandomNum(1, 10));


// const checkLengthOfStr = (str, maxLength = 140) => Number(str.length) <= maxLength;

// window.console.log(checkLengthOfStr(str));



const checkLengthOfStr = function(str, maxLength = 140) {
  return Number(str.length) <= maxLength;
}

window.console.log(checkLengthOfStr(str));
