function computerPlay(){
		const move = ['rock','paper','scissor'];
		let index = Math.floor(Math.random()*3);
		return move[index];
	}
	
function playerPlay(){
		let move = prompt('Enter your move: ' );
		move = move.toLowerCase();
		if (move === 'rock' || move === 'paper' || move === 'scissor'){
				return move;
		}
		return false;
	}
	


function playRound(cs,ps){
	
	//cs = computerSelection
	//ps = playerSelection
	
	console.log('the computer selects ' + cs);
	console.log('you selected ' + ps);
	
	if (cs === ps){
		return 'game tied';
	}
	
	else{
		
		if(
		
		(cs === 'paper' && ps === 'scissor') ||
		(cs === 'rock' && ps === 'paper') || 
		(cs === 'scissor' && ps === 'rock')
		
		){
			return 'win';
		}
		
		else{
			return 'loose';
		}
		
	}
}



function game(){
	let computerScore = 0;
	let playerScore = 0;
	
	for(let i = 0; i < 5 ; i++){

		const computerSelection = computerPlay();
		const playerSelection = playerPlay();
		
		if(playerSelection){
			let round = playRound(computerSelection,playerSelection);
		
			if(round === 'win'){
				playerScore++;
			}
			
			else if(round === 'loose') {
					computerScore++;
			}
		
			console.log('computer score ' + computerScore);
			console.log('player score ' + playerScore);
			console.log('\n');
		}
	}
	
	if (playerScore > computerScore){
		return 'Player wins';
	}
	else if (computerScore > playerScore){
		return 'Computer wins';
	}
	else{
		return 'game tied';
	}
	
}

console.log(game());
