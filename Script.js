console.log("Script is Working");
let click = new Audio("click.mp3");
let gameOver = new Audio("gameOver.mp3")
let boxText = document.getElementsByClassName("boxText");
let display = document.getElementById("display");
let btn = document.getElementById("btn");
let turn = "X";
let gameEnd = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const chkWin = () => {
    let boxs = document.getElementsByClassName("boxText");
    let check = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    check.forEach(e => {
        if ((boxs[e[0]].innerText === boxs[e[1]].innerText) && (boxs[e[2]].innerText === boxs[e[1]].innerText) && (boxs[e[0]].innerText !== '')) {
            document.getElementById("display").innerText = boxs[e[0]].innerText + " " + "Won";
            gameEnd = true;
            gameOver.play();
        }
    })
}

let box = document.getElementsByClassName("boxText");
Array.from(box).forEach(box => {
    box.addEventListener("click", () => {
        if (box.innerText === '') {
            box.innerText = turn;
            turn = changeTurn();
            click.play();
            chkWin();
            if (!gameEnd) {
                display.innerText = "Turn for" + " " + turn;
            }
        }
    })
})

btn.addEventListener("click" , ()=>{
    let boxs = document.getElementsByClassName("boxText");
    Array.from(boxs).forEach(boxs => {
        boxs.innerText = "";
        turn = "X";
        gameEnd = false;
        display.innerText = "Turn for" + " " + turn;
    })
})