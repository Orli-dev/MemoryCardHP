const size4 = document.getElementById("size4");
const size5 = document.getElementById("size5");

const gameContainer = document.getElementById("gc");

let text = '{"name":"John"}';
const getCards4 = () => [
  { imgSrc: "Assets/Images/harry-red.png", name: "harry-red" },
  { imgSrc: "Assets/Images/harry-red.png", name: "harry-red" },
  { imgSrc: "Assets/Images/harry-blue.png", name: "harry-blue" },
  { imgSrc: "Assets/Images/harry-blue.png", name: "harry-blue" },
  { imgSrc: "Assets/Images/harry-green.png", name: "harry-green" },
  { imgSrc: "Assets/Images/harry-green.png", name: "harry-green" },
  { imgSrc: "Assets/Images/harry-yellow.png", name: "harry-yellow" },
  { imgSrc: "Assets/Images/harry-yellow.png", name: "harry-yellow" },
  { imgSrc: "Assets/Images/ron-red.png", name: "ron-red" },
  { imgSrc: "Assets/Images/ron-red.png", name: "ron-red" },
  { imgSrc: "Assets/Images/ron-blue.png", name: "ron-blue" },
  { imgSrc: "Assets/Images/ron-blue.png", name: "ron-blue" },
  { imgSrc: "Assets/Images/ron-green.png", name: "ron-green" },
  { imgSrc: "Assets/Images/ron-green.png", name: "ron-green" },
  { imgSrc: "Assets/Images/ron-yellow.png", name: "ron-yellow" },
  { imgSrc: "Assets/Images/ron-yellow.png", name: "ron-yellow" },
];
const getCards5 = () => [
  { imgSrc: "Assets/Images/harry-red.png", name: "harry-red" },
  { imgSrc: "Assets/Images/harry-red.png", name: "harry-red" },
  { imgSrc: "Assets/Images/harry-blue.png", name: "harry-blue" },
  { imgSrc: "Assets/Images/harry-blue.png", name: "harry-blue" },
  { imgSrc: "Assets/Images/harry-green.png", name: "harry-green" },
  { imgSrc: "Assets/Images/harry-green.png", name: "harry-green" },
  { imgSrc: "Assets/Images/harry-yellow.png", name: "harry-yellow" },
  { imgSrc: "Assets/Images/harry-yellow.png", name: "harry-yellow" },
  { imgSrc: "Assets/Images/ron-red.png", name: "ron-red" },
  { imgSrc: "Assets/Images/ron-red.png", name: "ron-red" },
  { imgSrc: "Assets/Images/ron-blue.png", name: "ron-blue" },
  { imgSrc: "Assets/Images/ron-blue.png", name: "ron-blue" },
  { imgSrc: "Assets/Images/ron-green.png", name: "ron-green" },
  { imgSrc: "Assets/Images/ron-green.png", name: "ron-green" },
  { imgSrc: "Assets/Images/ron-yellow.png", name: "ron-yellow" },
  { imgSrc: "Assets/Images/ron-yellow.png", name: "ron-yellow" },
  { imgSrc: "Assets/Images/hermione-red.jpeg", name: "hermione-red" },
  { imgSrc: "Assets/Images/hermione-red.jpeg", name: "hermione-red" },
  { imgSrc: "Assets/Images/hermione-blue.png", name: "hermione-blue" },
  { imgSrc: "Assets/Images/hermione-blue.png", name: "hermione-blue" },
  { imgSrc: "Assets/Images/hermione-green.png", name: "hermione-green" },
  { imgSrc: "Assets/Images/hermione-green.png", name: "hermione-green" },
  { imgSrc: "Assets/Images/hermione-yellow.png", name: "hermione-yellow" },
  { imgSrc: "Assets/Images/hermione-yellow.png", name: "hermione-yellow" },
  { imgSrc: "Assets/Images/voldemord.png", name: "voldemord" },
];
// const sizeGrid = () => {
//   if (size5.checked == true) {
//     gameContainer.classList = "game-container5";

//     cardData = getCards5();
//   } else {
//     cardData = getCards4();

//     gameContainer.classList = "game-container4";
//   }

