const HASHTAGS_SYMBOLS = /^#[a-zа-ё0-9]{1,19}$/i;
const MAX_COMMENTS_LENGTH = 140;
const MAX_HASHTAGS_COUNT = 5;
const VALID_HASHTAG_TEXT = 'Хэштег должен начинаться с "#", содержать буквы и цифры (не более 20 символов, включая #)';
const UNIQ_HASHTAG_TEXT = 'Хэштеги не должны повторяться';
const COUNT_HASHTAG_TEXT = 'Нельзя указывать больше 5 хэштегов';
const VALID_COMMENT_TEXT = 'Длина комментария не должна превышать 140 символов';

const form = document.querySelector('.img-upload__form');
const commentField = document.querySelector('.text__description');
const hashtagsField = document.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextCClass: 'img-upload__field-wrapper__error',
});

const validateComments = (comment) => comment.length <= MAX_COMMENTS_LENGTH;

const createHashtagArray = (value) =>
  value
    .trim()
    .toLowerCase()
    .split(' ')
    .filter((item) => item);

const validateHashtags = (value) => {
  if (!value) {
    return true;
  }

  const hashtags = createHashtagArray(value);
  return hashtags.every((test) => HASHTAGS_SYMBOLS.test(test));
};

const validateCount = (value) => {
  const hashtags = createHashtagArray(value);
  return hashtags.length <= MAX_HASHTAGS_COUNT;
};

const validateUniqueHashtags = (value) => {
  const hashtags = createHashtagArray(value);
  const uniqHashtags = new Set(hashtags);
  return uniqHashtags.size === hashtags.length;
};

const addPristine = () => {
  pristine.addValidator(hashtagsField, validateHashtags, VALID_HASHTAG_TEXT, 1, true);
  pristine.addValidator(hashtagsField, validateUniqueHashtags, UNIQ_HASHTAG_TEXT, 1, true);
  pristine.addValidator(hashtagsField, validateCount, COUNT_HASHTAG_TEXT, 1, true);
  pristine.addValidator(commentField, validateComments, VALID_COMMENT_TEXT);
};

const resetPristine = () => pristine.reset();
const validatePristine = () => pristine.validate();

export {resetPristine, validatePristine, addPristine};
