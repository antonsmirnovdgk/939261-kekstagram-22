import {createSuccessMessage, createErrMessage} from './create-photo.js';
import {showImgFilterElement} from './img-filters.js';


const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')

    .then((response) => {
      if(response.ok) {
        return response.json()
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })

    .then((createPhotos) => {
      onSuccess(createPhotos);
    })
    .then(() => {
      showImgFilterElement();
    })
    .catch((err) => {
      alert(`${err}` + '\n' + 'Неудалось загрузить данные с сервера');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://22.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if(response.ok){
        onSuccess();
        createSuccessMessage();
      } else {
        onFail();
        createErrMessage();
      }
    })
    .catch(() => {
      onFail();
      createErrMessage();
    });
};

export{getData, sendData}