//   return cardData;
// };
const cardGen = () => {
  //gameContainer.classList = "game-container4";
  const cardData = getCards4();
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const back = document.createElement("div");
    const front = document.createElement("div");
    const fogTopLeft = document.createElement("img");
    const fogTopRight = document.createElement("img");
    const fogBottonLeft = document.createElement("img");
    const fogBottonRight = document.createElement("img");
    const hogwarts = document.createElement("img");
    const pic = document.createElement("img");
    card.classList = "card";
    front.classList = "card-front card-face";
    back.classList = "card-back card-face";
    fogTopRight.classList = "fog fog-top-right";
    fogBottonLeft.classList = "fog fog-bottom-left";
    fogTopLeft.classList = "fog fog-top-left";
    fogBottonRight.classList = "fog fog-bottom-right";
    hogwarts.classList = "hogwarts";
    fogBottonRight.src = "Assets/Images/fog.png";
    fogTopLeft.src = "Assets/Images/fog.png";
    fogTopRight.src = "Assets/Images/fog.png";
    fogBottonLeft.src = "Assets/Images/fog.png";
    hogwarts.src = "Assets/Images/Hogwarts-logo.png";
    pic.classList = "pic";
    pic.src = item.imgSrc;

    // console.log(card);
    card.appendChild(front);
    back.appendChild(fogBottonLeft);
    back.appendChild(fogBottonRight);
    back.appendChild(fogTopRight);
    back.appendChild(fogTopLeft);
    back.appendChild(hogwarts);
    card.appendChild(back);
    front.appendChild(pic);
    card.appendChild(front);
    gameContainer.appendChild(card);

    // console.log(gameContainer);
  });
};
cardGen();

class CardMemory {
  constructor(cardsArray) {
    this.cardsArray = cardsArray;

    this.player = document.getElementById("name");
    this.match = document.getElementById("match");
    this.wins = document.getElementById("wins");
  }

  startGame() {
    this.cardToCheck = null;
    this.matches = 0;
    this.matchesCards = [];
    this.busy = true;

    setTimeout(() => {
      this.shuffleCards();
      this.busy = false;
    }, 500);
    this.hideCards();
  }
  readNames() {
    const obj = JSON.parse(text);
    this.player.innerText = obj.name;
  }
  hideCards() {
    this.cardsArray.forEach((card) => {
      card.classList.remove("visible");
    });
  }

  gameOver() {
    document.getElementById("game-over-text").classList.add("visible");
  }

  winner() {
    document.getElementById("win-text").classList.add("visible");
  }

  flipCard(card) {
    if (this.canFlipCard(card)) {
      card.classList.add("visible");
      if (this.cardToCheck) {
        this.checkForCardMatch(card);
      } else {
        this.cardToCheck = card;
      }
    }
  }

  checkForCardMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck)) {
      this.cardMatch(card, this.cardToCheck);
      this.matches++;
      this.match.innerText = this.matches;
    } else {
      this.cardMisMatch(card, this.cardToCheck);
    }

    this.cardToCheck = null;
  }

  cardMatch(card1, card2) {
    this.matchesCards.push(card1);
    this.matchesCards.push(card2);
    card1.classList.add("matched");
    card2.classList.add("matched");
    if (this.matchesCards.length == this.cardsArray.length) {
      this.wins++;
      this.match = 0;
      this.winner();
    }
  }

  cardMisMatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      card1.classList.remove("visible");
      card2.classList.remove("visible");
      this.busy = false;
    }, 1000);
  }
  getCardType(card) {
    return card.getElementsByClassName("pic")[0].src;
  }
  canFlipCard(card) {
    return (
      !this.busy &&
      !this.matchesCards.includes(card) &&
      card != this.cardToCheck
    );
  }

  shuffleCards() {
    for (let i = 0; i < this.cardsArray.length; i++) {
      let randI = Math.floor(Math.random() * (i * 1));
      this.cardsArray[randI].style.order = i;
      this.cardsArray[i].style.order = randI;
    }
  }
}
function ready() {
  let overlays = Array.from(document.getElementsByClassName("overlay-text"));

  let gc5 = document.getElementsByClassName("game-container5");
  let cards = Array.from(document.getElementsByClassName("card"));

  let game = new CardMemory(cards);

  // overlays.forEach((overlays) => {
  //   size5.addEventListener("click", () => {
  //     overlays.classList.remove("visible");

  //     game.readNames();
  //     game.startGame();
  //   });
  // });
  //   overlays.forEach((overlays) => {
  //     size4.addEventListener("click", () => {
  //       overlays.classList.remove("visible");

  //       game.readNames();
  //       game.startGame();
  //     });
  //   });
  overlays.forEach((overlays) => {
    overlays.addEventListener("click", () => {
      overlays.classList.remove("visible");

      game.startGame();
      game.readNames();
    });
  });
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      game.flipCard(card);
    });
  });
}
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else {
  ready();
}
