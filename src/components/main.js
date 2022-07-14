import {useState, useEffect} from 'react'
import Cat from './cat'
import Basket from './basket'
import { faker } from "@faker-js/faker";
import { Container } from './styles/main.style'

const Main = () => {
    const [boughtCats, setBoughtCats] = useState([])
    const [catList, setCatList] = useState([])

    useEffect(()=>{
        const getCat = async () =>{
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=20')
            const data = await response.json();
            const cats = data.map((cat)=>{
                return {pic: cat.url,
                name: faker.name.firstName(),
                breed: faker.animal.cat(),
                price: faker.finance.amount()
                }
            })
            setCatList([...cats])
        }
        getCat();
    },[])
    return (
        <Container>
            <Basket boughtCats={boughtCats} setBoughtCats={setBoughtCats}/>
            {catList.map((cat) => {
                return <Cat boughtCats={boughtCats} 
                setBoughtCats={setBoughtCats} 
                pic={cat.pic} 
                name={cat.name} 
                breed={cat.breed} 
                price={cat.price}
                key={(new Date().getTime()*Math.random())}/>})}
        </Container>
        
    )
    
}

export default Main