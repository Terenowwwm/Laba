import './App.css';
import Card from "./Card/Card.tsx";
import CardDek from "./lib/addClasses.ts";
import {useState} from "react";

function App() {
  const [pin] = useState(new CardDek());
  const[cards, setCards] = useState<Card[]>([
  ]);
  const addBtn = () =>{
    // console.log(length);
    let opa = pin.getCards(5);
    setCards(opa);


  }
  return (
    <div className='playingCards faceImages'>
      {cards.map((element:string, index) => (
        <Card rank={element.rank} suit={element.suit} key={index}></Card>
      ))}
      <button onClick={addBtn}>Раздать карты</button>

    </div>

  );
}


export default App
