
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",btnClick);

}

function btnClick()
{
  makeSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

document.addEventListener("keydown",keyClick);

function keyClick(chak){
  makeSound(chak.key);
  buttonAnimation(chak.key);
}

function makeSound(character)
{
  switch(character)
  {
    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;

    case "a":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "s":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "d":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    case "j":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "k":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;

    case "l":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();



  }

}

function buttonAnimation(currentKey)
{
  document.querySelector("." + currentKey).classList.add("pressed");

  setTimeout(function(){document.querySelector("." + currentKey).classList.remove("pressed");},100);
}
