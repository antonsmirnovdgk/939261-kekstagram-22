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
      fieldHashtagElement.classList.add('error-validate');
    } else if(isInvalidHashtagInArray){
      fieldHashtagElement.setCustomValidity('Хэштеги не могут содержать цифры, знаки, эмодзи и начинаться с #');
      fieldHashtagElement.classList.add('error-validate');
    } else if(isDuplicateHashtagInArray){
      fieldHashtagElement.setCustomValidity('Хэштеги недолжны повторяться')
      fieldHashtagElement.classList.add('error-validate');
    } else {
      fieldHashtagElement.setCustomValidity('')
      fieldHashtagElement.classList.remove('error-validate');
    }

    fieldHashtagElement.reportValidity();
  });
}

export {validateHashtags, fieldHashtagElement};
