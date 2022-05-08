let keyboard = [{
  "key": "`",
  "keyRu": "ё",
  "code": "Backquote",
},
{
  "key": "1",
  "code": "Digit1",
},
{
  "key": "2",
  "code": "Digit2",
}
  ,
{
  "key": "3",
  "code": "Digit3",
},
{
  "key": "4",
  "code": "Digit4",
}
  ,
{
  "key": "5",
  "code": "Digit5",
},
{
  "key": "6",
  "code": "Digit6",
},
{
  "key": "7",
  "code": "Digit7",
},
{
  "key": "8",
  "code": "Digit8",
},
{
  "key": "9",
  "code": "Digit9",
},
{
  "key": "0",
  "code": "Digit0",
},
{
  "key": "-",
  "code": "Minus",
},
{
  "key": "=",
  "code": "Equal",
},
{
  "key": "Backspace",
  "code": "Backspace",
},
{
  "key": "Tab",
  "code": "Tab",
},
{
  "key": "q",
  "keyRu": "й",
  "code": "KeyQ",
},
{
  "key": "w",
  "keyRu": "ц",
  "code": "KeyW",
},
{
  "key": "e",
  "keyRu": "у",
  "code": "KeyE",
},
{
  "key": "r",
  "keyRu": "к",
  "code": "KeyR",
},
{
  "key": "t",
  "keyRu": "е",
  "code": "KeyT",
},
{
  "key": "y",
  "keyRu": "н",
  "code": "KeyY",
},
{
  "key": "u",
  "keyRu": "г",
  "code": "KeyU",
},
{
  "key": "i",
  "keyRu": "ш",
  "code": "KeyI",
},
{
  "key": "o",
  "keyRu": "щ",
  "code": "KeyO",
},
{
  "key": "p",
  "keyRu": "з",
  "code": "KeyP",
},
{
  "key": "[",
  "keyRu": "х",
  "code": "BracketLeft",
},
{
  "key": "]",
  "keyRu": "ъ",
  "code": "BracketRight",
},
{
  "key": "\\",
  "code": "Backslash",
},
{
  "key": "Delete",
  "code": "Delete",
},
{
  "key": "CapsLock",
  "code": "CapsLock",
},
{
  "key": "a",
  "keyRu": "ф",
  "code": "KeyA",
},
{
  "key": "s",
  "keyRu": "ы",
  "code": "KeyS",
},
{
  "key": "d",
  "keyRu": "в",
  "code": "KeyD",
},
{
  "key": "f",
  "keyRu": "а",
  "code": "KeyF",
},
{
  "key": "g",
  "keyRu": "п",
  "code": "KeyG",
},
{
  "key": "h",
  "keyRu": "р",
  "code": "KeyH",
},
{
  "key": "j",
  "keyRu": "о",
  "code": "KeyJ",
},
{
  "key": "k",
  "keyRu": "л",
  "code": "KeyK",
},
{
  "key": "l",
  "keyRu": "д",
  "code": "KeyL",
},
{
  "key": ";",
  "keyRu": "ж",
  "code": "Semicolon",
},
{
  "key": "'",
  "keyRu": "э",
  "code": "Quote",
},
{
  "key": "Enter",
  "code": "Enter",
},
{
  "key": "Shift",
  "code": "ShiftLeft",
},
{
  "key": "z",
  "keyRu": "я",
  "code": "KeyZ",
},
{
  "key": "x",
  "keyRu": "ч",
  "code": "KeyX",
},
{
  "key": "c",
  "keyRu": "с",
  "code": "KeyC",
},
{
  "key": "v",
  "keyRu": "м",
  "code": "KeyV",
},
{
  "key": "b",
  "keyRu": "и",
  "code": "KeyB",
},
{
  "key": "n",
  "keyRu": "т",
  "code": "KeyN",
},
{
  "key": "m",
  "keyRu": "ь",
  "code": "KeyM",
},
{
  "key": ",",
  "keyRu": "б",
  "code": "Comma",
},
{
  "key": ".",
  "keyRu": "ю",
  "code": "Period",
},
{
  "key": "/",
  "keyRu": ".",
  "code": "Slash",
},
{
  "key": "↑",
  "code": "ArrowUp",
},
{
  "key": "Shift",
  "code": "ShiftRight",
},
{
  "key": "Ctrl",
  "code": "ControlLeft",
},
{
  "key": "Meta",
  "code": "MetaLeft",
},
{
  "key": "Alt",
  "code": "AltLeft",
},
{
  "key": " ",
  "code": "Space",
},
{
  "key": "Alt",
  "code": "AltRight",
},
{
  "key": "←",
  "code": "ArrowLeft",

},
{
  "key": "↓",
  "code": "ArrowDown",
},
{
  "key": "→",
  "code": "ArrowRight",
},
{
  "key": "Ctrl",
  "code": "ControlRight",
}
]


// создаю клавиатуру

const keyBoardWrapper = document.createElement('div');
keyBoardWrapper.classList.add('keyBoardWrapper');
document.body.append(keyBoardWrapper)

class Text {
  constructor() {
    this.content = '';
  }

