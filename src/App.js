import './App.css';
import Basket from './components/basket.js';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Main from "./components/Main.js"
import About from "./components/about.js"
import {useState, useEffect} from "react"

function App() {
    const [show, setShow] = useState(false)
    const [basket, setBasket] = useState([])
    const [prices, setPrices] = useState([])
    
    return (
        <div>
            <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <button id="open-button" onClick={() => setShow(true)}>Basket</button>
                <Basket 
                title="Basket" 
                onClose={() => setShow(false)} 
                show={show} 
                basket={basket} 
                setBasket={setBasket}
                prices={prices}
                setPrices={setPrices}
                />
            </nav>
            <Routes>
                <Route path="/" element={<Main basket={basket} setBasket={setBasket}/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
