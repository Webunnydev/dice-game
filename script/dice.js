function dice(){
    function whiteDice(){
        document.querySelector(".dice").style.flexDirection="row";
        document.querySelector(".dice").style.marginBottom="5rem";    
        document.querySelector("img#white").style.paddingRight="5rem";   
        document.querySelector("img#white").style.height="15rem";
        document.querySelector("img#white").style.width="15rem";
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
    
    console.log(whiteDice());
    
    function blackDice(){
     
        document.querySelector("img#black").style.height="15rem";
        document.querySelector("img#black").style.width="15rem";
    
        var diceRange = Math.floor(Math.random()*6);
    
        if (diceRange === 0){
            document.querySelector("img#black").setAttribute("src", "../images/bone.png")
        }
        else if (diceRange === 1){
            document.querySelector("img#black").setAttribute("src", "../images/btwo.png")   
        }
        else if (diceRange === 2){
            document.querySelector("img#black").setAttribute("src", "../images/bthree.png")   
        }
        else if (diceRange === 3){
            document.querySelector("img#black").setAttribute("src", "../images/bfour.png")   
        }
        else if (diceRange === 4){
            document.querySelector("img#black").setAttribute("src", "../images/bfive.png")   
        }
        else{
            document.querySelector("img#black").setAttribute("src", "../images/bsix.png")   
        }
    }
    
    console.log(blackDice());
}
