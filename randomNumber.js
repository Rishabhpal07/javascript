const max=prompt("enter the max number");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("quitting the game");
        break;
    }
    if(guess==random){
        console.log("your guess is correct, and your guess is",random);
        break;
    }
    else if(guess<random){
        guess=prompt("your guess is to small ,please try again ");
    }
    else{
        guess=prompt("your guess is to large ,please try again");
    }
}