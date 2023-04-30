export class Key {
  constructor({
    key, code, caps, shift, keyRu, capsRu, shiftRu,
  }) {
    this.key = key;
    this.code = code;
    this.caps = caps;
    this.shift = shift;
    this.keyRu = keyRu;
    this.capsRu = capsRu;
    this.shiftRu = shiftRu;
  }

  creatKey() {
    const key = document.createElement('div');
    key.className = `key ${this.code}`;
    const keyLangEn = document.createElement('div');
    keyLangEn.className = 'key-en';
    const caseLower = document.createElement('span');
    caseLower.className = 'case-lower';
    caseLower.innerHTML = this.key;
    const caseUpper = document.createElement('span');
    caseUpper.className = 'case-upper hidden';
    caseUpper.innerHTML = this.caps;
    const caps = document.createElement('span');
    caps.className = 'caps hidden';
    caps.innerHTML = this.caps;
    const shiftCaps = document.createElement('span');
    shiftCaps.className = 'shift-caps hidden';
    shiftCaps.innerHTML = this.shift;
    keyLangEn.append(caseLower);
    keyLangEn.append(caseUpper);
    keyLangEn.append(caps);
    keyLangEn.append(shiftCaps);
    const keyLangRu = document.createElement('div');
    keyLangRu.className = 'key-ru hidden';
    const caseLowerRu = document.createElement('span');
    caseLowerRu.className = 'case-lower';
    caseLowerRu.innerHTML = this.keyRu;
    const caseUpperRu = document.createElement('span');
    caseUpperRu.className = 'case-upper hidden';
    caseUpperRu.innerHTML = this.capsRu;
    const capsRu = document.createElement('span');
    capsRu.className = 'caps hidden';
    capsRu.innerHTML = this.capsRu;
    const shiftCapsRu = document.createElement('span');
    shiftCapsRu.className = 'shift-caps hidden';
    shiftCapsRu.innerHTML = this.shiftRu;
    keyLangRu.append(caseLowerRu);
    keyLangRu.append(caseUpperRu);
    keyLangRu.append(capsRu);
    keyLangRu.append(shiftCapsRu);
    key.append(keyLangEn);
    key.append(keyLangRu);
    return key;
  }
}
