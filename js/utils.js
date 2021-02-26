const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};


const getRandomNum =  function(minNumber, maxNumber) {
  const randomNum = Math.floor(Math.random() * maxNumber); // Math.random() выведете рандомно число от 0 до 1 , потом мы умножим на maxNubmer - это будет число  с запятой , а floor его округлит к меньшему значению
  return randomNum > minNumber ? randomNum : minNumber;
};



const checkLengthOfStr = function(str, maxLength = 140) {
  return Number(str.length) <= maxLength;
};




export {getRandomNum, checkLengthOfStr, isEscEvent};



