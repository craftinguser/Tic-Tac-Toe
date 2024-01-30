let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// console.log(boxes)
let turnO = true; //player 1

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  console.log("Reset game");
  trueO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box is clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(boxes[pattern[0]].innerText
    //     , boxes[pattern[1]].innerText,
    //     boxes[pattern[2]].innerText
    //     );
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner");

        showWinner(pos1Val);
      }
    }
  }
};

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
