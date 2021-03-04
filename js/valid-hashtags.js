const fieldHashtag = document.querySelector('.text__hashtags');
// const MAX_LENGTH = 105;

const HASHTAGS_LENGTH = 19;

fieldHashtag.addEventListener('input', function() {

  const inputValue = fieldHashtag.value;


  // const checkInput = function(firstLetter){
  //   if(firstLetter[0] !== '#') {
  //     alert('f');
  //   }
  // }


  const inputArray = inputValue.split(' ');

  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i][0] !== '#' && inputArray[i].legnth < HASHTAGS_LENGTH) {
      alert('wow');
    }
  }

})
