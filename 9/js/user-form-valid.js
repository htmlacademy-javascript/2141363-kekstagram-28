const HASHTAGS_SYMBOLS = /^#[a-zа-ё0-9]{1,19}$/i;
const MAX_COMMENTS_LENGTH = 140;
const MAX_HASHTAGS_COUNT = 5;

const form = document.querySelector('.img-upload__form');
const commentField = document.querySelector('.text__description');
const hashtagsField = document.querySelector('.text__hashtags');

const pristine = new Pristine (form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextCClass: 'img-upload__field-wrapper__error',
});

const isValidComment = (comment) => comment.length <= MAX_COMMENTS_LENGTH;

const createHashtagArray = (value) => value.trim().toLowerCase().split(' ').filter((item) => item);

const isValidHashtag = (value) => {
    if (!value) {
        return true;
    };

    const hashtags = createHashtagArray(value);
    return hashtags.every((test) => HASHTAGS_SYMBOLS.test(test));
};

const isValidCount = (value) => {
    const hashtags = createHashtagArray(value);
    return hashtags.length <= MAX_HASHTAGS_COUNT;
};

const isUniqueHashtags = (value) => {
    const hashtags = createHashtagArray(value);
    const uniqHashtags = new Set (hashtags);
    return uniqHashtags.size === hashtags.length;
}

const addPristine = () => {
    pristine.addValidator (
        hashtagsField,
        isValidHashtag,
        'Хэштег должен начинаться с "#", содержать буквы и цифры (не более 20 символов, включая #)',
    );

    pristine.addValidator (
        hashtagsField,
        isUniqueHashtags,
        'Хэштеги не должны повторяться',
    );

    pristine.addValidator (
        hashtagsField,
        isValidCount,
        'Нельзя указывать больше 5 хэштегов',
    );

    pristine.addValidator (
        commentField,
        isValidComment,
        'Длина комментария не должна превышать 140 символов',
    );
};

const resetPristine = () => pristine.reset();
const validatePristine = () => pristine.validate();

export {resetPristine, validatePristine, addPristine};