const CC=['Rock','Paper','Scissor']

let humanScore=0,computerScore=0;
const words=['ROCK','PAPER','SCISSOR','GAME','VS'];
const titleElement=document.getElementById('game-title')

let wordIndex=0;
let letterIndex=0;

function displayLetter(){
    if(wordIndex<words.length){
        const currentWord=words[wordIndex];
//display the current letter
        titleElement.textContent +=currentWord[letterIndex];
        letterIndex++;

        if(letterIndex === currentWord.length){
            wordIndex++;//move to the next word

            letterIndex=0;//reset letter  index
            if(wordIndex<words.length){
                setTimeout(() => {
                    titleElement.textContent='';//clear the text
    
                    setTimeout(displayLetter,800);//wait before displaying the next word
                },3000);//show each word for 1 sec
            }else{
    
                setTimeout(displayLetter,500);//Adjusting timing for letter display
            }
        }else{
            setTimeout(displayLetter,300)
        }
         

    }
}

displayLetter();
// Fonction pour générer une couleur aléatoire au format hexadécimal
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random()  
//    * 16)];
//     }
//     return color;
//   }
 
  // Sélectionner l'élément H1
const h1 = document.querySelector('h1');

// Attribuer une couleur aléatoire à l'élément H1

setInterval(() => {
    h1.style.color = getRandomColor();
}, 1000); // Change la couleur toutes les 1 seconde


function getComputerChoice(){
    const randomIndex=Math.floor(Math.random()*CC.length);

    return CC[randomIndex];
}


function getHumainChoice(choice) {
    // let userCh=prompt("What is Your Choice(Rock, Paper,Scissor): ");

    // while(!CC.includes(userCh)){
    //     userCh=prompt("Invalid choice.Please enter Rock, Paper, Scissor: ");
    // }
    
    return choice;
}



function playround(humanChoice){
    let result='';
    let robotResult='';
    const computerChoice=getComputerChoice();
    document.getElementById('computer-choice').textContent='Robot Chose: '+computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1);

    if (humanChoice===computerChoice){
        
        result='Mwacaguye ibisa';
        robotResult='Mwacaguye ibisa'
        console.log("Mwahisemwo ibisa");
    
    }else if(humanChoice==='Rock' && computerChoice==='Scissor'){
            console.log('You won, Rock beat Scissor')
            result='Uratsinze';
            robotResult='Uratsinzwe';
            humanScore=humanScore+1;
            console.log('Human Score :'+humanScore+'===='+'Computer Score: '+computerScore)
    }

    else if(humanChoice==='Scissor' && computerChoice==='Rock'){
        console.log('You lose, Rock beat Scissor')
        result='Uratsinzwe';
        robotResult='Uratsinze';
        computerScore=computerScore+1;
        div1.at
        console.log('Human Score :'+humanScore+'===='+'Computer Score: '+computerScore)
}
else if(humanChoice==='Rock' && computerChoice ==='Paper'){
    console.log('You Lose, Paper beat Rock')
    result='Uratsinzwe';
    robotResult='Uratsinze';
    computerScore=computerScore+1;
    console.log('Human Score :'+humanScore+'===='+'Computer Score: '+computerScore)
}
else if(humanChoice==='Paper' && computerChoice ==='Rock'){
    console.log('You Won, Paper beat Rock')
    result='Uratsinze';
    robotResult='Uratsinzwe';
    humanScore=humanScore+1;
    console.log('Human Score :'+humanScore+'===='+'Computer Score: '+computerScore)
} 
else if(humanChoice==='Paper' && computerChoice ==='Scissor'){
    console.log('You Lose, Scissor beat Paper');
    result='Uratsinzwe'
    robotResult='Uratsinze';
    computerScore=computerScore+1;
    console.log('Human Score :'+humanScore+'===='+'Computer Score: '+computerScore)
}
else if(humanChoice ==='Scissor' && computerChoice ==='Paper'){
    console.log('You Won, Scissor beat Paper');
    result='Uratsinze';
    robotResult='Uratsinzwe';
    humanScore=humanScore+1;
    console.log('Human Score :'+humanScore+'===='+'Computer Score: '+computerScore)
}

else{
    console.log("Game is Over");
    console.log("Human Score: "+humanScore);
    console.log("Computer Score: "+computerScore);
}

console.log("Thank You for Playing!");

updateScore();
displayResult(result);
document.getElementById('robot-result').textContent=robotResult;//Use a separate div for robot result

    }
alert('Thank You For Playing!') 


function updateScore(){
    document.getElementById('human-score').textContent=humanScore;
    document.getElementById('computer-score').textContent=computerScore
}

function displayResult(result){
    document.getElementById('result').textContent=result;
}

