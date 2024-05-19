import './App.css';
import Card from "./Card/Card.tsx";
import CardDek from "./lib/addClasses.ts";

function App() {
  return (
    <div className='playingCards faceImages'>
      <Card rank={'9'} suit={'♦'}></Card>
    </div>
  );
};

let tre = new CardDek();
tre.vivod();

export default App
