
var RandomNumber1=Math.floor(Math.random()*6)+1;

var RandomNumber2=Math.floor(Math.random()*6)+1;

Image1="images/dice"+RandomNumber1+".png";
Image2="images/dice"+RandomNumber2+".png";


document.querySelectorAll("img")[0].setAttribute("src",Image1);

document.querySelectorAll("img")[1].setAttribute("src",Image2);


if(RandomNumber1>RandomNumber2){
  document.querySelector("h1").innerHTML("Player1 Won");
}
else if (RandomNumber1<RandomNumber) {
    document.querySelector("h1").innerHTML("Player2 Won");
}else{
    document.querySelector("h1").innerHTML("Its a draw!");
}
