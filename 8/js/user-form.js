import {activateScale, resetScale} from './user-form-scale.js';
import {resetPristine, validatePristine, addPristine} from './user-form-valid.js';

const uploadContainer = document.querySelector('.img-upload__overlay');
const uploadFileInput = document.querySelector('.img-upload__input');
const uploadFileCancel = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && !evt.target.closest('.text__hashtags') && !evt.target.closest('.text__description')) {
    evt.preventDefault();
    closeUploadFile();
  }
};

const onCancelButtonClick = () => closeUploadFile();
const onFileInputChange = () => openUploadFile();

const onFormSubmit = (evt) => {
  if(!validatePristine()) {
  evt.preventDefault ();
}
};

const openUploadFile = () => {
  uploadContainer.classList.remove('hidden');
  document.body.classList.add('.modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  activateScale();
  addPristine();
};

const closeUploadFile = () => {
  form.reset();
  resetScale();
  resetPristine();
  uploadContainer.classList.add('hidden');
  document.body.classList.remove('.modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const addFormAction = () => {
  uploadFileInput.addEventListener('change', onFileInputChange);
  uploadFileCancel.addEventListener('click', onCancelButtonClick);
  form.addEventListener('submit', onFormSubmit);
};

export {addFormAction}

