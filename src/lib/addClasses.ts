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
    const ranks:string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suites:string[] = ['diams', 'hearts', 'clubs', 'spades'];

    for(let rank of ranks){
      for(let suite of suites){
        this.list.push(new Card(rank, suite));
      }
    }
  }

  Card = () =>{
    console.log(this.list);
  }

}


export default CardDek