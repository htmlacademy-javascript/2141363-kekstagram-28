import {activateScale, resetScale} from './user-form-scale.js';
import {resetPristine, validatePristine, addPristine} from './user-form-valid.js';
import {sendData} from './api.js';
import {changeEffect, resetFilter, createSlider} from './user-form-effects.js';
import {renderSeccussMessage, renderFailMessage} from './send-messages.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram';

const uploadContainer = document.querySelector('.img-upload__overlay');
const uploadFileInput = document.querySelector('.img-upload__input');
const uploadFileCancel = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const effectField = document.querySelector('.effects');

const onSendSuccess = () => {
  renderSeccussMessage ();
  closeUploadFile ();
};

const onSendFail = () => {
  renderFailMessage ();
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape' && !evt.target.closest('.text__hashtags') && !evt.target.closest('.text__description')) {
    evt.preventDefault();
    if (document.querySelector('.error')) {
      return;
    }
    closeUploadFile();
  }
};

const onCancelButtonClick = () => closeUploadFile();
const onFileInputChange = () => openUploadFile();
const onEffectsFieldChange = (evt) => changeEffect(evt);

const onFormSubmit = (evt) => {
  evt.preventDefault ();
  if(validatePristine()) {
    sendData (GET_URL, onSendSuccess, onSendFail, new FormData (evt.target));
};
};

const openUploadFile = () => {
  uploadContainer.classList.remove('hidden');
  document.body.classList.add('.modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  activateScale();
  addPristine();
  createSlider();
};

const closeUploadFile = () => {
  form.reset();
  resetScale();
  resetPristine();
  resetFilter();
  uploadContainer.classList.add('hidden');
  document.body.classList.remove('.modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const addFormAction = () => {
  uploadFileInput.addEventListener('change', onFileInputChange);
  uploadFileCancel.addEventListener('click', onCancelButtonClick);
  effectField.addEventListener('change', onEffectsFieldChange);
  form.addEventListener('submit', onFormSubmit);
};

export {addFormAction}

