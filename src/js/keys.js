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
    caseLower.textContent = this.key;
    const caseUpper = document.createElement('span');
    caseUpper.className = 'case-upper hidden';
    caseUpper.textContent = this.caps;
    const caps = document.createElement('span');
    caps.className = 'caps hidden';
    caps.textContent = this.caps;
    const shiftCaps = document.createElement('span');
    shiftCaps.className = 'shift-caps hidden';
    shiftCaps.textContent = this.shift;
    keyLangEn.append(caseLower);
    keyLangEn.append(caseUpper);
    keyLangEn.append(caps);
    keyLangEn.append(shiftCaps);
    const keyLangRu = document.createElement('div');
    keyLangRu.className = 'key-ru hidden';
    const caseLowerRu = document.createElement('span');
    caseLowerRu.className = 'case-lower';
    caseLowerRu.textContent = this.keyRu;
    const caseUpperRu = document.createElement('span');
    caseUpperRu.className = 'case-upper hidden';
    caseUpperRu.textContent = this.capsRu;
    const capsRu = document.createElement('span');
    capsRu.className = 'caps hidden';
    capsRu.textContent = this.capsRu;
    const shiftCapsRu = document.createElement('span');
    shiftCapsRu.className = 'shift-caps hidden';
    shiftCapsRu.textContent = this.shiftRu;
    keyLangRu.append(caseLowerRu);
    keyLangRu.append(caseUpperRu);
    keyLangRu.append(capsRu);
    keyLangRu.append(shiftCapsRu);
    key.append(keyLangEn);
    key.append(keyLangRu);
    return key;
  }
}
