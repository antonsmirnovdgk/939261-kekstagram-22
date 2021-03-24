const uploadFileElement = document.querySelector('.img-upload__input');
const imgPreviewElement = document.querySelector('.img-upload__preview');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

uploadFileElement.addEventListener('change', () => {
  const file = uploadFileElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });


  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      imgPreviewElement.childNodes[1].src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});
