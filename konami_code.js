const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

const index = 0;

function init() {
  document.body.addEventListener('keydown', keydownHandler)
}

function keydownHandler(event) {
  let key = parseInt(event.which);
  if (key === code[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}

init()




















// function init() {
//   let index = 0;

// // This is the function that would be invoked by the event listener.
//   function onKeyDownHandler(e) {
//     const key = parseInt(e.detail || e.which);
//     if (key === code[index]) {
//       index++;
  
//       if (index === code.length) {
//         alert("Hurray!");
  
//         index = 0;
//       }
//     } else {
//       index = 0;
//     }
//   }
  
//   document.addEventListener('keydown', onKeyDownHandler)
  
// }

// init()