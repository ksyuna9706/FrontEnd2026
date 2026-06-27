let start = document.querySelector("#start");

let game = document.querySelector("#game");
let score = 0;
let time = document.querySelector("#time");
let isGameStarted = false;
let timeHeader = document.querySelector("#time-header");
let resultHeader = document.querySelector("#result-header");
let result = document.querySelector("#result");
let gameTime = document.querySelector("#game-time");
start.addEventListener("click", startGame);
game.addEventListener("click", handelBoxClick);
gameTime.addEventListener("input", setGameTime);
function startGame() {
    score = 0;
    timeHeader.classList.remove("hide");
    resultHeader.classList.add("hide");
    setGameTime();
    gameTime.setAttribute("disabled", "true");
    isGameStarted = true;
    start.classList.add("hide");
    game.style.background = "#fff";
    let interval = setInterval(function () {
        let t = time.textContent;
        if (t <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            time.textContent = (t - 0.1).toFixed(1);
        }


    }, 100)
    renderBox();
}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function setGameTime() {
    let tm = +gameTime.value;
    time.textContent = tm.toFixed(1);
    timeHeader.classList.remove("hide");
    resultHeader.classList.add("hide");
}

function endGame() {
    isGameStarted = false;
    result.textContent = score;
    start.classList.remove("hide");
    game.innerHTML = "";
    game.style.background = "rgb(155, 232, 251)";
    timeHeader.classList.add("hide");
    resultHeader.classList.remove("hide");
    gameTime.removeAttribute("disabled");


}

//Cоздание квадратов

function renderBox() {
    game.innerHTML = "";
    let boxSize = getRandom(30, 100);
    let gameSize = game.getBoundingClientRect();
    let box = document.createElement("div");
    let maxTop = gameSize.height - boxSize;
    let maxLeft = gameSize.width - boxSize;
    box.style.width = box.style.height = boxSize + "px";
    box.style.position = "absolute";
    box.style.left = getRandom(0, maxLeft) + "px";
    box.style.top = getRandom(0, maxTop) + "px";
    box.style.cursor = "pointer";
    game.insertAdjacentElement("afterbegin", box);
    box.setAttribute("data-box", true);
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    box.style.background = "rgb(" + r + "," + g + "," + b + ")";
}
function handelBoxClick(event) {
    if (!isGameStarted) {
        return;
    }
    if (event.target.dataset.box) {
        score++;
        renderBox();
    }

}
