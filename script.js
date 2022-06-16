let cards = prompt("Com quantas cartas quer jogar? Escolha entre 4 a 14 cartas:");


if(cards%2 !== 0 || cards < 4 || cards > 14) {
   alert("Escolha um número válido de cartas!");
   cards = prompt("Com quantas cartas quer jogar? Escolha entre 4 a 14 cartas:");
    
}




let cardList = [];


for (let i = 0; i < cards; i++) {
        document.querySelector(".container").innerHTML += 
        `<div class="card" onclick="select(this)">
        <div class="front-face face">
          <img src="imgs/front.png" alt="">
        </div>
        <div class="back-face face">
          <img src="imgs/metalparrot.gif" alt="">
        </div>
    </div>`;
    }



function select (element) {
  element.classList.toggle("flip");
}
   