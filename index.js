let lang='EN';
const keyboard=['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];
const visualkey=['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete',
'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'return',
'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '/', 'shift',
'control', 'option', 'command', ' ', 'command', 'option', '←', '↑', '↓', '→'];
const visualkeyRu=[']', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete',
'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', "ё",
'caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'return',
'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', 'shift',
'control', 'option', 'command', ' ', 'command', 'option', '←', '↑', '↓', '→'];

function init(lang) {
  let out='';
  if(lang=='EN') {
    for (let i=0; i<visualkey.length; i++) {
      if (i==14 || i==28 || i==41 || i==53) {
        out+='<div class="clear__fix"></div>';
      }
      if (i==60) {
        out+='<div class="container"><div class="key__btn" data="'+ keyboard[i]+'">'+visualkey[i]+'</div><div class="key__btn" data="'+ keyboard[i+1]+'">'+visualkey[i+1]+'</div></div>';
        i++;
        continue;
      }
      out+='<div class="key__btn" data="'+ keyboard[i]+'">'+visualkey[i]+'</div>';
    }
  } else if (lang=='RU') {
    for (let i=0; i<visualkeyRu.length; i++) {
      if (i==14 || i==28 || i==41 || i==53) {
        out+='<div class="clear__fix"></div>';
      }
      if (i==60) {
        out+='<div class="container"><div class="key__btn" data="'+ keyboard[i]+'">'+visualkeyRu[i]+'</div><div class="key__btn" data="'+ keyboard[i+1]+'">'+visualkey[i+1]+'</div></div>';
        i++;
        continue;
      }
      out+='<div class="key__btn" data="'+ keyboard[i]+'">'+visualkeyRu[i]+'</div>';
    }
  }
  const heading = document.createElement('h1');
  heading.className = 'main-heading';
  heading.innerHTML = 'RSS Виртуальная клавиатура';
  const input = document.createElement('textarea');
  input.className = 'input-text';
  const octext=document.createElement('p');
  octext.className='oc-paragraph';
  octext.innerHTML='Клавиатура создана на macOS';
  const changlang=document.createElement('p');
  changlang.className='c-lang';
  changlang.innerHTML='Для переключения языка:  <span class="color-text"> левый control </span> + <span class="color-text">левый command </span>';
  const keybo=document.createElement('div');
  keybo.className='keybo-h';
  keybo.innerHTML=out;
  document.body.prepend(input);
  document.body.prepend(changlang);
  document.body.prepend(octext);
  document.body.prepend(heading);
  document.body.append(keybo);
  zov();
};

document.onkeydown=function(event) {
  document.querySelector('.key__btn[data="' + event.code +'"]').classList.add('active');
  console.log(document.querySelector('.key__btn[data="' + event.code +'"]'));
  if (event.ctrlKey && event.metaKey) {
    if (lang=='EN') {
      lang='RU';
      console.log(lang);
      document.body.innerHTML='';
      init(lang);
    } else {
      lang='EN'
      console.log(lang);
      document.body.innerHTML='';
      init(lang);
    }
  }
};

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function letLocalStorage() {
  lang = localStorage.getItem('lang') || 'EN';
  init(lang);
}
window.addEventListener('load', letLocalStorage);

document.onkeyup=function(event) {
  document.querySelector('.key__btn[data="' + event.code +'"]').classList.remove('active');
};

function zov() {
  document.querySelectorAll('.key__btn').forEach(function(element) {
    element.onmousedown=function(event) {
      document.querySelectorAll('.key__btn').forEach(function(element) {
        element.classList.remove('active');
      });
    };
    element.onmouseup=function(event) {
      document.querySelectorAll('.key__btn').forEach(function(event) {
        element.classList.add('active');
      });
    };
  });
};
