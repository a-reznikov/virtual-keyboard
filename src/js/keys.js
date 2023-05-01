export class Key {
  constructor({
    key, code, caps, shift, capsShift, keyRu, capsRu, shiftRu, capsShiftRu,
  }) {
    this.key = key;
    this.code = code;
    this.caps = caps;
    this.shift = shift;
    this.capsShift = capsShift;
    this.keyRu = keyRu;
    this.capsRu = capsRu;
    this.shiftRu = shiftRu;
    this.capsShiftRu = capsShiftRu;
  }

  creatKey() {
    const key = document.createElement('div');
    key.className = `key ${this.code}`;
    const keyLangEn = document.createElement('div');
    keyLangEn.className = 'key-en';
    const caseLower = document.createElement('span');
    caseLower.className = 'case-lower';
    caseLower.innerHTML = this.key;
    const caps = document.createElement('span');
    caps.className = 'caps hidden';
    caps.innerHTML = this.caps;
    const shift = document.createElement('span');
    shift.className = 'shift hidden';
    shift.innerHTML = this.shift;
    const capsShift = document.createElement('span');
    capsShift.className = 'caps-shift hidden';
    capsShift.innerHTML = this.capsShift;
    keyLangEn.append(caseLower);
    keyLangEn.append(caps);
    keyLangEn.append(shift);
    keyLangEn.append(capsShift);
    const keyLangRu = document.createElement('div');
    keyLangRu.className = 'key-ru hidden';
    const caseLowerRu = document.createElement('span');
    caseLowerRu.className = 'case-lower';
    caseLowerRu.innerHTML = this.keyRu;
    const capsRu = document.createElement('span');
    capsRu.className = 'caps hidden';
    capsRu.innerHTML = this.capsRu;
    const shiftRu = document.createElement('span');
    shiftRu.className = 'shift hidden';
    shiftRu.innerHTML = this.shiftRu;
    const capsShiftRu = document.createElement('span');
    capsShiftRu.className = 'caps-shift hidden';
    capsShiftRu.innerHTML = this.capsShiftRu;
    keyLangRu.append(caseLowerRu);
    keyLangRu.append(capsRu);
    keyLangRu.append(shiftRu);
    keyLangRu.append(capsShiftRu);
    key.append(keyLangEn);
    key.append(keyLangRu);
    return key;
  }
}
