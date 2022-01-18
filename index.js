var Buttons = document.querySelectorAll(".drum");

function makeSound(keyPressed){
  switch (keyPressed) {
    case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;
    case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;
    case "s":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
        break;
    case "d":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;
    case "j":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
        break;
    case "k":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
        break;
    case "l":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
        break;
    default:
        console.log("undefined");
}
}

  document.addEventListener("keydown", function(event){
      // console.log(event);
      var buttonPressed = event.key;
      makeSound(buttonPressed);
      buttonDisappear(buttonPressed);
      } ) ;


for(var i = 0; i < Buttons.length; i++){
  Buttons[i].addEventListener("click", function () {
        var buttonPressed = this.innerHTML;
        makeSound(buttonPressed);
        buttonDisappear(buttonPressed);
  });
}

function buttonDisappear(clickedButton){
    var buttonDis = document.querySelector("."+clickedButton);
    buttonDis.classList.add("pressed");
    setTimeout(
      function(){
        buttonDis.classList.remove("pressed");
      }, 500
    );

}
