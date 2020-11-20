const display=document.querySelector('.display');
const Game=document.querySelector('.game');
const game = ()=>{
    let pScore=0;
    let cScore=0;

    //starting the game
    const playGame = ()=>{
        const playbtn=document.querySelector('.intro button');
        const introscreen=document.querySelector('.intro'); 
        const match=document.querySelector('.match'); 
        playbtn.addEventListener('click',()=>{
            introscreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play the match
    const playMatch = ()=>{
        const options=document.querySelectorAll('.options button');
        const playerHand=document.querySelector('.player-hand');
        const computerHand=document.querySelector('.computer-hand');
        const hands=document.querySelectorAll('.hands img');

        hands.forEach(hand=>{
            hand.addEventListener('animationend',function(){
                this.style.animation='';
            });
        });
        const computeroptions=['paper','rock','scissor'];
        options.forEach((option)=>{
            option.addEventListener('click',function(){
                 const computerNumber=Math.floor(Math.random()*3);
                 const computerChoice=computeroptions[computerNumber];
                setTimeout(()=>{
                    compareHands(this.textContent,computerChoice);
                    //updated the images
                    playerHand.src=`./images/${this.textContent}.img`;
                    computerHand.src=`./images/${computerChoice}.img`;
                },1500);
               
                 playerHand.style.animation='playeranimate 1.5s ease';
                computerHand.style.animation='computeranimate 1.5s ease';
                });
        });
    };
    const updateScore = ()=>{
        const playerScore=document.querySelector('.player-score p');
        const computerScore=document.querySelector('.computer-score p');
        playerScore.textContent=pScore;
        computerScore.textContent=cScore;
        if(pScore===10){ 
            setTimeout(()=>{
                Game.style.opacity=0;
                display.textContent='Player wins!';
            },1500);
           
        }
        if(cScore===10){
            setTimeout(()=>{
                Game.style.opacity=0;
                display.textContent='Computer Wins!'
            },1500);
            
        }
    };
    const compareHands = (playerChoice,computerChoice)=>{
        const winner=document.querySelector('.winner');
        if(playerChoice===computerChoice){
            winner.textContent="It is a tie";
            return ;
        }
        //checking for rock
        if(playerChoice=== 'rock'){
            if(computerChoice==='scissor'){
                winner.textContent="Player wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //checking for paper
        if(playerChoice === 'paper'){
            if(computerChoice ==='rock'){
                winner.textContent="Player wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //checking for scissor
        if(playerChoice=== 'scissor'){
            if(computerChoice==='paper'){
                winner.textContent="Player wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent="Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
    }

    //calling the functions
    playGame();
    playMatch();
};
game();