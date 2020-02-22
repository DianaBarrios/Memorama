var images = ["logo-carssa.png", "logo-dhl.png", "logo-emissary-fondo.png", "logo-estafeta.png", "logo-fedex.png", "logo-quiken.png", "logo-redpack.png","logo-sendex.png","logo-carssa.png", "logo-dhl.png", "logo-emissary-fondo.png", "logo-estafeta.png", "logo-fedex.png", "logo-quiken.png", "logo-redpack.png","logo-sendex.png"];
var firstValue = "";
var secondValue = "";
var firstId = "";
var secondId = "";
var pairsFound = 0;
var turns = 0;
var start = false;

function shuffle(arr){
    arr.sort(() => Math.random() - 0.5);
}

function cleanValues(){
    firstValue = "";
    secondValue = "";
    firstId = "";
    secondId = "";
}

function startGame(){
    shuffle(images);
    for(let i = 0; i < 16; i++){
        document.getElementById(i.toString()).setAttribute("data-val","./assets/" + images[i]);
    }
    cleanValues();
    pairsFound = 0;
    start = true;
}

function restartGame(){
    cleanValues();
    pairsFound = 0;
    start = false;
    for(let i = 0; i < 16; i++){
        let c = document.getElementById(i.toString());
        c.setAttribute("data-val", "val");
        c.style.backgroundImage = "none";
        c.style.backgroundColor = "purple";
        c.style.color = "white";
        c.style.opacity = "1";
    }
}

function showCardValue(id){
    let card = document.getElementById(id);
    let value = card.getAttribute("data-val");
    card.style.backgroundImage = "url(" + value + ")";
}

function flipCard(clicked_id){
    if(start){
        showCardValue(clicked_id);
    
        clickedCard = document.getElementById(clicked_id);
        cardVal = clickedCard.getAttribute("data-val");
        
        if(firstValue != ""){
            secondValue = cardVal;
            secondId = clicked_id;
            checkPair(firstId, secondId);
            turns++;
        } else {
            firstValue = cardVal;
            firstId = clicked_id;
        }
    }
}

function checkGame(){
    if(pairsFound == 8){
        alert("Congratulations! You won. It only took you " + turns + " turns.");
    }
}

function checkPair(id1, id2){
    card1 = document.getElementById(id1);
    card2 = document.getElementById(id2);
    val1 = card1.getAttribute("data-val");
    val2 = card2.getAttribute("data-val");
    if(val1 == val2){
        pairsFound++;
        setTimeout(function(){
            card1.style.opacity = "0.5"
            card2.style.opacity = "0.5"
        }, 250);
        setTimeout(function(){
            checkGame();
        },350);
    } else {
        setTimeout(function(){
            card1.style.backgroundImage = "none";
            card2.style.backgroundImage = "none";
            card1.style.opacity = "1";
            card2.style.opacity = "1";
        }, 700);
        
    }
    cleanValues();
}

