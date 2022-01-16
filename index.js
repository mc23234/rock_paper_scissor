document.body.setAttribute('style','margin:0; text-align:center; font-family:Arial; color:white');	

const intro = document.createElement('div');	//game main menu
const main = document.createElement('div');		// the game main page
const exit = document.createElement('div');		//retry or back to main menu  

document.body.appendChild(intro);
document.body.appendChild(main);
document.body.appendChild(exit);

intro.style.display = 'none';
main.style.display = 'none';
exit.style.display = 'none';


const title = document.createElement('h1'); 			//The title of the game
intro.appendChild(title);
title.textContent = "Wanna Play Rock Paper Scissor";
title.setAttribute('style','font-size:3rem; margin-top:3rem');


const enterGameBtn = document.createElement('button');	//button to take into the game
intro.appendChild(enterGameBtn);
enterGameBtn.textContent = 'PLAY GAME';
enterGameBtn.setAttribute('style','display:block; margin:0 auto; padding:2rem; font-weight:bold; border-radius: 20px; background:rgb(40,40,40); color:white; font-size:1.5rem');


const rules = document.createElement('a');				//Rules and info of the game
intro.appendChild(rules);
rules.textContent = "Click for more info and rules of the game";
rules.setAttribute('style','font-size:1.5rem; text-decoration:none; color:wheat');
rules.href = "https://en.wikipedia.org/wiki/Rock_paper_scissors";
rules.target = "_blank"


//footer of the game

const footer = document.createElement('div');
intro.appendChild(footer);
footer.setAttribute('style',' width:100%; background:rgb(20,20,20); display:flex; justify-content:center; height: 10vh');


const copyright = document.createElement('p');
copyright.innerHTML = ` &copy copyright Odin-Project 2022`;

footer.appendChild(copyright);


function mainFunction(){

intro.setAttribute('style','display:flex; flex-direction:column; justify-content:space-between; align-items:center; background:black; height:100vh');
main.style.display = 'none';
exit.style.display = 'none';
enterGameBtn.addEventListener('click',() => gameFunction());
}

const backBtn = document.createElement('button');
backBtn.textContent = 'Back to Main';
main.appendChild(backBtn);
backBtn.addEventListener('click',() => {mainFunction()});
backBtn.setAttribute('style','display:block; margin:0 auto auto 0; padding:0.5rem; border-radius: 10px; background:rgb(0,70,0); color:white; font-size:0.8rem');


const gameInfo = document.createElement('h1');
main.appendChild(gameInfo);
gameInfo.textContent = 'First to score 5 points wins';
gameInfo.setAttribute('style','font-size:3rem');


const score = document.createElement('div');
main.appendChild(score);
score.setAttribute('style','display:flex; justify-content:space-evenly; height:15vh');


let computerScore = document.createElement('h2');
computerScore.innerHTML = `Computer's score <br> ` ;

let playerScore = document.createElement('h2');
playerScore.innerHTML = `Player's score <br>`;


score.appendChild(computerScore);
score.appendChild(playerScore);

let playerPoints = 0;
let computerPoints = 0;
	

let runningResult = document.createElement('h3');
main.appendChild(runningResult);
runningResult.setAttribute('style','height:35vh');




const options = document.createElement('div');
main.appendChild(options);
options.setAttribute('style','display:flex; width:50%; margin:0 auto')

const rockBtn = document.createElement('button');
rockBtn.textContent = 'ROCK';
rockBtn.setAttribute('style','display:block; width:10rem; margin:0 auto; padding:0.5rem; font-weight:bold; border-radius: 20px; background:rgb(100,40,40); color:white; font-size:1.5rem');


const paperBtn = document.createElement('button');
paperBtn.textContent = 'PAPER';
paperBtn.setAttribute('style','display:block; width:10rem; margin:0 auto; padding:0.5rem; font-weight:bold; border-radius: 20px; background:rgb(100,40,40); color:white; font-size:1.5rem');


