function makeSound(key) {
    switch(key) { /*Reads the inner html of every button, and based on that we assign
    the sound we want the button to do. 'this' works because the 'eventListener' is working, 
    based on the button it is clicked, so it knows the identity of the button.*/
        case "w":
            audio = new Audio("sounds/tom-1.mp3"); 
        break;
        case "a":
            audio = new Audio("sounds/tom-3.mp3"); 
        break;
        case "s":
            audio = new Audio("sounds/tom-4.mp3"); 
        break; 
        case "d":
            audio = new Audio("sounds/tom-2.mp3"); 
        break;
        case "j":
            audio = new Audio("sounds/snare.mp3"); 
        break;
        case "k":
            audio = new Audio("sounds/kick-bass.mp3"); 
        break;
        case "l":
            audio = new Audio("sounds/crash.mp3");
        break;
        default:
            alert("NO drum!");
        break;
    }
    audio.play();
}
var numberOfDrumButtons = document.querySelectorAll(".drum").length;//This works and it will give us
//the number of elements with the same class name. Important that querySelectorAll works as array 
//only it has a length value.
var audio;// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio

//Detecting button press:
for(var i = 0; i < numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        makeSound(this.innerHTML);
    });
}

//Detecting keyboard press:
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
});