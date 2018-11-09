window.onload=start;
var imageLevel1=["../img/parejas/gatuna/hilonivel1","../img/parejas/gatuna/reynivel1","../img/parejas/gatuna/yayitanivel1"];
var used=null;
function start() {
    loadSplash();

    //Botones Menu iniical
    var btnMatchGame=document.getElementById("btnMatchGame");
    var btnMemory=document.getElementById("btnMemory");
    var btnCredits=document.getElementById("btnCredits");
    //Botones estrellas gemelas
    var btnBackMatch=document.getElementById("btnBackMatch");
    var btnHomeMatch=document.getElementById("btnHomeMatch");
    var btnLevelGatunaMatch=document.getElementById("btnLevelGatunaMatch");
    var btnLevelRayoMatch=document.getElementById("btnLevelGatunaMatch");
    var btnLevelAracneMatch=document.getElementById("btnLevelGatunaMatch");
    var btnLevelEvakyMatch=document.getElementById("btnLevelGatunaMatch");
    var btnLevelSocratesMatch=document.getElementById("btnLevelGatunaMatch");
    //Botones nivel 1
    var btnBackMatch1=document.getElementById("btnBackMatch1");
    var btnHomeMatch1=document.getElementById("btnHomeMatch1");
    var card1=document.getElementById("card1");
    var card2=document.getElementById("card2");
    var card3=document.getElementById("card3");
    var card4=document.getElementById("card4");
    var card5=document.getElementById("card5");
    var card6=document.getElementById("card6");

    //Agregar eventos a los botones
    //Botones Menu inicial
    btnMatchGame.addEventListener("click",function(){
        change("Start","MatchingGame");
    });
    
    //Botones Estrellas Gemelas
    btnBackMatch.addEventListener("click",function(){
        change("MatchingGame","Start");
    });
    btnHomeMatch.addEventListener("click",function(){
        change("MatchingGame","Start");
    });
    btnLevelGatunaMatch.addEventListener("click",function(){
        change("MatchingGame","MatchLevel1")
    });

    //BotonesMach nivel1
    btnBackMatch1.addEventListener("click",function(){
        change("MatchLevel1","MatchingGame");
    });
    btnHomeMatch1.addEventListener("click",function(){
        change("MatchLevel1","Start");
    });
    card1.addEventListener("click",function(){
        clickCard("card1");
    })
}

function change(id_hide,id_show){
    document.getElementById(id_hide).style.display="none";
    document.getElementById(id_show).style.display="block";
}

function loadSplash(){
    setTimeout(function() {
      document.getElementById("Splash").style.display = "none";
      document.getElementById("Start").style.display = "block";
    }, 4800);
}

const cards = document.querySelectorAll('.card-box');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    //hasFlippedCard = false;

    checkForMatch();
}

function checkForMatch() {
    
    let isMatch = firstCard.dataset.code === secondCard.dataset.code;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        //lockBoard = false;
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


cards.forEach(card => card.addEventListener('click', flipCard));

    


