import logo from './logo.png';
import './App.css';
import  ComponentA  from './components/componetA';
;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Contacto</h1>
        <ComponentA />

       
      </header>
    </div>
  );
}

export default App;
