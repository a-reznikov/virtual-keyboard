export class Key {
  constructor({
    key, code, caps, shift,
  }) {
    this.key = key;
    this.code = code;
    this.caps = caps;
    this.shift = shift;
  }

  creatKey() {
    const key = document.createElement('div');
    key.className = 'key';
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
    key.append(keyLangEn);
    return key;
  }
}
