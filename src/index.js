import keys from './json/keys.json';
import { creatContainer } from './js/container';
import { Key } from './js/keys';

let language = 'en';
let isCaps = false;

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

function writeFromKeyboard(code) {
  const textArea = document.querySelector('.textarea');
  const findKey = document.querySelector(`.${code}`);
  const symbol = findKey.innerText;
  textArea.textContent += symbol;
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
