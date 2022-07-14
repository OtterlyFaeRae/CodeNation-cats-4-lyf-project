import './App.css';
import Cat from './components/cat.js'
import Basket from './components/basket.js';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Home from "./components/main.js"
import About from "./components/about.js"
import {useState, useEffect} from "react"

function App() {
    const [show, setShow] = useState(false)
    const [basket, setBasket] = useState([])

    return (
        <div>
            <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <button onClick={() => setShow(true) }>Basket</button>
                <Basket title="Basket" onClose={() => setShow(false)} show={show}/>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
