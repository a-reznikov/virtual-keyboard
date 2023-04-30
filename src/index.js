import keys from './json/keys.json';
import { creatContainer } from './js/container';
import { Key } from './js/keys';

const changeCaps = () => {
  const caseLower = document.querySelectorAll('.case-lower');
  const capsKeys = document.querySelectorAll('.caps');
  const caps = document.querySelector('.CapsLock');
  caps.classList.toggle('pressed');
  caseLower.forEach((key) => {
    key.classList.toggle('hidden');
  });
  capsKeys.forEach((key) => {
    key.classList.toggle('hidden');
  });
};

document.addEventListener('keydown', (event) => {
  console.log(event);
  const textArea = document.querySelector('.textarea');
  const activeKey = document.querySelector(`.${event.code}`);
  if (event.code === 'CapsLock') {
    changeCaps();
  } else {
    activeKey.classList.add('active');
    textArea.textContent += event.key;
  }
});

document.addEventListener('keyup', (event) => {
  const activeKey = document.querySelector(`.${event.code}`);
  activeKey.classList.remove('active');
});

function writeFromScreen(symbol) {
  const textArea = document.querySelector('.textarea');
  textArea.textContent += symbol;
}

document.addEventListener('click', (event) => {
  const allKeys = document.querySelectorAll('.key');
  const symbol = event.target.innerText;
  if (symbol === 'CapsLock') {
    changeCaps();
  } else {
    allKeys.forEach((key) => {
      if (key.contains(event.target)) {
        writeFromScreen(symbol);
        console.log(symbol);
      }
    });
  }
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
  const keyboardRow = document.querySelector('.keyboard__row');
  generateKeys(keyboardKeys).forEach((key) => {
    keyboardRow.append(key.creatKey());
  });
};

window.onload = function load() {
  creatContainer();
  creatKeys();
};
