let cards = prompt("Com quantas cartas quer jogar? Escolha um número par entre 4 e 14 cartas:");

verify(cards);

function verify() {
  if(cards%2 !== 0 || cards < 4 || cards > 14 || isNaN(cards)) {
    alert("Escolha um número válido de cartas!");
    cards = prompt("Com quantas cartas quer jogar? Escolha um número par entre 4 a 14 cartas:");
    verify(cards); 
 }
}

let cardList = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];

let cardsPlaying =[];

for (let i = 0; i < cards/2; i++) {
       
  cardsPlaying.push(`<div class="card" onclick="select(this); lastElement(this)">
  <div class="front-face face"><img src="imgs/front.png" alt=""></div>
  <div class="back-face face"><img src="imgs/${cardList[i]}" alt=""></div></div>`);
  
  cardsPlaying.push(`<div class="card" onclick="select(this); lastElement(this)">
  <div class="front-face face"><img src="imgs/front.png" alt=""></div>
  <div class="back-face face"><img src="imgs/${cardList[i]}" alt=""></div></div>`);
 
  cardsPlaying = cardsPlaying.sort(comparador);
}


document.querySelector(".container").innerHTML = cardsPlaying.join(' ');

let compare = [];
let lastSelected;
let playCount = 0;
let cardsFlipped = [];

function lastElement(element) {
  lastSelected = element;
}

function removeFlip(element) {
  element.classList.remove("flip");
}

function removeClick(element) {
  element.removeAttribute("onclick");
}

function addClick(element) {
  element.setAttribute("onclick", "select(this); lastElement(this)");
}

function select (element) {
  element.classList.add("flip");
  let item = element.querySelector(".back-face").innerHTML;
  compare.push(item);
  playCount++;
  if(compare.length > 1) {
    
    if(compare[0] !== compare[1]) {
      setTimeout(removeFlip, 1000, element);
      setTimeout(removeFlip, 1000, lastSelected);
      compare = [];
    } else {
      compare = [];
    }
    
  }
  cardsFlipped = Array.from(document.querySelectorAll(".flip"));
  if (cardsFlipped.length === cardsPlaying.length) {
    setTimeout(alert, 300, `Você ganhou em ${playCount} jogadas em ${min} minutos e ${sec} segundos!`);  
    setTimeout(playAgain, 300);
    clearInterval(idInterval);
  }
  
} 


function playAgain() {
  let choice = prompt("Quer jogar de novo? Responda com sim ou não:");
  if (choice === "sim") {
    document.location.reload(true);
  } else {
    alert("Obrigado por jogar!");
    clearInterval(idInterval);
  }
}


let sec = 0;
let min = 0;

function timer() {
  sec++;
  if(sec == 60) {
    min++;
    sec = 0;
    document.querySelector(".min").innerHTML = min;
}
  document.querySelector(".sec").innerHTML = sec;
}

const idInterval = setInterval(timer, 1000);

function comparador() { 
	return Math.random() - 0.5; 
}