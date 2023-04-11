 const RANGE_OPTIONS = {
    chrome: {
        effects: 'grayscale',
        min: 0,
        max: 1,
        step: 0.1,
    },
    sepio: {
        effects: 'sepia',
        min: 0,
        max: 1,
        step: 0.1,
    },
    narvin: {
        effects: 'invert',
        min: 0,
        max: 100,
        step: 1,
    },
    phobos: {
        effects: 'blur',
        min: 0,
        max: 3,
        step: 0.1,
    },
    heat: {
        effects: 'brightness',
        min: 1,
        max: 3,
        step: 0.1,
    },
};

const UNIT = {
invert: '%',
blur: 'px',
};

const image = document.querySelector('.img-upload__prewiew img')
const sliderField = document.querySelector('.img-upload__effect-level');
const effectLevel = document.querySelector('.effect-level__value');

const createSlider = () => {
noUiSlider.create(sliderField, {
    range: {
        min: 0,
        max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
})
};

const resetFilter = () => {
    image.style.filter = null;
    sliderField.classList.add('.hidden');
};

const changeEffect = (evt)  => {
    if (evt.target.value === 'none') {
    resetFilter();
    return
    }

    sliderField.classList.remove('.hidden');

    const {effect, min, max, step} = RANGE_OPTIONS[evt.target.value];
    const unit = UNIT[effect] ? UNIT[effect] : '';

    sliderField.noUiSlider.updateOptions({
        range: {
            min,
            max,
        },
        start: max,
        step,
        connect: 'lower',
    });

    sliderField.noUiSlider.on('update', () => {
        effectLevel.value = sliderField.noUiSlider.get();
        image.style.filtet = `${effect}(${effectLevel.value}${unit})`;
    });
};

export {resetFilter, changeEffect, createSlider};