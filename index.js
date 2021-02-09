let randomNumber1 =  Math.floor(Math.random() * 6 ) + 1;
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//2d dice 
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(randomNumber1 >randomNumber2) {
  document.querySelector("h3").innerHTML = "Player one win !";
}
else if(randomNumber2 > randomNumber1){
document.querySelector("h3").innerHTML = "player two win !";
}
else{
document.querySelector("h3").innerHTML = "Match Draw !";
}


