
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let snake = [];
let positionX = 10;
let positionY = 10;
let foodX=5, foodY=5;
let velX = 0;
let velY = 0;
let grid = 20;
let tam = 5;

window.onload = function(){
	document.addEventListener("keydown", function(e){
	console.log(e.keyCode);
	switch(e.keyCode){
		case 37:
			velX=-1;
			velY=0;
			break
		case 38:
			velX=0;
			velY=-1;
			break
		case 39:
			velX=+1;
			velY=0;
			break
		case 40:
			velX=0;
			velY=+1;
			break
		default://default inútil
			velX=0;
			velY=0;
	}
	});
	setInterval(jogo, 1000/10);
}

function jogo(){
	ctx.fillStyle = "#94ff94";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	positionX += velX;
	positionY += velY;
	
	if(positionX < 0){
		positionX = grid;
	}
	if(positionX > grid){
		positionX = 0;
	}
	if(positionY < 0){
		positionY = grid;
	}
	if(positionY > grid){
		positionY = 0;
	}
	
	
	ctx.fillStyle = 'black';
	for(let i = 0; i < snake.length; i++){
		ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1);
		if(positionX == snake[i].x && positionY == snake[i].y){
		tam=5;
		}
	}
	snake.push({x: positionX, y: positionY});
	while(snake.length > tam){
		snake.shift();
	}
	ctx.fillStyle = 'red';
	ctx.fillRect(foodX*grid, foodY*grid, grid-1, grid-1);
	if(positionX == foodX && positionY == foodY){
		tam++;
		foodX = Math.floor(Math.random()*grid);
		foodY = Math.floor(Math.random()*grid);
	}
}
