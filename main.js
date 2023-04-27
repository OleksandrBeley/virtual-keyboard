/* eslint-disable no-restricted-syntax */
const keyboardEng = {
  backqoute: '`', digit1: '1', digit2: '2', digit3: '3', digit4: '4', digit5: '5', digit6: '6', digit7: '7', digit8: '8', digit9: '9', digit0: '0', minus: '-', equal: '=', BackSpace: 'BackSpace', tab: 'Tab', KeyQ: 'q', KeyW: 'w', KeyE: 'e', KeyR: 'r', KeyT: 't', KeyY: 'y', KeyU: 'u', KeyI: 'i', KeyO: 'o', KeyP: 'p', KeyBracketLeft: '[', KeyBracketRight: ']', KeyBackSlash: '\\', KeyDel: 'Del', KeyCapsLock: 'CapsLock', KeyA: 'a', KeyS: 's', KeyD: 'd', KeyF: 'f', KeyG: 'g', KeyH: 'h', KeyJ: 'j', KeyK: 'k', KeyL: 'l', KeySemiColon: ';', KeySingleQuote: '\'', KeyEnter: 'Enter', KeyLeftShift: 'Shift', KeyZ: 'z', KeyX: 'x', KeyC: 'c', KeyV: 'v', KeyB: 'b', KeyN: 'n', KeyM: 'm', KeyComma: ',', KeyDot: '.', KeyFrontSlash: '/', KeyArrowUp: '▲', KeyRightShift: 'Shift', KeyCtrl: 'Ctrl', KeyLeftWin: 'Win', keyLeftAlt: 'Alt', KeySpace: ' ', rightAlt: 'Alt', keyArrowLeft: '◄', keyArrowDown: '▼', keyArrowRight: '►', keyRightCtrl: 'Ctrl',

};
const body = document.querySelector('.body');

const centerDiv = document.createElement('div');
centerDiv.classList.add('center-div');
body.prepend(centerDiv);

const textArea = document.createElement('textarea');
textArea.classList.add('text-area');
body.prepend(textArea);

const title = document.createElement('h1');
const titleText = 'Моя клавиатура';
title.classList.add('title');
title.innerHTML = titleText;
body.prepend(title);

// Цикл добавление клавиш
function addBtn() {
  for (const [key, value] of Object.entries(keyboardEng)) {
    const button = document.createElement('div');
    if (key === 'BackSpace' || key === 'KeyCapsLock' || key === 'KeyLeftShift') {
      button.classList.add('long-btn');
    } else if (key === 'KeySpace') {
      button.classList.add('space-btn');
    } else if (key === 'tab') {
      button.classList.add('tab-btn');
    } else if (key === 'KeyEnter' || key === 'KeyRightShift') {
      button.classList.add('mid-btn');
    } else if (key === 'KeyDel') {
      button.classList.add('del-btn');
    }
    button.classList.add('btn');
    centerDiv.append(button);
    button.innerHTML = value;
  }
}
addBtn();
const btn = document.querySelectorAll('.btn');
body.addEventListener('keydown', (event) => {
  for (let item of btn) {
    if (item.innerHTML === event.key) {
      item.classList.add('active');
    }
  }
  textArea.innerHTML += event.key;

  console.log(event);
})
body.addEventListener('keyup', (event) => {
  for (let item of btn) {
    if (item.innerHTML === event.key) {
      item.classList.remove('active');
    }
  }
  textArea.innerHTML += event.key;
  console.log(event);
})
