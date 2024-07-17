function playGame(){
    // computer choice

    function getComputerChoice() {
      let randomChoices = Math.floor(Math.random() * 3)

      if(randomChoices === 0 ) {
        return 'rock'
      } else if (randomChoices === 1 ) {
        return 'paper'
      } else if (randomChoices === 2 ){
        return 'scissors'
      }
    }
    
    // human choice
    function getHumanChoice() {
      let humanChoice = prompt('Choose one: Rock, Paper or Scissors')
      if(humanChoice === 'rock' || 'paper' || 'scissors') {
        humanChoice = humanChoice.toUpperCase()
      } 
      return humanChoice;
    }
    
        let humanScore = 0
        let computerScore = 0
    
    // single round    
    function playRound(humanChoice, computerChoice) {
        
        if(humanChoice === computerChoice){
          console.log('DRAW! Same option as the computer!')
          humanScore++
          computerScore++ 
          console.log('________________________________________________________')
          } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') ||  (humanChoice === 'scissor' && computerChoice === 'paper' )) {
            console.log(`You WIN! ${humanChoice} beats ${computerChoice}! `)
            console.log('_______________________________________________________')
            humanScore++
          } else {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}! `)
            console.log('_______________________________________________________')
            computerScore++
          }
        }
    
    
      for (let i = 1; i <=5 ; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice();
        console.log('Player CHOICE: '+ humanSelection)
        console.log('Computer CHOICE: '+computerSelection)
        console.log(`Game round: ${i}`)
        playRound(humanSelection,computerSelection)
      }
      if ( humanScore > computerScore) {
        console.log('You win the game! Congratulations!')
      } else if ( computerScore > humanScore ) {
        console.log('You lose the game! try again!')
      }else if (computerScore === humanScore) {
        console.log('Draw! Please refresh page(ctrl+R) and try again')
      }
    }
    
    playGame()
