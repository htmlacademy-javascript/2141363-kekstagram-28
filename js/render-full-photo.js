import {isEscapeKey} from './utils.js';

const pictureContainer = document.querySelector('.big-picture');
const pictureImage = pictureContainer.querySelector('.big-picture__img img');
const pictureLikes = pictureContainer.querySelector('.likes-count');
const pictureComments = pictureContainer.querySelector('.comments-count');
const pictureDescription = pictureContainer.querySelector('.social__caption');
const pictureCommentsCount = pictureContainer.querySelector('.social__comment-count');
const pictureCommentsLoader = pictureContainer.querySelector('.comments-loader');
const commentsList = pictureContainer.querySelector('.social__comments');
const comment = pictureContainer.querySelector('.social__comment');
const closeModal = pictureContainer.querySelector('.big-picture__cancel');
pictureCommentsCount.classList.add('hidden');
pictureCommentsLoader.classList.add('hidden');


const fillComment = (element) => {
  const commentElement = comment.cloneNode(true);
  commentElement.querySelector('.social__picture').src = element.avatar;
  commentElement.querySelector('.social__picture').alt = element.name;
  commentElement.querySelector('.social__text').textContent = element.message;
  return commentElement;
};

const renderComments = (comments) => {
  comments.forEach((element) => commentsList.append(fillComment(element)));
};

const fullBigPicture = (data) => {
  pictureImage.src = data.url;
  pictureLikes.textContent = data.likes;
  pictureComments.textContent = data.comments.length;
  pictureDescription.textContent = data.description;
  renderComments(data.comments);
};

const openModalPhoto = () => {
  pictureContainer.classList.remove('hidden');
  document.body.classList.add('.modal-open');
};

const closeModalPhoto = () => {
  closeModal.addEventListener('click', () => {
    pictureContainer.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      pictureContainer.classList.add('hidden');
      document.body.classList.remove('.modal-open');
    }
  });
};

const renderFullPhoto = (data) => {
  commentsList.innerHTML = ' ';
  openModalPhoto();
  fullBigPicture(data);
  closeModalPhoto();
};

export {renderFullPhoto};
