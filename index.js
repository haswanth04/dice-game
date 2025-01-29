var randomNumber1=Math.floor((Math.random())*6+1);
var diceimage="images/dice"+randomNumber1+".png"
document.querySelector(".img1").setAttribute("src",diceimage);
var randomNumber2=Math.floor((Math.random())*6+1);
var diceimage2="images/dice"+randomNumber2+".png"
document.querySelector(".img2").setAttribute("src",diceimage2)

var text=" "
if(randomNumber1>randomNumber2)
{
    text="Player 1 WINS🎉"
}else if(randomNumber1<randomNumber2)
{
    text="Player 2 WINS🎉"
}else{
    text="Draw Spin Again"
}

document.querySelector("h1").innerText=text;