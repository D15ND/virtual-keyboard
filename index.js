const keyboard=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Control', 'Alt', 'Meta', ' ', 'Meta', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp'];
document.onkeydown=function(event) {
  console.log(event);
  console.log(keyboard.push(key));
}

function init() {
  let out='';
  for (let i=0; i<keyboard.length; i++) {
    if (i==14 || i==28 || i==41 || i==53) {
      out+='<div class="clear__fix"></div>';
    }
    out+='<div class="key__btn">'+keyboard[i]+'</div>';
  }
  document.body.innerHTML=out;
}
init();