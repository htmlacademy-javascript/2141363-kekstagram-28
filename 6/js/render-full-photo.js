import {renderPictures} from './render-pictures.js';
renderPictures();

const picContainer = document.querySelector('.big-picture');
const picImage = picContainer.querySelector('.big-picture__img img');
const picLikes = picContainer.querySelector('.likes-count');
const picComments = picContainer.querySelector('.comments-count');
const picDescription = picContainer.querySelector('.social__caption');
const picCommentsCount = picContainer.querySelector('.social__comment-count');
const picCommentsLoader = picContainer.querySelector('.comments-loader');
// const commentsBigPhoto = picContainer.querySelector('.social__comments');
// const commentsImage = commentsBigPhoto.querySelector('.social__pictures');
// const commentsName = commentsBigPhoto.querySelector('.social__picture');
// const commentsText = commentsBigPhoto.querySelector('.social__text');

const bigPicture = (data) => {
  picImage.src = data.url;
  picLikes.textContent = data.likes;
  picComments.textContent = data.comments.length;
  picDescription.textContent = data.description;
};

// function createsFullComments (data.comment) {
//   commentsImage.src = data.comment.avatar;
//   commentsName.alt = data.comment.name;
//   commentsText.textContent = data.comment.message;
// }

export function renderFullPhoto (data) {
  picContainer.classList.remove('hidden');
  picCommentsCount.classList.add('hidden');
  picCommentsLoader.classList.add('hidden');

  bigPicture(data);
  // createsFullComments (data.comment);
}

// После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.

// Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

// Подключите модуль в проект
