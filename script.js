let cards = prompt("Com quantas cartas quer jogar?");

    while(cards%2 !== 0) {
        cards = prompt("Com quantas cartas quer jogar?");
    }

let cardList =[];
cardList.length = cards;
let cont =0;
while(cont < cards) {
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + `<div class="card"><img src="imgs/front.png" alt="">
    </div>`;
    cont++;
}