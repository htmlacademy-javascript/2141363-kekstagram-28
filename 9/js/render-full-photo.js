import {isEscapeKey} from './utils.js';

const COMMENTS_COUNT = 5;

const pictureContainer = document.querySelector('.big-picture');
const pictureImage = pictureContainer.querySelector('.big-picture__img img');
const pictureLikes = pictureContainer.querySelector('.likes-count');
const pictureComments = pictureContainer.querySelector('.comments-count');
const pictureDescription = pictureContainer.querySelector('.social__caption');
const pictureCommentsCount = pictureContainer.querySelector('.social__comment-count');
const pictureCommentsLoader = pictureContainer.querySelector('.comments-loader');
const commentsList = pictureContainer.querySelector('.social__comments');
const comment = pictureContainer.querySelector('.social__comment');
const closeModalButton = pictureContainer.querySelector('.big-picture__cancel');

let showingComments = 0;
let comments = [];

const fillComment = (element) => {
  const commentElement = comment.cloneNode(true);
  commentElement.querySelector('.social__picture').src = element.avatar;
  commentElement.querySelector('.social__picture').alt = element.name;
  commentElement.querySelector('.social__text').textContent = element.message;
  return commentElement;
};

const fillCommentsCount = () => {
  pictureCommentsCount.innerHTML = `${showingComments} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const renderComments = () => {
  const currentComments = comments.slice(showingComments, showingComments + COMMENTS_COUNT);
  showingComments += COMMENTS_COUNT;
  showingComments = Math.min(showingComments, comments.length);
  currentComments.forEach((element) => commentsList.append(fillComment(element)));
  fillCommentsCount();

  if (showingComments >= comments.length) {
    pictureCommentsLoader.classList.add('hidden');
  } else {
    pictureCommentsLoader.classList.remove('hidden');
  }
};

const fullBigPicture = (data) => {
  pictureImage.src = data.url;
  pictureLikes.textContent = data.likes;
  pictureComments.textContent = data.comments.length;
  pictureDescription.textContent = data.description;
};

const closeFullPhoto = () => {
  pictureContainer.classList.add('hidden');
  document.body.classList.remove('.modal-open');
  closeModalButton.removeEventListener('click', onCloseFullPhotoButtonClick);
  document.removeEventListener('keydown', onCloseKeydownDocument);
  showingComments = 0;
  pictureCommentsLoader.removeEventListener('click', onPictureCommentsLoaderClick);
};

function onPictureCommentsLoaderClick(evt) {
  evt.preventDefault();
  renderComments();
}

function onCloseFullPhotoButtonClick(evt) {
  evt.preventDefault();
  closeFullPhoto();
}

function onCloseKeydownDocument(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPhoto();
  }
}

const openFullPhoto = (data) => {
  commentsList.innerHTML = ' ';
  pictureContainer.classList.remove('hidden');
  document.body.classList.add('.modal-open');
  fullBigPicture(data);
  comments = data.comments;
  renderComments();
  closeModalButton.addEventListener('click', onCloseFullPhotoButtonClick);
  document.addEventListener('keydown', onCloseKeydownDocument);
  pictureCommentsLoader.addEventListener('click', onPictureCommentsLoaderClick);
};

export {openFullPhoto};