  ap() {
    let h1 = document.createElement('h1');
    h1.classList.add('title')
    h1.innerText = this.content;
    keyBoardWrapper.append(h1);
  }
}

const title = new Text();
title.content = 'RSS Виртуальная клавиатура';
title.ap();

const input = document.createElement('textarea');
input.classList.add('input');
keyBoardWrapper.append(input);

const board = document.createElement('div');
board.classList.add('board');
keyBoardWrapper.append(board);

let shh = 'down'


class KeyCreator {
  constructor() {
    this.content = '';
  }

  ap() {
    let el = document.createElement('div');
    el.classList.add('key')
    el.innerText = this.content;
    board.append(el);
  }
}




class Keyboard{
  constructor(){
    this.qqqq = [];
    for (let i=0; i < 64; i++){
      let key = new KeyCreator();
      this.qqqq.push(key)
    }
  }

  eng() {

    for (let i = 0; i < keyboard.length; i++) {
      this.qqqq[i].content = keyboard[i].key;
      this.qqqq[i].ap();
      // this.qqqq[i].changecontent();

    }
  }

  ru() {
    for (let i = 0; i < keyboard.length; i++) {
      if (keyboard[i].keyRu == undefined) {
        this.qqqq[i].content = keyboard[i].key;
      } else {
        this.qqqq[i].content = keyboard[i].keyRu;
      }
      this.qqqq[i].ap();
    }
  }

}

let virtual_keyboard = new Keyboard();
virtual_keyboard.eng()
// console.log(eng.qqqq[14].content)
let lang = 'eng';


function rr () {
  board.textContent = '';
  virtual_keyboard.ru()
  lang = 'ru'
  styles()
}
function ee () {
  board.textContent = '';
  virtual_keyboard.eng()
  lang = 'eng';
  styles()
}




let flag = false;  //для capsLock виртуальной и реальной//

// реальная клавиатура


document.addEventListener('keydown', keydown)

function keydown(event) {
  let onkeydown = event.code


  // для всех объектов из массива keyboard добавляем символ в textarea:
  keyboard.forEach(elem => {

    if (elem.code == onkeydown) {

      //клавиша Backspace на реальной клавиатуре:    
      if (elem.code == "Backspace") {
        let text = input.textContent;
        text = text.substring(0, text.length - 1);
        input.textContent = text
        console.log(text)

        //клавиша enter на реальной клавиатуре:            
      } else if (elem.code == "Enter") {
        input.textContent += '\n'


        //клавиша ShiftLeft  на реальной клавиатуре:  
      } else if (elem.code == "ShiftLeft") {
        
        if (shh == 'up'){
          shdown()
        }else{
          shup()
        } 

        //ДОБАВИТЬ ДОП КЛАВИШИ НА ШИФТ
        //клавиша ShiftRight на реальной клавиатуре:  
      } else if (elem.code == "ShiftRight") {
  
        if (shh == 'up'){
          shdown()
        }else{
          shup()
        } 

        //ДОБАВИТЬ ДОП КЛАВИШИ НА ШИФТ
        //клавиша AltRight на реальной клавиатуре:  
      } else if (elem.code == "AltRight") {
        //ДОБАВИТЬ
        input.textContent = input.textContent;


        //клавиша Tab на реальной клавиатуре:  
      } else if (elem.code == "Tab") {

        
        //ДОБАВИТЬ
        input.textContent = input.textContent + ' ';


        //клавиша Ctrl на реальной клавиатуре:  
      } else if (elem.code == "ControlLeft" || elem.code == "ControlRight") {
        
        //ДОБАВИТЬ
        input.textContent = input.textContent;


        //клавиша AltLeft на реальной клавиатуре:  
      } else if (elem.code == "AltLeft") {
        //ДОБАВИТЬ
        input.textContent = input.textContent;

        //клавиша capsLock на реальной клавиатуре:  
      } else if (elem.code == "CapsLock") {

        if (flag == false) {
          keyboard.forEach(elem => { elem.key = elem.key.toUpperCase() })
          keys.forEach(elem => {
            if (!elem.classList.contains('keyBtn')) {
              elem.textContent = elem.textContent.toUpperCase();
            }
          })
          flag = true

        } else {
          keyboard.forEach(elem => { elem.key = elem.key.toLowerCase() })
          keys.forEach(elem => {
            if (!elem.classList.contains('keyBtn')) {
              elem.textContent = elem.textContent.toLowerCase();
            }
          })
          
          flag = false
        }

      } else {
        if (lang == 'eng') {
        input.textContent += elem.key;
        } else {
          input.textContent += elem.keyRu;
        }
        //добавить правило для языка
      }
    }
  });



  
  
  
  // // для всех div-клавиш добавляем анимацию нажатия:
  // keys.forEach(element => {
    
  //   //======== ВОТ ЗДЕСЬ ПРОБЛЕМА, ГОРИТ ПРОБЕЛ:======//
  //   if (element.classList.contains(event.key) || element.classList.contains('space')) {
  //     if (element.classList.contains('keyBtn')) {
  //       element.classList.toggle('removeSymbol')
  //     } else {
  //       element.classList.toggle('removeLetter')
  //     }
  //   }
    
  // });
  
}

