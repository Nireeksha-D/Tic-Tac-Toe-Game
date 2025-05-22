let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//player 0
 const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];

 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){//player O
            box.innerText="O";
            turnO=false;
            box.style.color="red";
        }
        else{ //player X
            box.innerText="X";
            turnO=true;
            box.style.color="blue";
        }
        box.disabled=true;
        checkWinner();
    });
 });

 const checkWinner = () => {
    for(let pattern of winPatterns){
        let post1Val=boxes[pattern[0]].innerText;
        let post2Val=boxes[pattern[1]].innerText;
        let post3Val=boxes[pattern[2]].innerText;
        if(post1Val!="" && post2Val!="" && post3Val!="")
        {
            if(post1Val === post2Val && post2Val===post3Val)
            {
                console.log("winner",post1Val);
                showWinner(post1Val);
            }
        }

    }
 };
 const showWinner = (winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
 }

 const disableBoxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
 const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }
 const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

 }
resetBtn.addEventListener("click",resetGame);
newgameBtn.addEventListener("click",resetGame);