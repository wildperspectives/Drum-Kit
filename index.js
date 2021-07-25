function makeSound(key)
{
  switch (key) {

    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    default:console.log(key);

  }
}

// Detecting Button Press
function buttonIdentification()
{
  var buttonInnerHtml = this.innerHTML;
  // we get the innerHTML of the button pressed(with the help of 'this') and pass it to the makeSound() function
  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);//animation method call for  buttonPress
}
//ex : if we press w on the button,then it is makeSound(w)

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++)  //iterating through all the buttons
{
document.querySelectorAll(".drum")[i].addEventListener("click",buttonIdentification);
//adding the event listener(to detect the click) to all the buttons one by one
//buttonIdentification is a Callback function
}


// Detecting keyBoard Press
function keyBoardPressIdentification(event)//the event that triggered the keydown is passed into the function
{
  makeSound(event.key);
  buttonAnimation(event.key); //animation method call for keyPress
  //the passed event conatins a property called key, which tells us which keyboard key was pressed
  //event lets us to tap into the event that triggered the event lsitener
  //key is basicaly the key value represented by the event,as to figure out which key on the keyboard got tapped essentially
}
//ex : if we press w on the keyboard,then it is makeSound(w)

document.addEventListener("keydown",keyBoardPressIdentification);
//adding the event listener to the entire document instead of any specific buuton or element
//keyBoardPressIdentification is a Callback function

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
//fuction to add animation to the button and keypress (i.e., flash is obtained when we press that button or key)
//we add the pressed class of css to javaScript element or object
// and after 1 0.1 second we remove that class
// we use timeout function for the producing the required delay
