import keys from './json/keys.json';
import { creatContainer } from './js/container';
import { Key } from './js/keys';

let language = 'en';
let isCaps = false;
let positionCaret = 0;

const changeCaps = () => {
  const caseLower = document.querySelectorAll('.case-lower');
  const caps = document.querySelectorAll('.caps');
  const capsKey = document.querySelector('.CapsLock');
  capsKey.classList.toggle('pressed');
  if (!isCaps) {
    isCaps = true;
  } else {
    isCaps = false;
  }
  console.log(isCaps);
  caseLower.forEach((key) => {
    key.classList.toggle('hidden');
  });
  caps.forEach((key) => {
    key.classList.toggle('hidden');
  });
};

const enableCapsShift = () => {
  const caps = document.querySelectorAll('.caps');
  const capsShift = document.querySelectorAll('.caps-shift');
  caps.forEach((key) => {
    key.classList.add('hidden');
  });
  capsShift.forEach((key) => {
    key.classList.remove('hidden');
  });
};

const disableCapsShift = () => {
  const caps = document.querySelectorAll('.caps');
  const capsShift = document.querySelectorAll('.caps-shift');
  capsShift.forEach((key) => {
    key.classList.add('hidden');
  });
  caps.forEach((key) => {
    key.classList.remove('hidden');
  });
};

const enableShift = () => {
  const caseLower = document.querySelectorAll('.case-lower');
  const shiftKeys = document.querySelectorAll('.shift');
  caseLower.forEach((key) => {
    key.classList.add('hidden');
  });
  shiftKeys.forEach((key) => {
    key.classList.remove('hidden');
  });
};

const disableShift = () => {
  const caseLower = document.querySelectorAll('.case-lower');
  const shiftKeys = document.querySelectorAll('.shift');
  shiftKeys.forEach((key) => {
    key.classList.add('hidden');
  });
  caseLower.forEach((key) => {
    key.classList.remove('hidden');
  });
};

function concatText(start, text, symbol) {
  positionCaret += 1;
  let first = text.slice(0, start);
  const last = text.slice(start, text.length);
  first += symbol;
  const textInArea = first + last;
  return textInArea;
}

function writeFromKeyboard(code) {
  const textArea = document.querySelector('.textarea');
  const findKey = document.querySelector(`.${code}`);
  const symbol = findKey.innerText;
  const start = positionCaret;
  textArea.value = concatText(start, textArea.value, symbol);
  textArea.setSelectionRange(positionCaret, positionCaret);
}

const changeLang = () => {
  const keyEn = document.querySelectorAll('.key-en');
  const keyRu = document.querySelectorAll('.key-ru');
  if (language === 'en') {
    language = 'ru';
    console.log('en - > ru', language);
  } else {
    language = 'en';
    console.log('ru - > en', language);
  }
  keyEn.forEach((key) => {
    key.classList.toggle('hidden');
  });
  keyRu.forEach((key) => {
    key.classList.toggle('hidden');
  });
};

function writeEnter() {
  const textArea = document.querySelector('.textarea');
  const symbol = '\n';
  const start = positionCaret;
  textArea.value = concatText(start, textArea.value, symbol);
  textArea.setSelectionRange(positionCaret, positionCaret);
}

document.addEventListener('keydown', (event) => {
  console.log(event);
  event.preventDefault();
  const activeKey = document.querySelector(`.${event.code}`);
  activeKey.classList.add('active');
  const symbolCode = event.code;
  if (event.key === 'Alt') {
    if (event.key === 'Alt' && (event.ctrlKey || event.metaKey)) {
      changeLang();
      console.log('change Lang');
    }
  } else if (event.key === 'Control') {
    console.log('Control');
    if (event.key === 'Control' && event.altKey) {
      changeLang();
      console.log('change Lang first Control');
    }
  } else if (event.code === 'CapsLock') {
    changeCaps();
  } else if (isCaps && event.key === 'Shift') {
    enableCapsShift();
  } else if (event.key === 'Shift') {
    console.log('enter shift');
    enableShift();
  } else if (event.code === 'Enter') {
    writeEnter();
  } else {
    writeFromKeyboard(symbolCode);
  }
});

document.addEventListener('keyup', (event) => {
  const activeKey = document.querySelector(`.${event.code}`);
  activeKey.classList.remove('active');
  if (!isCaps && event.key === 'Shift') {
    disableShift();
  } else if (isCaps && event.key === 'Shift') {
    disableCapsShift();
  }
});

function writeFromScreen(symbol) {
  const textArea = document.querySelector('.textarea');
  textArea.value += symbol;
}

document.addEventListener('click', (event) => {
  const textArea = document.querySelector('.textarea');
  const allKeys = document.querySelectorAll('.key');
  const symbol = event.target.innerText;
  if (event.target === textArea) {
    positionCaret = textArea.selectionStart;
  }
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
