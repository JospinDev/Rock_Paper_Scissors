const CC=['Rock','Paper','Scissor'];
function getComputerChoice(){
    const randomIndex=Math.floor(Math.random()*CC.length);

    return CC[randomIndex];
}


function getHumainChoice() {
    let userCh=prompt("What is Your Choice(Rock, Paper,Scissor): ");

    while(!CC.includes(userCh)){
        userCh=prompt("Invalid choice.Please enter Rock, Paper, Scissor: ");
    }
    
    return userCh;
}
let humanScore=0,computerScore=0;
function playround(){
    

    let continuePlaying=true;
    while(continuePlaying){
        const humanChoice=getHumainChoice();
        const computerChoice=getComputerChoice();
    if (humanChoice===computerChoice){
        
        console.log("Mwahisemwo ibisa");

    }else if(humanChoice==='Rock' && computerChoice==='Scissor'){
            console.log('You won, Rock beat Scissor')
            humanScore=humanScore+1;
            console.log('Human Score :'+humanScore+'===='+'Computer Score: '+computerScore)
    }

    else if(humanChoice==='Scissor' && computerChoice==='Rock'){
        console.log('You lose, Rock beat Scissor')
        computerScore=computerScore+1;
        console.log('Human Score :'+humanScore+'===='+'Computer Score: '+computerScore)
}
else if(humanChoice==='Rock' && computerChoice ==='Paper'){
    console.log('You Lose, Paper beat Rock')
    computerScore=computerScore+1;
    console.log('Human Score :'+humanScore+'===='+'Computer Score: '+computerScore)
}
else if(humanChoice==='Paper' && computerChoice ==='Rock'){
    console.log('You Won, Paper beat Rock')
    humanScore=humanScore+1;
    console.log('Human Score :'+humanScore+'===='+'Computer Score: '+computerScore)
} 
else if(humanChoice==='Paper' && computerChoice ==='Scissor'){
    console.log('You Lose, Scissor beat Paper');
    computerScore=computerScore+1;
    console.log('Human Score :'+humanScore+'===='+'Computer Score: '+computerScore)
}
else if(humanChoice ==='Scissor' && computerChoice ==='Paper'){
    console.log('You Won, Scissor beat Paper');
    humanScore=humanScore+1;
    console.log('Human Score :'+humanScore+'===='+'Computer Score: '+computerScore)
}

else{
    console.log("Game is Over");
    console.log("Human Score: "+humanScore);
    console.log("Computer Score: "+computerScore);
}

continuePlaying=confirm("Do you want to play again?");
    }
    console.log("Thank You for Playing!");

}
playround();
