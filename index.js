const board = document.querySelector("#board");
const btnSixteen = document.querySelector("#sixteenGame");
const btnThirtyTwo = document.querySelector("#thirtyTwoGame");
const btnSixtyFour = document.querySelector("#sixtyFourGame");
const cubeDiv = document.createElement('div');
const pixels = document.getElementsByClassName("cubes");



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