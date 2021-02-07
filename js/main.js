const abc = 'asdsafdfdfdfgfdgh';
const OBJECT_COUNT = 25;
const NAMES = ['Дима','Антон','Сергей','Артем','Юра'];
const COMMENTS = [' Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]


const getRandomNum =  function(minNumber, maxNumber) {
  const randomNum = Math.floor(Math.random() * maxNumber); // Math.random() выведете рандомно число от 0 до 1 , потом мы умножим на maxNubmer - это будет число  с запятой , а floor его округлит к меньшему значению
  return randomNum > minNumber ? randomNum : minNumber;
};

window.console.log(getRandomNum(1, 10));


// const checkLengthOfStr = (str, maxLength = 140) => Number(str.length) <= maxLength;

// window.console.log(checkLengthOfStr(str));

const checkLengthOfStr = function(str, maxLength = 140) {
  return Number(str.length) <= maxLength;
};

window.console.log(checkLengthOfStr(abc));

//СОЗДАНИЕ ОБЪЕКТА КОМЕНТОВ

const createComments = function(index) {
  return {
    id: index + 1,
    avatar: 'img/avatar-' + getRandomNum(1, 6) + '.svg',
    message: COMMENTS[getRandomNum(0, COMMENTS.length - 1)],
    name: NAMES[getRandomNum(0, NAMES.length - 1)],
  }
};

const arrayOfComments = new Array(4).fill(null).map((_, index) => createComments(index));

//СОЗДАНИЕ ОБЪЕКТА ФОТО



const createObject = function(index) {
  return {
    id: index + 1,
    url: 'photos/' + getRandomNum(1, 25) + '.jpg',
    description: 'фото',
    likes: getRandomNum(15, 200),
    comments: arrayOfComments,
  }
};


const arrayOfObjects = new Array(OBJECT_COUNT).fill(null).map((element, index) => createObject(index));

window.console.log(arrayOfObjects);
