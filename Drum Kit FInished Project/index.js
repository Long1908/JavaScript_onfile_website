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
        break;
    }
    audio.play();
}
function buttonAnimation(key) {
    var currentActiveKey = document.querySelector("." + key); // key has a right now a single letter value, so if want to
    //specify the class we are working with, we need to concatinate with a dot in front
    currentActiveKey.classList.add("pressed"); /*We are adding the class
    'pressed' to give this sense of animation in our drub website. Notice how when we specify, what
    class we want to add to the button, we don't put dot in front in this case, when we call the 
    function 'add'*/
    setTimeout(function() {
       currentActiveKey.classList.remove("pressed");
    }, 100); /*If we only added pressed class to a button, then the corresponding button will 
    always stay pressed. So to complete our animation, we call a special method called setTimeout,
    where its' input are a function to call, and a timer in which it will call the function, after
    the timer has ran out(in mili-seconds)*/
}
var numberOfDrumButtons = document.querySelectorAll(".drum").length;//This works and it will give us
//the number of elements with the same class name. Important that querySelectorAll works as array 
//only it has a length value.
var audio;// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio

//Detecting button press:
for(var i = 0; i < numberOfDrumButtons; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        makeSound(this.innerHTML);//this.innerHTML will return the text of the button we clicked
        buttonAnimation(this.innerHTML);
    });
    
}

//Detecting keyboard press:
document.addEventListener("keydown", function(event) {
    makeSound(event.key);//event.key will return the letter of the corresponding key
    buttonAnimation(event.key);
});

