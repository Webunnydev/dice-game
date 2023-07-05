function dice(){
    var whiteRange = Math.floor(Math.random()*6);
    var blackRange = Math.floor(Math.random()*6);
    function whiteDice(){
        document.querySelector(".dice").style.flexDirection="row";
        document.querySelector(".dice").style.marginBottom="5rem";    
        document.querySelector("img#white").style.paddingRight="5rem";   
        document.querySelector("img#white").style.height="15rem";
        document.querySelector("img#white").style.width="15rem";

    
        if (whiteRange === 0){
            document.querySelector("img#white").setAttribute("src", "../images/wone.png")
        }
        else if (whiteRange === 1){
            document.querySelector("img#white").setAttribute("src", "../images/wtwo.png")   
        }
        else if (whiteRange === 2){
            document.querySelector("img#white").setAttribute("src", "../images/wthree.png")   
        }
        else if (whiteRange === 3){
            document.querySelector("img#white").setAttribute("src", "../images/wfour.png")   
        }
        else if (whiteRange === 4){
            document.querySelector("img#white").setAttribute("src", "../images/wfive.png")   
        }
        else{
            document.querySelector("img#white").setAttribute("src", "../images/wsix.png")   
        }
    }
    console.log(whiteDice());
    
    function blackDice(){
        document.querySelector(".dice").style.flexDirection="row";
        document.querySelector("img#black").style.height="15rem";
        document.querySelector("img#black").style.width="15rem";

    
        if (blackRange === 0){
            document.querySelector("img#black").setAttribute("src", "../images/bone.png")
        }
        else if (blackRange === 1){
            document.querySelector("img#black").setAttribute("src", "../images/btwo.png")   
        }
        else if (blackRange === 2){
            document.querySelector("img#black").setAttribute("src", "../images/bthree.png")   
        }
        else if (blackRange === 3){
            document.querySelector("img#black").setAttribute("src", "../images/bfour.png")   
        }
        else if (blackRange === 4){
            document.querySelector("img#black").setAttribute("src", "../images/bfive.png")   
        }
        else{
            document.querySelector("img#black").setAttribute("src", "../images/bsix.png")   
        }
    }
    console.log(blackDice());
    if (blackRange>whiteRange){
        document.querySelector(".output").innerHTML="Winner: Player 2";
    }
    else if (blackRange<whiteRange){
        document.querySelector(".output").innerHTML="Winner: Player 1";
    }
    else{
        document.querySelector(".output").innerHTML="Draw, Roll Again!!!";
    }
}
function editName(){
    var name1 = prompt("Change the name of PLAYER 1 to: ");
    var name2 = prompt("Change the name of PLAYER 2 to: ");
    document.querySelector("#player1").innerHTML = name1.toUpperCase();
    document.querySelector("#player2").innerHTML = name2.toUpperCase();
    if (name1 === ""){
        document.querySelector("#player1").innerHTML = "No Name";
    }
    if (name2=== ""){
        document.querySelector("#player2").innerHTML ="No name";
    }
    if (name1 === "" && name2 === ""){
        document.querySelector("#player1").innerHTML = "No name"; 
        document.querySelector("#player2").innerHTML = "No name";  
    }
}



