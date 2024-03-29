import {renderPictures} from './render-pictures.js';
import {shuffleArray, debounce} from './utils.js';

const RANDOM_COMMENTS_COUNT = 10;
const RERENDER_DELAY = 500;
const DISCUSSED_ID = 'filter-discussed';
const RANDOM_ID = 'filter-random';

const imgFilters = document.querySelector('.img-filters');

const removeElements = (elements) => {
  elements.forEach((element) => element.remove());
};

const rerenderThumbnails = (data, id) => {
  let dataCopy = data.slice();
  removeElements(document.querySelectorAll('.picture'));
  if (id === DISCUSSED_ID) {
    dataCopy = dataCopy.sort((a, b) => b.comments.length - a.comments.length);
  }
  if (id === RANDOM_ID) {
    dataCopy = shuffleArray(dataCopy).slice(0, RANDOM_COMMENTS_COUNT);
  }
  renderPictures(dataCopy);
};

const rerenderTimeout = debounce((data, id) => rerenderThumbnails(data, id), RERENDER_DELAY);

const onImgFiltersClick = (evt, data) => {
  if (evt.target.closest('.img-filters__button') && !evt.target.closest('.img-filters__button--active')) {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    const id = evt.target.id;
    rerenderTimeout(data, id);
  }
};

const initFilter = (data) => {
  imgFilters.classList.remove('img-filters--inactive');
  imgFilters.addEventListener('click', (evt) => {
    onImgFiltersClick(evt, data);
  });
};

export {initFilter};
