let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#newgame");
let msg = document.querySelector(".msg");
let msgcont = document.querySelector(".msgcont"); 
let turn0 = true;
let win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turn0 = true;
    enableboxes();
    msgcont.classList.add("hide");
    const qubyGif = document.getElementById('qubyGif');
    qubyGif.classList.add('quby-hide'); // Hide Quby GIF
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) { // player1
            box.innerText = "O";
            turn0 = false;
        } else { // player2
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcont.classList.remove("hide");
    disabledboxes();
    const qubyGif = document.getElementById('qubyGif');
    qubyGif.classList.remove('quby-hide');
}

const checkwinner = () => {
    for (let pattern of win) {
        let pos1 = boxes[pattern[0]].innerText; // Corrected variable name to 'boxes'
        let pos2 = boxes[pattern[1]].innerText; // Corrected variable name to 'boxes'
        let pos3 = boxes[pattern[2]].innerText; // Corrected variable name to 'boxes'

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
                showwinner(pos1);
            }
        }
    }
}

newbtn.addEventListener("click", resetgame); // Corrected to use 'newbtn'
resetbtn.addEventListener("click", resetgame); // Corrected to use 'resetbtn'

const backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.play();
