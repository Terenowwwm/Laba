

class PockerHand{
  cards: string[];

  constructor(cards: string[]) {
    this.cards = cards;
  }

  getOutcome = () =>{
    if (this.cards.length === 0) {
      console.log("Нет карт для определения результата");
      return;
    }
    let searchFirst: string[] =[];
    let secondSecond: string[] =[];
    console.log(searchFirst)
    for(let i=0; i<this.cards.length; i++){

      let first:string = this.cards[i].rank;
      let second:string = this.cards[i].suit;
      searchFirst.push(first);
      secondSecond.push(second);
    }

    const unique = [...new Set(searchFirst)];
    const diff = searchFirst.length - unique.length;
    console.log(diff)
    if(diff === 0){
      return 'Старшая карта';
    }else if(diff === 2){
      console.log('Две пары');
      return 'Две пары';
    }else if(diff === 1){
      console.log('Одна пара');
      return 'Одна пара';
    }
    console.log(diff)

  }
}
export default PockerHand;