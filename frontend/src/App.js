import './App.css';
import MyBadge from './components/MyBadge';
import WarningSign from './components/WarningSign'
import BookList from "./components/BooksList";
/*
const MockBookObj = {
    "asin": "1250082757",
    "title": "Born of Vengeance: The League: Nemesis Rising",
    "img": "https://images-na.ssl-images-amazon.com/images/I/91J28bj3PYL.jpg",
    "price": 26.09,
    "category": "scifi"
}*/
const BooksObjArr = [
    {
        "asin": "1940026091",
        "title": "Pandemic (The Extinction Files, Book 1)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg",
        "price": 7.81,
        "category": "scifi"
    },
    {
        "asin": "0425264041",
        "title": "Shards of Hope (Psy-Changeling Novel, A)",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91ku%2B0LppPL.jpg",
        "price": 7.59,
        "category": "scifi"
    },
    {
        "asin": "1250082757",
        "title": "Born of Vengeance: The League: Nemesis Rising",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91J28bj3PYL.jpg",
        "price": 26.09,
        "category": "scifi"
    },
    {
        "asin": "045146799X",
        "title": "Gameboard of the Gods",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81-vppSolJL.jpg",
        "price": 7.59,
        "category": "scifi"
    }
]

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
            <BookList books={BooksObjArr}> </BookList>
        </div>
    );
}

export default App;
