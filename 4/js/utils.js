const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];


export{getRandomElements, getRandomInteger};
