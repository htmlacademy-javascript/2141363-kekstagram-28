const checkLength = (string, count) => string.length <= count;

const isPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse().join('');
};

const findNumber = (string) => Number(String(string).match(/\d/g)?.join(''));

function padStart (string, minLength, spacer) {
  while (string.length < minLength) {
    const needToAdd = minLength - string.length;
    string = spacer.slice(0, needToAdd) + string;
  }
  return string;
}


const POSTS_COUNT = 25;
const MESSAGE_COUNT = 2;

let postId = 1;
let commentId = 1;

const DESCRIPTION = ['Случайный элемент массива', 'Чтобы что-то сделать надо начать', '20% усилий дают 80% результата', 'Влюбилась в чувака из Еревана', 'Что же так сложно то в этом вашем JS', 'Учусь смотреть на мир шире', 'Прекрасно отдохнула в Турции! Всем советую', 'Любые комментарии на счет моей внешности не принимаются', 'Наконец-то начала учить программирование', 'Нашла прекрасное место для покушать'];
const MESSAGE = ['Всё отлично! ', 'В целом всё неплохо. Но не всё. ', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. ', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. ', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?! '];
const NAME = ['Павлик', 'Karapuz777', 'Nadoelo vse', 'Im tired', 'Сколько можно', 'Щенок123', 'Не тв0я з@я', 'madnokat', 'tri serdca'];
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomIndex = (element) => Math.floor(Math.random() * (element.length - 1)); //случайный индекс

/*const randomMessage = () => {
  let message = []; //создаю пустой массив, куда попадут случайные сообщения
  let rand = getRandomInteger(0, MESSAGE.length); //делаю обязательное первое сообщение
  message.push(MESSAGE[rand]); // добавляю в массив
  MESSAGE.splice(rand); //удаляю из общего массива этот элемент, чтоб не повторить
  for (let i = 0; i < MESSAGE_COUNT - 1; i++) { // убираю один элемент от нужного количества count
    rand = getRandomInteger(-MESSAGE.length, MESSAGE.length); // делаю случайное число от минус количества до плюс количества, чтобы был равный шанс
    if (rand >= 0) { //если число больше нуля, то добавляю элемент с этим индексом, нет - шаг пропускается и будет только 1 комментарий
      message.push(MESSAGE[rand]);
    }
  }
  return message;
}; //я оставлю это говно, чтоб ты понял КАК это было сложно*/

const randomMessage = () => {
  const message = new Set();
  const countMessageRand = getRandomInteger(1, MESSAGE_COUNT);
  for(let i = 0; i < countMessageRand; i++) {
    const count = getRandomInteger(0, MESSAGE.length);
    message.add(MESSAGE[count]);
  }
  return message;
};


const createComments = () => ({
  id: commentId++,
  avatar: `img/${getRandomInteger(1,6)}.svg`,
  message: randomMessage(),
  name: NAME[getRandomInteger(0, NAME.length)],
}
);

const createPost = () => ({
  id: postId,
  url: `photos/${postId++}.jpg`,
  description: DESCRIPTION[randomIndex(DESCRIPTION)],
  likes: getRandomInteger(15, 200),
  comments: createComments(),
}
);


const createPosts = () => Array.from({length: POSTS_COUNT}, createPost);
