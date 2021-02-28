import {getRandomNum} from './utils.js';

const OBJECT_COUNT = 25;
const OBJECT_COMMENT_COUNT = 4;
const NAMES = ['Дима','Антон','Сергей','Артем','Юра'];
const COMMENTS = [' Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]
const DESCRIPTION = ['Кот-суши', 'Закат', 'Озеро', 'Очень красивые глаза', 'Супер-кар'];

//Объект фотокарточки

const createObjectOfPhoto = function(index) {
  return {
    id: index + 1,
    url: 'photos/' + getRandomNum(1, 25) + '.jpg',
    description: DESCRIPTION[getRandomNum(0, DESCRIPTION.length - 1)],
    likes: getRandomNum(15, 200),
    comments: arrayOfComments,
  }
};

//Объект коментарий

const createCommentObject = function(index) {
  return {
    id: index + 1,
    avatar: 'img/avatar-' + getRandomNum(1, 6) + '.svg',
    message: COMMENTS[getRandomNum(0, COMMENTS.length - 1)],
    name: NAMES[getRandomNum(0, NAMES.length - 1)],
  }
};


const arrayOfComments = new Array(OBJECT_COMMENT_COUNT).fill(null).map((_, index) => createCommentObject(index));

const arrayOfObjectsPhoto = new Array(OBJECT_COUNT).fill(null).map((_, index) => createObjectOfPhoto(index));

export {arrayOfObjectsPhoto};
