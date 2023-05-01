const keyboard=['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];
const visualkey=['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'return', 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '/', 'shift', 'control', 'option', 'command', ' ', 'command', 'option', '←', '↑', '↓', '→'];
document.onkeydown=function(event) {
  console.log(event.code);
}

function init() {
  let out='';
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
  document.body.innerHTML=out;
}
init();

document.onkeydown=function(event) {
  document.querySelector('.key__btn[data="' + event.code +'"]').classList.add('active');
};

document.onkeyup=function(event) {
  document.querySelector('.key__btn[data="' + event.code +'"]').classList.remove('active');
};

document.querySelectorAll('.key__btn').forEach(function(element) {
  element.onclick=function(event) {
    document.querySelectorAll('.key__btn').forEach(function(element) {
      element.classList.remove('active');
    });
    let code=this.getAttribute('data');
    this.classList.add('active');
  }
});