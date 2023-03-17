import {createPosts} from './data.js';

const pictureList = document.querySelector('.pictures');
const pictureSimilarTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureSimilarElement = createPosts();

const createPicture = (data) => {
  const pictureElement = pictureSimilarTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = data.url;
  pictureElement.querySelector('.picture__comments').textContent = data.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = data.likes;

  return pictureElement;
};

const renderPictures = () => {
  pictureSimilarElement.forEach((element) => pictureList.append(createPicture(element)));
};

export {renderPictures};

/*const createPicture = (elements) = {
  const pictureElement = pictureSimilarTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = createPosts.url;
  pictureElement.querySelector('.picture__comments').textContent = createPosts.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = createPosts.likes;

  return pictureElement;
};

pictureSimilarElement.forEach(createPosts, () => {
  const pictureElement = pictureSimilarTemplate.cloneNode(true);
  pictureElementsList.append(pictureElement);
});*/
