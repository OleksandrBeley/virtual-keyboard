/* eslint-disable no-restricted-syntax */
const keyboardEng = {
  Backquote: '`', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', minus: '-', equal: '=', Backspace: 'Backspace', Tab: 'Tab', KeyQ: 'q', KeyW: 'w', KeyE: 'e', KeyR: 'r', KeyT: 't', KeyY: 'y', KeyU: 'u', KeyI: 'i', KeyO: 'o', KeyP: 'p', BracketLeft: '[', BracketRight: ']', Backslash: '\\', Delete: 'Del', CapsLock: 'CapsLock', KeyA: 'a', KeyS: 's', KeyD: 'd', KeyF: 'f', KeyG: 'g', KeyH: 'h', KeyJ: 'j', KeyK: 'k', KeyL: 'l', Semicolon: ';', Quote: '\'', Enter: 'Enter', ShiftLeft: 'Shift', KeyZ: 'z', KeyX: 'x', KeyC: 'c', KeyV: 'v', KeyB: 'b', KeyN: 'n', KeyM: 'm', Comma: ',', Period: '.', Slash: '/', ArrowUp: '▲', ShiftRight: 'Shift', ControlLeft: 'Ctrl', MetaLeft: 'Win', AltLeft: 'Alt', Space: ' ', AltRight: 'Alt', ArrowLeft: '◄', ArrowDown: '▼', ArrowRight: '►', ControlRight: 'Ctrl',

};
const keyboardRus = {
  Backquote: 'ё', Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5', Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0', minus: '-', equal: '=', Backspace: 'Удалить', Tab: 'Tab', KeyQ: 'й', KeyW: 'ц', KeyE: 'у', KeyR: 'к', KeyT: 'е', KeyY: 'н', KeyU: 'г', KeyI: 'ш', KeyO: 'щ', KeyP: 'з', BracketLeft: 'х', BracketRight: 'ъ', Backslash: '\\', Delete: 'Del', CapsLock: 'CapsLock', KeyA: 'ф', KeyS: 'ы', KeyD: 'в', KeyF: 'а', KeyG: 'п', KeyH: 'р', KeyJ: 'о', KeyK: 'л', KeyL: 'д', Semicolon: 'ж', Quote: 'э', Enter: 'Enter', ShiftLeft: 'Shift', KeyZ: 'я', KeyX: 'ч', KeyC: 'с', KeyV: 'м', KeyB: 'и', KeyN: 'т', KeyM: 'ь', Comma: 'б', Period: 'ю', Slash: '.', ArrowUp: '▲', ShiftRight: 'Shift', ControlLeft: 'Ctrl', MetaLeft: 'Win', AltLeft: 'Alt', Space: ' ', AltRight: 'Alt', ArrowLeft: '◄', ArrowDown: '▼', ArrowRight: '►', ControlRight: 'Ctrl',
};

// Цикл добавление клавиш
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
function addBtn(objLanguage) {
  for (const [key, value] of Object.entries(objLanguage)) {
    const button = document.createElement('div');
    if (key === 'Backspace' || key === 'CapsLock' || key === 'ShiftLeft' || key === 'BackspaceRus') {
      button.classList.add('long-btn');
    } else if (key === 'Space') {
      button.classList.add('space-btn');
    } else if (key === 'Tab') {
      button.classList.add('tab-btn');
    } else if (key === 'Enter' || key === 'ShiftRight') {
      button.classList.add('mid-btn');
    } else if (key === 'Delete') {
      button.classList.add('del-btn');
    }
    button.classList.add('btn');
    button.setAttribute('data-key', key);
    centerDiv.append(button);
    button.innerHTML = value;
  }
}

addBtn(keyboardEng);

// Печатание текста в поле input
const btns = document.querySelectorAll('.btn');
body.addEventListener('keydown', (event) => {

  for (const item of btns) {
    if (item.getAttribute('data-key') === event.code) {
      item.classList.add('active');
      console.log(1);
    }
  }
  console.log(event);
});

body.addEventListener('keyup', (event) => {
  for (const item of btns) {
    if (item.getAttribute('data-key') === event.code) {
      item.classList.remove('active');
    }
  }
  if (!event.key === 'Backspace') {
    textArea.innerHTML += event.key;
  }
  for (const key of btns) {
    key.addEventListener('click', () => {
      textArea.innerHTML += key.textContent;
    });
  }

  console.log(event);
});

