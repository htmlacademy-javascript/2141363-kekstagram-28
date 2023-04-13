import {openFullPhoto} from './render-full-photo.js';
import {getData} from './api.js';
import {initFilter} from './filter.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const ERROR_TIMEOUT = 7000;
const ERROR_TEXT = 'Произошла ошибка загрузки.';
const pictureList = document.querySelector('.pictures');
const pictureSimilarTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = new DocumentFragment();

const createPicture = (data) => {
  const pictureElement = pictureSimilarTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = data.url;
  pictureElement.querySelector('.picture__comments').textContent = data.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = data.likes;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openFullPhoto(data);
  });

  fragment.append(pictureElement);
};

const renderPictures = (data) => {
  data.forEach((item) => createPicture(item));
  pictureList.append(fragment);
};

const onGetSuccess = (data) => {
  renderPictures(data);
  initFilter(data);
};

const onGetFail = () => {
  const errorBlock = document.createElement('div');
  errorBlock.classList.add('error-block');
  errorBlock.textContent = ERROR_TEXT;
  document.body.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ERROR_TIMEOUT);
};

const getImageData = () => getData(GET_URL, onGetSuccess, onGetFail);

export {getImageData, renderPictures};
