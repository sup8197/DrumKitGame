/// On click
var numberOfDrum = document.querySelectorAll(".drum").length;

for (i=0; i< numberOfDrum; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    var drumInnerHtml = this.innerHTML;
        playSound(drumInnerHtml);
        buttonAnimation(drumInnerHtml);
   
});
}

/// On keyboard press
document.addEventListener("keyup", function(event) {
    var keyboardKey = event.key;
    playSound(keyboardKey);
    buttonAnimation(keyboardKey);
});

function playSound(key) {
    switch (key) {
        case "w":
            var tomA = new Audio("./sounds/tom-1.mp3");
            tomA.play();
            break;
        case "a":
            var tomB = new Audio("./sounds/tom-2.mp3");
            tomB.play();
            break;
        case "s":
            var tomC = new Audio("./sounds/tom-3.mp3");
            tomC.play();
            break;
        case "d":
            var tomD = new Audio("./sounds/tom-4.mp3");
            tomD.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
    
        default: console.log(key);
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed"); 
    setTimeout(function() {
        activeButton.classList.remove("pressed");}, 100);
}

