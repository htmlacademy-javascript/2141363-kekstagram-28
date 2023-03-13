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
