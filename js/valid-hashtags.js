const MAX_HASHTAGS = 5;
const HASHTAG_VALIDITY_REGEX = RegExp('^#[a-zA-Z0-9а-яА-ЯёЁ]{1,19}$');
const fieldHashtagElement = document.querySelector('.text__hashtags');


const validateHashtags = function() {

  fieldHashtagElement.addEventListener('input', function(evt) {

    const hashtagsArray = evt.target.value.toLowerCase().split(' ');
    const isDuplicateHashtagInArray = !hashtagsArray.every((item, index, array) => array.indexOf(item) === index);
    const isInvalidHashtagInArray = !hashtagsArray.every((item) => (item === '' || HASHTAG_VALIDITY_REGEX.test(item)));


    if(hashtagsArray.length > MAX_HASHTAGS){
      fieldHashtagElement.setCustomValidity('Кол-во хэштегов не может превышать 5-ти')
    } else if(isInvalidHashtagInArray){
      fieldHashtagElement.setCustomValidity('Хэштеги не могут содержать цифры, знаки, эмодзи и начинаться с #')
    } else if(isDuplicateHashtagInArray){
      fieldHashtagElement.setCustomValidity('Хэштеги недолжны повторяться')
    } else {
      fieldHashtagElement.setCustomValidity('')
    }

    fieldHashtagElement.reportValidity();
  });
}

export {validateHashtags};
