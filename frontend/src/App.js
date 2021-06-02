import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import MyBadge from './components/MyBadge';
import WarningSign from './components/WarningSign'
import SingleBook from './components/SingleBook'

const MockBookObj = {
    "asin": "1250082757",
    "title": "Born of Vengeance: The League: Nemesis Rising",
    "img": "https://images-na.ssl-images-amazon.com/images/I/91J28bj3PYL.jpg",
    "price": 26.09,
    "category": "scifi"
}

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
            <Container>
                <Row>
                    <Col/>
                    <Col>
                        <SingleBook book={MockBookObj}/>
                    </Col>
                    <Col/>
                </Row>
            </Container>

        </div>
    );
}

export default App;
