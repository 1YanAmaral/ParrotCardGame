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
let gameOver = 0;
let array = [];

function lastElement(element) {
  lastSelected = element;
}

function select (element) {
  element.classList.add("flip");
  let item = element.querySelector(".back-face").innerHTML;
  compare.push(item);
  playCount++;
  if(compare.length > 1) {
    if(compare[0] !== compare[1]) {
      alert('nope');
      element.classList.remove("flip");
      lastSelected.classList.remove("flip");
      compare = [];
    } else {
      compare = [];
    }
  }
  array = Array.from(document.querySelectorAll(".flip"));
  console.log(array.length);
  if (array.length === cardsPlaying.length) {
    alert(`Você ganhou em ${playCount} jogadas!`);
  } 
}




function comparador() { 
	return Math.random() - 0.5; 
}