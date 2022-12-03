var enterButton = document.getElementById("enterButton");
var againButton = document.getElementById("againButton");
var output = document.getElementById("output");

var number = Math.ceil(Math.random()*100);

function guess (){
    var uInput = document.getElementById("uInput").value;
    if(uInput == number){
        output.innerHTML = "You guessed right" + "," + number;
        output.style.color = "green";
    }
    else if(uInput>number && uInput<100){
        output.innerHTML = "You guessed too high";
    }
    else if(uInput<number && uInput>1){
        output.innerHTML = "You guessed too low";
    }
    else if(uInput<1){
        output.innerHTML = "Bruh! The number should be between 1 and 100!";
    }
    else if(isNaN(uInput)){
        output.innerHTML = "Alaye! You have to enter a Number!";
    }
    else{
        output.innerHTML = "Let's not be stubborn, simply follow the rules!"
    }
}

enterButton.addEventListener('click', guess);
againButton.addEventListener('click', function(){
    location.reload();
});