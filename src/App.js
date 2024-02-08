import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {

  useEffect(() => {
    tg.ready();
  }, []);

  const oneClose = ()=>{
    tg.close();
  }

  return (
    <div className="App">
      <button onClick={oneClose}>Закрыть</button>
    </div>
  );
}

export default App;
