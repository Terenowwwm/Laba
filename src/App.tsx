import './App.css';
import Card from "./Card/Card.tsx";


function App() {
  return (
    <div className='playingCards faceImages'>
      <Card rank={'9'} suit={'♦'}></Card>
    </div>
  );
};

export default App
