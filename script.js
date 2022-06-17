let cards = prompt("Com quantas cartas quer jogar? Escolha um número par entre 4 e 14 cartas:");

verify(cards);

function verify() {
  if(cards%2 !== 0 || cards < 4 || cards > 14 || isNaN(cards)) {
    alert("Escolha um número válido de cartas!");
    cards = prompt("Com quantas cartas quer jogar? Escolha entre 4 a 14 cartas:");
    verify(cards); 
 }
}


let cardList = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];
//cardList = cardList.sort(comparador);

let cardsPlaying =[];

for (let i = 0; i < cards/2; i++) {
       
  cardsPlaying.push(`<div class="card" onclick="select(this)">
  <div class="front-face face"><img src="imgs/front.png" alt=""></div>
  <div class="back-face face"><img src="imgs/${cardList[i]}" alt=""></div></div>`);
  
  cardsPlaying.push(`<div class="card" onclick="select(this)">
  <div class="front-face face"><img src="imgs/front.png" alt=""></div>
  <div class="back-face face"><img src="imgs/${cardList[i]}" alt=""></div></div>`);
 
  }
cardsPlaying = cardsPlaying.sort(comparador);


document.querySelector(".container").innerHTML = cardsPlaying;

console.log(cardsPlaying);






function select (element) {
  element.classList.toggle("flip");
}

function comparador() { 
	return Math.random() - 0.5; 
}