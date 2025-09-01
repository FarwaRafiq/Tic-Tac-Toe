let boxs = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let message = document.getElementById("message");
let msgcontainer = document.getElementsByClassName("msg-container");
let btnNew = document.getElementById("btn-new");
let xTurn = true;
let gameOver = false;


    const winPattern = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


boxs.forEach((box)=> {
    box.addEventListener("click" , ()=>{
        console.log("box was clicked")
        if(xTurn){
           box.innerText = "x";
           xTurn = false;   
        }
        else {
            box.innerText = "o";
            xTurn = true;
        }
        box.disabled= true;
        checkWinner();
    })
});

// disable all box

const disableAllBox = ()=>{
    boxs.forEach((box)=>{
        box.disabled = true;
    })
};

// fuction for enable all box

const enableAllBox = ()=>{
    boxs.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
    })
};

// reset all box
const resetAllBox = ()=>{
        xTurn = true;
        enableAllBox()
    document.querySelector('.msg-container').style.display = 'none';
}

// Function to winner show

const winnerShow = (winner)=>{
    message.innerText = `congrulations! ${winner} is winner`;
     document.querySelector('.msg-container').style.display = 'flex';
     disableAllBox()
}

// function to check winner

const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;


         if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            console.log("winner")
            winnerShow(pos1);
            gameOver = true;
        }
    }
    }
};

btnNew.addEventListener("click", resetAllBox);
reset.addEventListener("click", resetAllBox);
