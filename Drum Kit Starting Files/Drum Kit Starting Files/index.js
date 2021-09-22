
var a=document.querySelectorAll("button");

for(var i=0;i<=a.length;i++){
  a[i].addEventListener("click", function(){
  var audio=new Audio("sounds/tom-3.mp3");
  audio.play();

  });
}
