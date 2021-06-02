import logo from './logo.svg';
import './App.css';
import WarningSign from './components/WarningSign'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text="React is fun!"/>
      </header>
    </div>
  );
}

export default App;
