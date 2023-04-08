const MAX_PERCENT_SCALE = '100%';
const MIN_PERCENT_SCALE = '25%';
const STEP_PERCENT_SCALE = 25;
const DEVIDER_SCALE = 100;

const img = document.querySelector('.img-upload__preview img');
const input = document.querySelector('.scale__control--value');
const biggerScale = document.querySelector('.scale__control--bigger');
const smallerScale = document.querySelector('.scale__control--smaller');

const changeScale = (value) => {
 img.style.transform = `scale(${+value.replace('%','') / DEVIDER_SCALE})`;
};

const removeScale = () => {
if (input.value !== MIN_PERCENT_SCALE) {
    input.value = `${+input.value.replace('%','') - STEP_PERCENT_SCALE}%`;
    changeScale(input.value);
};
};

const addScale = () => {
    if (input.value !== MAX_PERCENT_SCALE) {
        input.value = `${+input.value.replace('%','') + STEP_PERCENT_SCALE}%`;
        changeScale(input.value);
    };
    };

const activateScale = () => {
    biggerScale.addEventListener('click', addScale);
    smallerScale.addEventListener('click', removeScale);
};

const resetScale = () => changeScale(input.value);

export {activateScale, resetScale};