const scissorBtn = document.createElement('button');
scissorBtn.textContent = 'SCISSOR';
scissorBtn.setAttribute('style','display:block; width:10rem; margin:0 auto; padding:0.5rem; font-weight:bold; border-radius: 20px; background:rgb(100,40,40); color:white; font-size:1.5rem');



options.appendChild(rockBtn);
options.appendChild(paperBtn);
options.appendChild(scissorBtn);


rockBtn.addEventListener('click',() => {
		let ps = rockBtn.textContent.toLowerCase();
		let result = playRound(ps);
		runningResult.innerHTML += result;
		increment(result);
		
	});

paperBtn.addEventListener('click',() => {
		let ps = paperBtn.textContent.toLowerCase();
		let result = playRound(ps);
		runningResult.innerHTML += result;
		increment(result);
	});

scissorBtn.addEventListener('click',() => {
		let ps = scissorBtn.textContent.toLowerCase();
		let result = playRound(ps);
		runningResult.innerHTML += result;
		increment(result);
	});

function increment(result){	
	if(result === 'win'){
		playerPoints++;
		playerScore.innerHTML =`Player's score <br>${playerPoints}`;
	}
	
		else if(result === 'loose'){
		computerPoints++;
		computerScore.innerHTML = `Computer's score <br> ${computerPoints}`;
}

	if(playerPoints === 5 || computerPoints === 5){
	exitFunction();
}

}


function gameFunction(){
	playerPoints = 0;
	computerPoints = 0;
	playerScore.innerHTML =`Player's score <br>`;
	computerScore.innerHTML = `Computer's score <br>`;
	runningResult.textContent = '';
	intro.style.display = 'none';
	main.setAttribute('style','background:#006400; height:100vh');
		
}

exit.setAttribute('style','display:flex; align-items:space-evenly')

const canvas = document.createElement('h1');
exit.appendChild(canvas);
canvas.setAttribute('style','font-size:4rem; display:block; margin:0');


const mainBtn = document.createElement('button');
mainBtn.textContent = 'Main Menu';
exit.appendChild(mainBtn);
mainBtn.addEventListener('click',() => {mainFunction()});
mainBtn.setAttribute('style','display:block; margin:auto; width: 8rem; padding:0.5rem; border-radius: 20px; background:rgb(20,20,20); color:white; font-size:2rem');

const retryBtn = document.createElement('button');
retryBtn.textContent = 'Retry';
exit.appendChild(retryBtn);
retryBtn.addEventListener('click',() => {gameFunction()});
retryBtn.setAttribute('style','display:block; margin:auto; width:10rem; padding:0.5rem; border-radius: 20px; background:teal; color:white; font-size:2rem');


function exitFunction(){
	main.style.display = 'none';
	exit.setAttribute('style',' height:100vh; display:flex; flex-direction:column; justify-content:space-evenly');
	if(playerPoints === 5){
		exit.style.background = 'burlywood';
		canvas.textContent = 'Congrats, You Win';
	}
	else if(computerPoints === 5){
		exit.style.background = 'darkred';
		canvas.textContent = "Sorry, You Lost";
	}
							
}



mainFunction();


function computerPlay(){
		
		//computer's move
	
		const move = ['rock','paper','scissor'];
		let index = Math.floor(Math.random()*3);
		return move[index];
	}
	

function playRound(ps){
	
	const cs = computerPlay();
	//cs = computerSelection
	//ps = playerSelection
	
	runningResult.innerHTML = `The computer selects ${cs} <br> player selected ${ps} <br><br>`;
	
	if (cs === ps)
		return 'game tied';
	
	//game rule
	
	else{
		
		if(
		
		(cs === 'paper' && ps === 'scissor') ||
		(cs === 'rock' && ps === 'paper') || 
		(cs === 'scissor' && ps === 'rock')
		
		){
			return 'win';
		}
		
		else
			return 'loose';

		
	}
}

