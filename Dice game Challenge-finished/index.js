function playGame() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var dice1ImageSource = "images/dice" + randomNumber1 + ".png";
    var dice2ImageSource = "images/dice" + randomNumber2 + ".png";
    document.querySelector(".img1").setAttribute("src", dice1ImageSource);
    document.querySelector(".img2").setAttribute("src", dice2ImageSource);

    if (randomNumber1 > randomNumber2)
        document.querySelector("h1").innerHTML = "Player one wins!";
    else if (randomNumber1 < randomNumber2)
        document.querySelector("h1").innerHTML = "Player two wins!";
    else
        document.querySelector("h1").innerHTML = "It's a tie!";
}

/* document.querySelector("button").addEventListener("click", playGame);//Second way of making the button.
//Event listener is a method that awaits two parameters. The first event is the action: which we 
//specified is 'click', and the second one is what to do after the action is met, and in out case,
//to execute the method we created.
//For more info read: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
//and :https://developer.mozilla.org/en-US/docs/Web/Events */
