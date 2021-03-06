import {isEscEvent} from './utils.js';


const fieldHashtag = document.querySelector('.text__hashtags');
const fieldComment = document.querySelector('.text__description');

const HASHTAGS_LENGTH = 20;
const MAX_HASHTAGS = 5;
const MAX_LENGTH_COMMENT = 140;



const isHashtagSymbol = function(hashtag) {
  const pattern = /[-!$%^&*№()_+|~=`\\{}\]:";'<>?,.]/;
  return pattern.test(hashtag);
};


const isHashtagEmoji = function(hashtag)  {
  const pattern = /[\u{203C}\u{2049}\u{20E3}\u{2122}\u{2139}\u{2194}\u{2199}\u{21A9}\u{21AA}\u{231A}\u{231B}\u{23E9}\u{23EC}\u{23F0}\u{23F3}\u{24C2}\u{25AA}\u{25AB}\u{25B6}\u{25C0}\u{25FB}\u{25FE}\u{2600}\u{2601}\u{260E}\u{2611}\u{2614}\u{2615}\u{261D}\u{263A}\u{2648}\u{2653}\u{2660}\u{2663}\u{2665}\u{2666}\u{2668}\u{267B}\u{267F}\u{2693}\u{26A0}\u{26A1}\u{26AA}\u{26AB}\u{26BD}\u{26BE}\u{26C4}\u{26C5}\u{26CE}\u{26D4}\u{26EA}\u{26F2}\u{26F3}\u{26F5}\u{26FA}\u{26FD}\u{2702}\u{2705}\u{2708}\u{270C}\u{270F}\u{2712}\u{2714}\u{2716}\u{2728}\u{2733}\u{2734}\u{2744}\u{2747}\u{274C}\u{274E}\u{2753}\u{2755}\u{2757}\u{2764}\u{2795}\u{2797}\u{27A1}\u{27B0}\u{2934}\u{2935}\u{2B05}\u{2B07}\u{2B1B}\u{2B1C}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}\u{1F004}\u{1F0CF}\u{1F170}\u{1F171}\u{1F17E}\u{1F17F}\u{1F18E}\u{1F191}\u{1F19A}\u{1F1E7}\u{1F1EC}\u{1F1EE}\u{1F1F0}\u{1F1F3}\u{1F1F5}\u{1F1F7}\u{1F1FA}\u{1F201}\u{1F202}\u{1F21A}\u{1F22F}\u{1F232}\u{1F23A}\u{1F250}\u{1F251}\u{1F300}\u{1F320}\u{1F330}\u{1F335}\u{1F337}\u{1F37C}\u{1F380}\u{1F393}\u{1F3A0}\u{1F3C4}\u{1F3C6}\u{1F3CA}\u{1F3E0}\u{1F3F0}\u{1F400}\u{1F43E}\u{1F440}\u{1F442}\u{1F4F7}\u{1F4F9}\u{1F4FC}\u{1F500}\u{1F507}\u{1F509}\u{1F53D}\u{1F550}\u{1F567}\u{1F5FB}\u{1F640}\u{1F645}\u{1F64F}\u{1F680}\u{1F68A}]/;
  return pattern.test(hashtag);
}


const validateHashtags = function() {

  fieldHashtag.addEventListener('input', function() {

    const inputValue = fieldHashtag.value;
    const inputArray = inputValue.split(' ');

    for(let i = 0; i < inputArray.length; i++){
      if(inputValue[0] !== '#')  {
        fieldHashtag.setCustomValidity('Начинается только с #');  //Начаинается только с #
      } else if(inputArray[1] == ' ') {
        fieldHashtag.setCustomValidity('Хештег не может состоять только из одного символа #'); // хеш-тег не может состоять только из одной решётки;
      } else if (inputArray[i].length > HASHTAGS_LENGTH) {
        fieldHashtag.setCustomValidity('Хэштег должен быть не больше 20 символов'); // максимальная длина одного хэш-тега 20 символов, включая решётку;
      } else if (isHashtagSymbol(inputArray[i])) {
        fieldHashtag.setCustomValidity('После # должны идти только буквы')
      } else if (isHashtagEmoji(inputArray[i])){
        fieldHashtag.setCustomValidity('Эмодзи использовать нельзя')
      } else if(inputArray.length > MAX_HASHTAGS) {
        fieldHashtag.setCustomValidity('Хэштегов не может быть больше 5-ти');
      } else if(inputArray[i].includes(inputArray)){
        fieldHashtag.setCustomValidity('Хэштег не может повторятся'); // Без повторений
      }
      else {
        fieldHashtag.setCustomValidity('');
      }
    }

    fieldHashtag.reportValidity();
  });
}

const validComment = function() {

  fieldComment.addEventListener('input', function() {
    const commentValue = fieldComment.value;

    if(commentValue.length > MAX_LENGTH_COMMENT) {
      fieldComment.setCustomValidity('Комментарий не может привышать больше 140 символов');
    }
    else {
      fieldComment.setCustomValidity('');
    }

    fieldComment.reportValidity();
  })
}





const onFieldFocus = function(evt) {

  evt.target.addEventListener('keydown', function(evt) {

    if(isEscEvent(evt)) {
      evt.preventDefault();
      evt.stopPropagation();
    }
  });
};

export {validateHashtags, validComment, onFieldFocus};
