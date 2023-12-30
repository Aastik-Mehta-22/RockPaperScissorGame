let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const ri = Math.floor(Math.random()*3);// to generate random number from 0 to 2 so that we get index of comp choice
    return options[ri];
};
const drawGame = () =>{
    console.log("game was drawed");
    msg.innerText = "Game Was Draw ! Play again";
    msg.style.backgroundColor = "#081b30";
}; 




const showWinner = (userWin,userChoice,compChoice) =>{
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("You win");
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }
    else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("You Lose");
        msg.innerText = `You Lose ! Computer's ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};
const playgame = (userChoice) =>{
    console.log("user choice  = ",userChoice);
    //generatiing comp choice
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        //draw condition
        drawGame();

    }
    else{
        let userWin = true;
        if (userChoice==="rock") {
            //comp genrate either scissor or paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice==="paper") {
            //comp genrate either rock or scissor
            userWin = compChoice === "scissors" ? false : true;
            
        }
        else{
            //comp generate iether rock or paper
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
   


}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playgame(userChoice);
    })
})

