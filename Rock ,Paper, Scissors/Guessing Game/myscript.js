let ranNumber = Math.floor(Math.random()*20);
function game() {
    let geuss = document.getElementById("num-inp").value;
    let txt = document.querySelector("#historyarea > h3");
    let point = document.getElementById("chance-point").innerHTML = Number(document.getElementById("chance-point").innerHTML)-1;

    if (geuss && geuss >= 1) {
        if (geuss > ranNumber) {
            txt.innerHTML = "بزرگه عددت";
        } else if(geuss < ranNumber) {
            txt.innerHTML = "کوچیکه عددت";
        }else{
            txt.innerHTML = ":) بردی ";
            document.getElementById("num-inp").disabled = true;
            document.getElementById("chance-txt").innerHTML = " بردی تبریک میگم :) ";
            document.getElementById("chance-point").style.display ="none";
            document.getElementById("btn").disabled = true;
            document.getElementById("main-box").style.backgroundColor="green";

        }
    }
    if(point == 0){
        txt.innerHTML = "باختی";
        document.getElementById("num-inp").disabled = true;
        document.getElementById("chance-txt").innerHTML = "دوباره شانستو امتحان کن";
        document.getElementById("chance-point").style.display ="none";
        document.getElementById("btn").disabled = true;
        document.getElementById("main-box").style.backgroundColor="red";

    }
}

