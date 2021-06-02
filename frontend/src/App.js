
import './App.css';
import MyBadge from './components/MyBadge.js';

function App() {
    return (
        <div className="App">
            <MyBadge
                text={"textOfBadge"}
                color={"gray"}>
            </MyBadge>
        </div>
    );
}

export default App;
