const changeTurn=()=>{
    return turn==="X"?"O":"X";
}
let gameOver=false;
let turn="X";
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName("boxText");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,8]
    ];
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)&&boxtexts[e[2]].innerText!==""){
            document.querySelector(".info").innerText=boxtexts[e[0]].innerText+" Won";
            gameOver=true;
        }
        
    });
}
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxText");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
            if(!gameOver)document.getElementsByClassName("info")[0].innerText="Turn For "+turn;
        }
    });
});
let reset=document.querySelector("button");
reset.addEventListener("click",()=>{
    let boxtexts=document.querySelectorAll(".boxText");
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn="X"
})