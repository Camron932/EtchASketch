const board = document.querySelector("#board");
const btnSixteen = document.querySelector("#sixteenGame");
const btnThirtyTwo = document.querySelector("#thirtyTwoGame");
const btnSixtyFour = document.querySelector("#sixtyFourGame");
const cubeDiv = document.createElement('div');
const pixels = document.getElementsByClassName("cubes");
const blackColor = document.querySelector("#black");
const randomColor = document.querySelector("#random");



btnSixteen.addEventListener('click', () => {
    removeChild();
    for (let i = 0; i < 256; i++)
            board.innerHTML += '<div class="cubes"></div>';
});

btnThirtyTwo.addEventListener('click', () => {
    removeChild();
    for (let i = 0; i < 1024; i++)
            board.innerHTML += '<div class="cubes2"></div>';
});

btnSixtyFour.addEventListener('click', () => {
    removeChild();
    for (let i = 0; i < 4096; i++)
            board.innerHTML += '<div class="cubes3"></div>';
});

function removeChild() {
    board.innerHTML = null
};

let colorChoice = false;

blackColor.addEventListener('click', () => {
    colorChoice = true;
    return colorChoice;
});

randomColor.addEventListener('click', () => {
    colorChoice = false;
    return colorChoice;
});

board.addEventListener("mouseover", function (e) {

const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);

    if (colorChoice === false && e.buttons == 1 || e.buttons == 3) {
        e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    } else if (e.buttons == 1 || e.buttons == 3) {
        e.target.style.backgroundColor = "rgb(0, 0, 0)";
        e.target.style.opacity -= '-0.1';   
    }
});