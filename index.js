const introPage = document.querySelector('.intro');
const enterGameBtn = document.querySelector('.game-btn');

const mainPage = document.querySelector('.main');
const backBtn = document.querySelector('.back-btn');
const optionBtn = document.querySelectorAll('.option-btn');
const runningResult = document.querySelector('running-result');
const playerScore = document.querySelector('.P-score');
const computerScore = document.querySelector('.C-score');
const computerIcon = document.querySelector('.computer-icon');
const playerIcon = document.querySelector('.player-icon');
const displayResult = document.querySelector('.result-display');

const exitPage = document.querySelector('.exit');
const retryBtn = document.querySelector('.retry-btn');
const mainBtn = document.querySelector('.main-btn');
const canvas = document.querySelector('.canvas');

let playerPoints;
let computerPoints;
let result;
let rock = '<i class="fa fa-hand-grab-o icon"></i>';
let paper = '<i class="fa fa-hand-paper-o icon"></i>';
let scissor = '<i class="fa fa-hand-scissors-o icon"></i>';



//~ Game entry button in the front page 

enterGameBtn.addEventListener('click', () => {
		introPage.setAttribute('style','display:none');
		mainPage.setAttribute('style','display:block');
		setInitial();
});



//~ Main page button to take control back to front page

backBtn.addEventListener('click',() => {
		introPage.setAttribute('style','display:flex');
		mainPage.setAttribute('style','display:none');
		setInitial();
});

//~ Main page button node list to select an option and play game

optionBtn.forEach((btn) => {
	btn.addEventListener('click', () => {
		let ps = btn.lastElementChild.textContent;
		result = playRound(ps.toLowerCase());
		increment(result[0]);
		let cs = result[1];
		displayMove(ps,cs,result[0]);
		console.log(result);
	});
});

//~ incrementing the score counter

function increment(result){	
	if(result === 'win'){
		playerPoints++;
		playerScore.innerHTML =`Player's score <br><br>${playerPoints}`;
	}
	
	else if(result === 'loose'){
		computerPoints++;
		computerScore.innerHTML = `Computer's score <br><br>${computerPoints}`;
	}

	if(playerPoints === 5 || computerPoints === 5)
		exitFunction();
}

//~ setting counters to initial

function setInitial(){
		playerPoints = 0;
		computerPoints = 0;
		playerScore.innerHTML = "Player's score <br><br> 0";
		computerScore.innerHTML = "Computer's score <br><br> 0";
		playerIcon.innerHTML = '';
		computerIcon.innerHTML = '';
		displayResult.textContent = '';
}

//~ display the running result and moves

function displayMove(ps,cs,res){
	
	ps = ps.toLowerCase();
	
	if(ps === 'rock')
		playerIcon.innerHTML = `player's move<br><br>${rock}`;
	else if(ps === 'paper')
		playerIcon.innerHTML = `player's move<br><br>${paper}`;
	else
		playerIcon.innerHTML = `player's move<br><br>${scissor}`;
		
	if(cs === 'rock')
		computerIcon.innerHTML = `computer's move<br><br>${rock}`;
	else if(cs === 'paper')
		computerIcon.innerHTML = `computer's move<br><br>${paper}`;
	else
		computerIcon.innerHTML = `computer's move<br><br>${scissor}`;
	
	displayResult.textContent = res;
	
}



//~ function to display the last page

function exitFunction(){
	mainPage.style.display = 'none';
	exitPage.style.display = 'flex';
	
	if(playerPoints === 5)
		canvas.textContent = 'Congrats, You Win';
	
	else if(computerPoints === 5)
		canvas.textContent = "Sorry, You Lost";
}

//~ button to retry 

retryBtn.addEventListener('click', () => {
		exitPage.style.display = 'none';
		mainPage.style.display = 'block';
		setInitial();
});

//~ button to the front page

mainBtn.addEventListener('click', () => {
		exitPage.style.display = 'none';
		introPage.style.display = 'flex';

});



//~ Game Logic

//~ computer's move
function computerPlay(){	
		const move = ['rock','paper','scissor'];
		let index = Math.floor(Math.random()*3);
		return move[index];
}
	

function playRound(ps){
	
	const cs = computerPlay();
	//cs = computerSelection
	//ps = playerSelection
	
	//runningResult.innerHTML = `The computer selects ${cs} <br> player selected ${ps} <br><br>`;
	
	if (cs === ps)
		return ['game tied',cs];
	
	//game rule
	
	else{
		if(
		
		(cs === 'paper' && ps === 'scissor') ||
		(cs === 'rock' && ps === 'paper') || 
		(cs === 'scissor' && ps === 'rock')
		
		)
			return ['win' ,cs];
		
		else
			return ['loose',cs];
	}
}