// document.addEventListener('keydown', animationDown)

// function animationDown (event){
//   keys.forEach(element => {
//     element.classList.remove('removeSymbol');
//     element.classList.remove('removeLetter');
//   });

//   console.log(event.code)
//   document.querySelector(`.${event.code}`).classList.add('removeSymbol')
  

//     // keys[58].classList.add('removeSymbol')
  
// }

// document.addEventListener('keyup', animationUp)

// function animationUp (){
//   console.log('Up')
//   keys.forEach(element => {
  
  //     if (element.classList.contains('keyBtn')) {
    //       element.classList.remove('removeSymbol')
    //     } else {
      //       element.classList.remove('removeLetter')
      //     }
      
      //   });
      
      // }
      
      
      
      
      
      
      
      
      
      
      
      // функция для шифта:
      const arr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']
      function shup(){
        for (let i=0; i < keys.length - 51; i++){
          keys[i].textContent = arr[i];
          shh ='up'
        }
      }
      function shdown(){
        for (let i=0; i < keys.length - 51; i++){
          keys[i].textContent = keyboard[i].key;
          shh ='down'
        }
      }

// виртуальная клавиатура

const letterLayout = [
  "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=",
  "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
  "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
  "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
];

// const keys = document.querySelectorAll('.key');

// добавляю классы для виртуальной клавиатуры

// rr()
styles()
function styles() {
  const keys = document.querySelectorAll('.key');

  for (i = 0; i < keys.length; i++) {
    if (keys[i].textContent !== ' ') {
      keys[i].classList.add(`${keys[i].textContent}`)
    }
    if (!letterLayout.includes(keys[i].textContent)) {
      if (keys[i].textContent === ' ') {
        keys[i].classList.add('Space')
        keys[i].classList.add('keyBtn')
      } else {
        keys[i].classList.add(`${keys[i].textContent}`)
        keys[i].classList.add('keyBtn')
      }
    }
  }
}

// переключение языка. одновременно нажатие клавиш alt +ctrl
let keys = document.querySelectorAll('.key');

function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', function (event) {
    pressed.add(event.code);

    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }

    pressed.clear();

    func();
  });

  document.addEventListener('keyup', function (event) {
    pressed.delete(event.code);
    keys = document.querySelectorAll('.key')
  });

}

runOnKeys(function () {

  if (lang == 'eng') {

    rr ()
    keys = document.querySelectorAll('.key')
   virtKeyAction()
    lang = 'ru'
    
  } else {

    ee ()
    keys = document.querySelectorAll('.key')
    
    virtKeyAction()
    lang = 'eng';

    
  }
  keys = document.querySelectorAll('.key')
}, "ControlLeft", "AltLeft");





// добавляю обработчики клика на виртуальные кнопки


function virtKeyAction(){
  keys.forEach(element => {

    if (element.classList.contains('keyBtn')) {
      element.addEventListener('click', function (event) {

        //клавиша Backspace на виртуальной клавиатуре:
        if (event.target.classList.contains('Backspace')) {
          event.target.classList.toggle('removeSymbol')

          let text = input.textContent;
          text = text.substring(0, text.length - 1);
          input.textContent = text
          console.log(text)

          //клавиша CapsLock на виртуальной клавиатуре:
        } else if (event.target.classList.contains('CapsLock')) {
          event.target.classList.toggle('removeSymbol')

          if (flag == false) {
            keys.forEach(elem => {
              if (!elem.classList.contains('keyBtn')) {
                elem.textContent = elem.textContent.toUpperCase();
                flag = true;
              }
            })
          } else {
            keys.forEach(elem => {
              if (!elem.classList.contains('keyBtn')) {
                elem.textContent = elem.textContent.toLowerCase();
                flag = false;
              }
            })
          }

          //клавиша Delete на виртуальной клавиатуре:
        } else if (event.target.classList.contains('Delete')) {
          event.target.classList.toggle('removeSymbol')
          // ====== ДОБАВИТЬ======//


          //клавиша enter на виртуальной клавиатуре:
        } else if (event.target.classList.contains('Enter')) {
          event.target.classList.toggle('removeSymbol')
          input.textContent += '\n'
        }

        //клавиша Alt на виртуальной клавиатуре:
        else if (event.target.classList.contains('Alt')) {
          event.target.classList.toggle('removeSymbol')
          input.textContent += ''
        }           // ====== ДОБАВИТЬ======//

        //клавишИ Shift на виртуальной клавиатуре:
        else if (event.target.classList.contains('Shift')) {
          event.target.classList.toggle('removeSymbol')
          if (shh == 'up'){
            shdown()
          }else{
            shup()
          } 
        }       

        else {
          event.target.classList.toggle('removeSymbol')
          input.textContent += element.textContent;
        }

      })
    } else {
      element.addEventListener('click', function (event) {

        event.target.classList.toggle('removeLetter')
        input.textContent += element.textContent;

      })
    }

  });
}

virtKeyAction()



// анимация клавиатуры

