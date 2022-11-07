let images = document.querySelectorAll(".human-img");
let pcimages = document.querySelectorAll(".pc-img");

for (let i = 0; i <= images.length -1 ; i++) {
    images[i].addEventListener("click", ()=>{
        hiddenitems(i);
        randomPc = Math.floor((Math.random()*10)/4);
        pcimages[randomPc].classList.remove('hidden')    
        gamelogic(i,randomPc);
    })
}
function hiddenitems(i) {
    for (let j = 0; j <= images.length -1; j++) {
        if (j !== i) {
            images[j].classList.add('hidden');
        };
    }
}

document.querySelector('button').addEventListener("click",()=>{
    refresh()
})

function refresh() {
    for (let i = 0; i <= images.length -1; i++){
        images[i].classList.remove("hidden");
        pcimages[i].classList.add("hidden")
    }
    document.querySelector(".human-title").innerHTML = "Choose your weapon!"
    document.getElementById("pc-txt").innerHTML = "wait for your move!"
    document.getElementById("winner").innerHTML = "";
}
document.addEventListener("keydown", (e)=>{
    if(e.key == "r"){
        refresh()
    }
})

function gamelogic(user,pc) {
    const userpoint = document.querySelector("#user-point");         
    const pcpoint = document.querySelector("#pc-point")         
    let winner = document.getElementById("winner");
    //let finalscore = document.getElementById("winner-txt");

    if (user !== pc) {

        if (user == 0) {
            document.querySelector(".human-title").innerHTML = "You choose Rock"
            if (pc == 1) {
                pcpoint.innerHTML = Number (pcpoint.innerHTML) + 1;
                document.getElementById("pc-txt").innerHTML = "Pc choose Paper";
                winner.innerHTML = "Pc Win"
            } else {
                userpoint.innerHTML = Number (userpoint.innerHTML) + 1
                winner.innerHTML = "You Win"
                document.getElementById("pc-txt").innerHTML = "Pc choose Scissors";

            }
        }

        if (user == 1){
            document.querySelector(".human-title").innerHTML = "You choose Paper"
            if (pc == 0) {
                userpoint.innerHTML = Number(userpoint.innerHTML) + 1;
                document.getElementById("pc-txt").innerHTML = "Pc choose Rock";
                winner.innerHTML = "You Win"

            } else {
                pcpoint.innerHTML = Number(pcpoint.innerHTML) + 1;
                document.getElementById("pc-txt").innerHTML = "Pc choose Scissors";
                winner.innerHTML = "Pc Win"

            }
        }

        if (user == 2){
            document.querySelector(".human-title").innerHTML = "You choose Scissors"
            if (pc == 0) {
                pcpoint.innerHTML = Number (pcpoint.innerHTML) + 1;
                document.getElementById("pc-txt").innerHTML = "Pc choose rock"
                winner.innerHTML = "Pc Win"

            } else {
                userpoint.innerHTML = Number(userpoint.innerHTML) + 1
                winner.innerHTML = "You Win"
                document.getElementById("pc-txt").innerHTML = "Pc choose Paper"

            }
        }
    }

    if (user == pc) {
        if (user == 0) {
            document.querySelector(".human-title").innerHTML = "You choose Rock"
            winner.innerHTML = "Draw"
        }else if(user == 1){
            document.querySelector(".human-title").innerHTML = "You choose Paper"
            winner.innerHTML = "Draw"
        }else{
            document.querySelector(".human-title").innerHTML = "You choose Scissors"
            winner.innerHTML = "Draw"
        }
        if(pc == 0){
            document.getElementById("pc-txt").innerHTML = "Pc choose Rock"
            winner.innerHTML = "Draw"
        }else if (pc == 1){
            document.getElementById("pc-txt").innerHTML = "Pc choose Paper"
            winner.innerHTML = "Draw"
        }else{
            document.getElementById("pc-txt").innerHTML = "Pc choose Scissors"
            winner.innerHTML = "Draw"
        }
    }
    //if (userpoint == 1) {
    //   document.getElementById("winner-txt").innerHTML = "you win"
    //}
}

