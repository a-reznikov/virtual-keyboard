import keys from './json/keys.json';
import { creatContainer } from './js/container';
import { Key } from './js/keys';

console.log(keys);
console.log(Key);

window.addEventListener('keydown', (event) => {
  console.log(event);
});

const generateKeys = (keysArray) => {
  const rowKyes = [];
  keysArray.forEach((key) => {
    rowKyes.push(new Key(key));
  });
  return rowKyes;
};

const creatKeys = () => {
  const keyboardKeys = [];
  keyboardKeys.push(...keys);
  console.log(keyboardKeys);
  const keyboardRow = document.querySelector('.keyboard__row');
  console.log(keyboardRow);
  generateKeys(keyboardKeys).forEach((key) => {
    keyboardRow.append(key.creatKey());
  });
};

window.onload = function load() {
  creatContainer();
  creatKeys();
};
