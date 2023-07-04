function dice(){
    document.querySelector(".dice").style.flexDirection="row";
    var diceRange = Math.floor(Math.random()*6);

    if (diceRange === 0){
        document.querySelector("img#white").setAttribute("src", "../images/wone.png")
    }
    else if (diceRange === 1){
        document.querySelector("img#white").setAttribute("src", "../images/wtwo.png")   
    }
    else if (diceRange === 2){
        document.querySelector("img#white").setAttribute("src", "../images/wthree.png")   
    }
    else if (diceRange === 3){
        document.querySelector("img#white").setAttribute("src", "../images/wfour.png")   
    }
    else if (diceRange === 4){
        document.querySelector("img#white").setAttribute("src", "../images/wfive.png")   
    }
    else{
        document.querySelector("img#white").setAttribute("src", "../images/wsix.png")   
    }
}

console.log(dice())

