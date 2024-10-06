import logo from './logo.svg';
import './App.css';
import { Primercomponente } from './componentes/Primercomponente';
import { Segundocomponente } from './componentes/Segundocomponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>Darwin y Edgar </p>
       <Primercomponente/>
       <hr/>
       <Segundocomponente/>
      
      </header>
    </div>
  );
}

export default App;
