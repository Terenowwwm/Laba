import './App.css';
import Card from "./Card/Card";
import CardDek from "./lib/addClasses";
import {useState} from "react";
import PockerHand from "./lib/pockerHand";
import Result from "./Card/result";

const App = () => {
  const [pin] = useState(new CardDek());
  const[cards, setCards] = useState<Card[]>([
  ]);
  const [tre, setTre] = useState<string>("");

  const result = new PockerHand(cards);

  const addBtn = () =>{
    let opa = pin.getCards(5);
    setCards(opa);
    if(cards.length > 0){
      let tre:string | undefined = result.getOutcome();
      setTre(tre);
    }
  }

  return (
    <div className='playingCards faceImages'>
      {cards.map((element: string, index) => (
        <Card rank={element.rank} suit={element.suit} key={index}></Card>
      ))}

      <button className='btn btn-dark' onClick={addBtn}>Раздать карты</button>
      <Result res={tre} />
    </div>

  );
}


export default App
