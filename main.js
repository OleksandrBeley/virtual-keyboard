/* eslint-disable no-restricted-syntax */
const keyboardEng = {
  backqoute: '`', digit1: '1', digit2: '2', digit3: '3', digit4: '4', digit5: '5', digit6: '6', digit7: '7', digit8: '8', digit9: '9', digit0: '0', minus: '-', equal: '=', delete: 'BackSpace', tab: 'Tab', keyQ: 'q', keyW: 'w', keyE: 'e', keyR: 'r', keyT: 't', keyY: 'y', keyU: 'u', keyI: 'i', keyO: 'o', keyP: 'p', keyBracketLeft: '[', keyBracketRight: ']', keyBackSlash: '\\', keyDel: 'Del', keyCapsLock: 'CapsLock', keyA: 'a', keyS: 's', keyD: 'd', keyF: 'f', keyG: 'g', keyH: 'h', keyJ: 'j', keyK: 'k', keyL: 'l', keySemiColon: ';', keySingleQuote: '\'', keyEnter: 'Enter', keyLeftShift: 'Shift', keyZ: 'z', keyX: 'x', keyC: 'c', keyV: 'v', keyB: 'b', keyN: 'n', keyM: 'm', keyComma: ',', keyDot: '.', keyFrontSlash: '/', keyArrowUp: '▲', keyRightShift: 'Shift', keyCtrl: 'Ctrl', keyLeftWin: 'Win', keyLeftAlt: 'Alt', keySpace: ' ', rightAlt: 'Alt', keyArrowLeft: '◄', keyArrowDown: '▼', keyArrowRight: '►', keyRightCtrl: 'Ctrl',

};
const body = document.querySelector('.body');
const centerDiv = document.createElement('div');
centerDiv.classList.add('center-div');
body.prepend(centerDiv);
const textArea = document.createElement('textarea');
textArea.classList.add('text-area');
body.prepend(textArea);

const titleText = 'Моя клавиатура';
const title = document.createElement('h1');
title.classList.add('title');
title.innerHTML = titleText;
body.prepend(title);

for (const [key, value] of Object.entries(keyboardEng)) {
  const button = document.createElement('div');
  if (key === 'delete' || key === 'keyCapsLock' || key === 'keyLeftShift') {
    button.classList.add('long-btn');
  } else if (key === 'keySpace') {
    button.classList.add('space-btn');
  } else if (key === 'tab') {
    button.classList.add('tab-btn');
  } else if (key === 'keyEnter' || key === 'keyRightShift') {
    button.classList.add('mid-btn');
  } else if (key === 'keyDel') {
    button.classList.add('del-btn');
  }
  button.classList.add('btn');
  centerDiv.append(button);
  button.innerHTML = value;
}
