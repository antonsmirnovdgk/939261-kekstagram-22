import {showImgFilterElement} from './img-filters.js';
// import {getRandomnElements} from './img-filters.js';

// const ERROR_GET_DATA = 'https://22.javascript.pages.academy/kekstagram/404';
const GET_DATA_ADDRESS = 'https://22.javascript.pages.academy/kekstagram/data';
const SENT_DATA_ADDRESS = 'https://22.javascript.pages.academy/kekstagram';

const getData = (onSuccess) => {
  fetch(GET_DATA_ADDRESS)

    .then((response) => {
      if(response.ok) {
        return response.json()
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((photosData) => {
      onSuccess(photosData);
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
    SENT_DATA_ADDRESS,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if(response.ok){
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export{getData, sendData}
