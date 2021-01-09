//Listening to Clicks
for (var x=0; x<document.querySelectorAll('.btn').length;x++){
  document.querySelectorAll(".btn")[x].addEventListener("click", handleClick);
}

//Detecting key presses
document.addEventListener("keydown", onKey);
function onKey() {
  makeSound(event.key);
}

//Funtion that makes sound
function makeSound(key){
  animate(key);
  switch (key) {
    case "a":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
      break;
    case "s":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
      break;
    case "d":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
      break;
    case "f":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
      break;
    case "j":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
      break;
    case "k":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
      break;
    case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
      break;
    default:
  }
}

//Button animation
function animate(key){
  activebtn = document.querySelector("."+key)
  activebtn.classList.add("pressed")
  setTimeout(function(){
    activebtn.classList.remove("pressed");
  },100);
}
//Function that handles clicks.
function handleClick() {
  var btninnerhtml = this.innerHTML;
  makeSound(btninnerhtml);

}
