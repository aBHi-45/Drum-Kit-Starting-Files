var buttons = document.querySelectorAll("button");

function playSound(alphabet){
  switch (alphabet) {
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
      break;

    case "s":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "a":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
      break;

    case "j":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
      break;

    case "k":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
        break;

    case "l":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
      break;
    default:

  }
}

for(var i = 0; i< buttons.length; i++){
  buttons[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
  });
}

document.addEventListener("keypress", function(event){
  playSound(event.key);
  buttonAnimation(event.key);
})


function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.toggle("pressed");
  setTimeout(function (){
    activeButton.classList.toggle("pressed");
  }, 200);
}
