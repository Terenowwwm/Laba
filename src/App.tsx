import './App.css';
import Card from "./Card/Card.tsx";
import CardDek from "./lib/addClasses.ts";

function App() {
  const pin = new CardDek()
  const addBtn = () =>{
    pin.getCards(5);
  }
  return (
    <div className='playingCards faceImages'>
      <Card rank={'9'} suit={'♦'}></Card>
      <button onClick={addBtn} >cards</button>
    </div>
  );
};


export default App
