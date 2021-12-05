const path = "Assets/Images/";
const format = ".png";

let cards = [];
let randomCards;
let idCount = 0;
class Card {
  constructor() {
    this.id = idCount;
    let i = idCount + 1;
    this.img = path + i + format;
    idCount++;
    add(this);
  }
}

function add(card) {
  cards.push(card);
}

function clear() {
  cards = [];
  randomCards = [];
  idCount = 0;
}
