const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const startButton = document.getElementById("startButton");

const gridSize = 20;//размер одного сегмента/клетки
let snake, direction,foot,score,gameSpeed,gameRunning;//змейка,направление


function startGame() {
    snake = [{//координаты змейки
        x: 200,
        y: 200
    }];

    direction = "RIGHT";//направление движения по умолчанию
    score = 0;
    gameSpeed = 150;//скорость игры
    foot = getRandomFootPosition();//появление квадрата для съедения змейкой
    gameRunning = true;

    scoreEl.textContent = "Счет: 0";
    startButton.style.display = "none";
    gameLoop();//начало  игры
}


function getRandomFootPosition(){
    return {
        x: Math.floor(Math.random()*(canvas.width/gridSize))*gridSize,
        y: Math.floor(Math.random()*(canvas.height/gridSize))*gridSize,
    }
}

//функция конца игры
function gameOver() {
    

    gameRunning = false;
    let result = document.createElement("p");
    result.innerHTML = `<span style='color:red'>Игра окончена!</span>`;
    scoreEl.prepend(result);
    startButton.style.display = 'inline';
}

//анимация змейки
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "purple";
        ctx.fillRect(foot.x, foot.y, gridSize, gridSize);
        ctx.fillStyle = "black";
        ctx.strokeRect(foot.x, foot.y, gridSize, gridSize);

    snake.forEach(segment => {
        ctx.fillStyle = "blue";
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
        ctx.fillStyle = "black";
        ctx.strokeRect(segment.x, segment.y, gridSize, gridSize);
    });

    let head = { ...snake[0] };//перемещение змеи вверх
    if (direction == "UP") {
        head.y -= gridSize;
    }
    if (direction == "DOWN") {
        head.y += gridSize;
    }
    if (direction == "LEFT") {
        head.x -= gridSize;
    }  
    if (direction == "RIGHT") {
        head.x += gridSize;
    }

    if (head.x < 0 || head.x >=canvas.width || head.y >=canvas.height || head.y < 0){
        gameOver();
        return;
    }
     for (let i = 0; i < snake.length; i++) {
        if(head.x === snake[i].x && head.y === snake[i].y){
            gameOver();
            return;
        }
        
     }

    snake.unshift(head);

if(head.x === foot.x && head.y === foot.y){
    foot = getRandomFootPosition();
    score++;
    scoreEl.textContent = `Счет: ${score}`;
if(gameSpeed>50){
    gameSpeed-=5;
}
}else{
snake.pop();//убрали хвост
}


    if (snake.length > 0) {
        setTimeout(gameLoop, gameSpeed);
    }
}

function changeDirection(event) {
    const key = event.key;
    if (key == "ArrowUp" && direction !== "DOWN") {//ArrowUp-зарезервированное название
        direction = "UP";
    } else if (key == "ArrowDown" && direction !== "UP") {
        direction = "DOWN";

    } else if (key == "ArrowLeft" && direction !== "RIGHT") {
        direction = "LEFT";

    } else if (key == "ArrowRight" && direction !== "LEFT") {
        direction = "RIGHT";
    }
    // console.log(direction);

}
document.addEventListener("keydown", changeDirection)
startButton.addEventListener("click", startGame);
