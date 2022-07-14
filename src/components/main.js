import {useState, useEffect} from 'react'
import Cat from './Cat'
import { Container } from './styles/main.style'

const Main = () => {
    const [boughtCats, setBoughtCats] = useState([])
    return (
        <Container>
            <Cat boughtCats={boughtCats} setBoughtCats={setBoughtCats}/>
            <Cat boughtCats={boughtCats} setBoughtCats={setBoughtCats}/>
            <Cat boughtCats={boughtCats} setBoughtCats={setBoughtCats}/>
            <Cat boughtCats={boughtCats} setBoughtCats={setBoughtCats}/>
            <Cat boughtCats={boughtCats} setBoughtCats={setBoughtCats}/>
            <Cat boughtCats={boughtCats} setBoughtCats={setBoughtCats}/>
            <Cat boughtCats={boughtCats} setBoughtCats={setBoughtCats}/>
            <Cat boughtCats={boughtCats} setBoughtCats={setBoughtCats}/>
            <Cat boughtCats={boughtCats} setBoughtCats={setBoughtCats}/>
            <Cat boughtCats={boughtCats} setBoughtCats={setBoughtCats}/>
        </Container>
    )
    
}

export default Main