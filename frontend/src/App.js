import logo from './logo.svg';
import './App.css';
import MyBadge from './components/MyBadge.js';
import WarningSign from './components/WarningSign'

function App() {
    return (
        <div className="App">
          <header className="App-header">
            <WarningSign text="React is fun!"/>
            <MyBadge
                text={"textOfBadge"}
                color={"gray"}>
            </MyBadge>
          </header>
        </div>
    );
}

export default App;
