var a = document.querySelectorAll("button");

document.addEventListener("keypress",function(e){
     playSound(e.key);
});

for (var i = 0; i <= a.length; i++) {
  a[i].addEventListener("click", function() {
    // var audio=new Audio("sounds/tom-3.mp3");
    // audio.play();
    // this.style.color="white";
    var audio;
    playSound(this.innerHTML);

  });
}

function playSound(key){
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");

      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");

      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");

      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");

      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");

      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");

      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");

      break;

    default:
      alert("what its not the key that will play this!");
      break;

  }
  audio.play();
}
