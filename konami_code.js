const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function keydownHandler(event) {
  const key = parseInt(event.which);
  if (key === code[index]) {
    index++;

    if (index === code.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}


// function keydownHandlerBetter(event) {
//     const key = parseInt(event.which);
    
//     if (key === code[index] && index === code.length - 1) {
//       alert("Hurray!")
//       index = 0;
//     } 
    
//     if (key === code[index] && index < code.length - 1) {
//       index++;
//     }
    
//     if (key !== code[index]) {
//       index = 0;
//     }
    
// }

function keydownHandlerEVENBetter(event) {
    const key = parseInt(event.which);
    
    const enteredKeyRight = key === code[index]
    const reachedTheEnd = index === code.length - 1;
    
    if(enteredKeyRight && reachedTheEnd) {
      alert("Hurray!");
      index = 0;
    }
    
    if(enteredKeyRight && !reachedTheEnd) {
      index++
    }
    
    if (!enteredKeyRight) {
      index = 0;
    }
}

function init() {
  document.addEventListener('keydown', keydownHandler)
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