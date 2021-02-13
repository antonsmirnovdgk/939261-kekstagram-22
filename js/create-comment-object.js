import {OBJECT_COMMENT_COUNT, COMMENTS, NAMES} from './utils.js';
import {getRandomNum} from './get-random-num.js';

const createCommentObject = function(index) {
  return {
    id: index + 1,
    avatar: 'img/avatar-' + getRandomNum(1, 6) + '.svg',
    message: COMMENTS[getRandomNum(0, COMMENTS.length - 1)],
    name: NAMES[getRandomNum(0, NAMES.length - 1)],
  }
};

const arrayOfComments = new Array(OBJECT_COMMENT_COUNT).fill(null).map((element, index) => createCommentObject(index));

export {arrayOfComments}
