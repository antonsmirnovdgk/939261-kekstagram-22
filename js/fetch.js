import {createPhotos} from './create-photo.js'


fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok){
      return response.json()
    }

    throw new Error(`${response.status} ${response.statusTextq}`)
  })
  .then((photos) => {
    createPhotos(photos)
  })
  .catch((err) => {
    window.console.log(err);
  })


