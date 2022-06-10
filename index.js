var n = document.querySelectorAll(".drum").length;

for(var i=0; i<n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        let button = this.innerHTML;
        makesound(button);
    });
}

document.addEventListener("keydown" , function(event){
    makesound(event.key);
})

function makesound(key){
    switch(key){
        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "f":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "j":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "k":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        default:
            console.log("Invalid click");
            break;
    }
}
