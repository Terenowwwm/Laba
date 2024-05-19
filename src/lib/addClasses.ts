
class Card{
  rank: string;
  suit: string;
  constructor(rank: string, suit: string) {
    this.rank = rank;
    this.suit = suit;
  }
}

class CardDek {
  list: Card[];
  constructor() {
    this.list = []
    const ranks:string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
    const suites:string[] = ['diams', 'hearts', 'clubs', 'spades'];

    for(let rank of ranks){
      for(let suite of suites){
        this.list.push(new Card(rank, suite));
      }
    }
  }

  getCard = () =>{
    let random: number = Math.floor(Math.random() * this.list.length);
    // console.log(random);
    const tre:Card[] = this.list.splice(random,1);
    console.log(tre[0]);
    // console.log(this.list);
    return tre[0];
  }

  getCards = (num:number) =>{
    let cards: Card[] = [];
    for(let i = 0; i < num; i++){
      let one:Card = this.getCard();
      cards.push(one);
    }
  }
}


export default CardDek