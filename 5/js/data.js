import {getRandomElements, getRandomInteger} from './utils.js';

const POSTS_COUNT = 25;
const DESCRIPTIONS = ['Случайный элемент массива', 'Чтобы что-то сделать надо начать', '20% усилий дают 80% результата', 'Влюбилась в чувака из Еревана', 'Что же так сложно то в этом вашем JS', 'Учусь смотреть на мир шире', 'Прекрасно отдохнула в Турции! Всем советую', 'Любые комментарии на счет моей внешности не принимаются', 'Наконец-то начала учить программирование', 'Нашла прекрасное место для покушать'];
const MESSAGES = ['Всё отлично! ', 'В целом всё неплохо. Но не всё. ', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. ', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. ', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?! '];
const NAMES = ['Павлик', 'Karapuz777', 'Nadoelo vse', 'Im tired', 'Сколько можно', 'Щенок123', 'Не тв0я з@я', 'madnokat', 'tri serdca'];

let postId = 1;
let commentId = 1;

const createRandomMessage = () => Array.from(new Set(Array.from({length: getRandomInteger(1,2)}, () => getRandomElements(MESSAGES)))).join('');

const createComments = () => ({
  id: commentId++,
  avatar: `img/${getRandomInteger(1,6)}.svg`,
  message: createRandomMessage(),
  name: getRandomElements(NAMES),
}
);

const createPost = () => ({
  id: postId,
  url: `photos/${postId++}.jpg`,
  description: getRandomElements(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(1, 10)}, createComments),
}
);

const createPosts = () => Array.from({length: POSTS_COUNT}, createPost);

export {createPosts};
