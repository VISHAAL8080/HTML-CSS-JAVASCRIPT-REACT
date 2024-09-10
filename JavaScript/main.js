//EXERCISE

/*let player="rock";
let computer="scissor";
let answer = player===computer ? "draw" 
: player === "rock" && computer === "scissor" ? "player wins"
: player === "scissor" && computer === "rock" ? "computer wins"
: player === "paper" && computer === "scissor" ? "computer wins"
:"player wins"
console.log(answer);*/

let boolean = confirm("Shall We play rock paper or Scissors?")
if(boolean){
    while(boolean){

        let player =prompt("Please enter rock, paper or scissors");
        if(player || player === "")
        {
            if(player === "rock" || player === "paper" ||  player === "scissor"){
                let computerchoice = Math.floor(Math.random()*3);
                const choice = ["rock", "paper" ,"scissor"];
                const computer = choice[computerchoice];


                let result = player === computer ? "Tie" 
                : player === "rock" && computer === "scissor" ?  `player: ${player}\ncomputer:${computer} \n player wins`
                : player === "scissor" && computer === "rock" ? `player: ${player}\ncomputer:${computer} \n computer wins`
                : player === "paper" && computer === "scissor" ? `player: ${player}\ncomputer:${computer} \n computer wins`
                : `player: ${player}\ncomputer:${computer} \n player wins`;
                alert(result);
                let reload = confirm("Play again");
                if(reload != true){
                    alert("Thanks for playing");
                    break;
                }else{
                    continue;
                }
           }
            else{
                alert("you did not enter rock , paper and scissors");
                continue;
            }
        }
        else{
            alert("Hey man! I think that you have changed your mind!");
            break;
        }
    }
}
else{
    alert("OK!May be Next time!?");
}
