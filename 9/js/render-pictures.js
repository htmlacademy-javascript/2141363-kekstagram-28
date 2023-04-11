import {openFullPhoto} from './render-full-photo.js';
import {getData} from './api.js';
import {initFilter} from './filter.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const ERROR_TIMEOUT = 7000;
const ERROR_TEXT = 'Произошла ошибка загрузки.';
const pictureList = document.querySelector('.pictures');
const pictureSimilarTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPicture = (data) => {
  const pictureElement = pictureSimilarTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = data.url;
  pictureElement.querySelector('.picture__comments').textContent = data.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = data.likes;

  pictureElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    openFullPhoto(data);
  });

  return pictureElement;
};

const renderPictures = (data) => {
  data.forEach((item) => pictureList.append(createPicture(item)));
};

const onGetSuccess = (data) => {
  renderPictures(data);
  initFilter(data);
};

const onGetFail = () => {
  const errorBlock = document.createElement('div');
  errorBlock.style.position = 'fixed';
  errorBlock.style.top = '0';
  errorBlock.style.left = '0';
  errorBlock.style.width = '100%';
  errorBlock.style.height = '100px';
  errorBlock.style.color = 'red';
  errorBlock.style.textAlign = 'center';
  errorBlock.style.padding = '20px';
  errorBlock.style.backgroundColor = 'black';
  errorBlock.textContent = ERROR_TEXT;
  document.body.append(errorBlock);

  setTimeout(() => {
    errorBlock.remove();
  }, ERROR_TIMEOUT);
};

const getImageData = () => getData(GET_URL, onGetSuccess, onGetFail);

export {getImageData, renderPictures};
