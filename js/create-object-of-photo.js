import {DESCRIPTION, OBJECT_COUNT} from './utils';
import {getRandomNum} from './get-random-num.js';
import {arrayOfComments} from './create-comment-object';

const createObjectOfPhoto = function(index) {
  return {
    id: index + 1,
    url: 'photos/' + getRandomNum(1, 25) + '.jpg',
    description: getRandomNum(0, DESCRIPTION.length),
    likes: getRandomNum(15, 200),
    comments: arrayOfComments,
  }
};


const arrayOfObjectsPhoto = new Array(OBJECT_COUNT).fill(null).map((element, index) => createObjectOfPhoto(index));

export {arrayOfObjectsPhoto}

// window.console.log(arrayOfObjectsPhoto);
