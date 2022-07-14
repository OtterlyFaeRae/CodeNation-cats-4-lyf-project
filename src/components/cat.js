import {useState, useEffect} from 'react'
import { faker } from "@faker-js/faker";
import { CatBox, CatPic, BotBox, InfoBox, BadButton, Name } from './styles/cat.style'


const Cat = ({boughtCats, setBoughtCats}) => {
    const [cat, setCat] = useState({})
    useEffect(()=>{
        const getCat = async () =>{
            const response = await fetch('https://api.thecatapi.com/v1/images/search?limit1')
            const data = await response.json();
            setCat({
                pic: data[0].url,
                breed: faker.animal.cat(), 
                name: faker.name.firstName(),
                price: faker.commerce.price(10,100,2,'£')
            });
        }
        getCat();
    }, [])
    const handleClick = () =>{
        let cart = [...boughtCats]
        cart.push(cat)
        setBoughtCats(cart)
    }
    return (
        <CatBox>
            <Name>{cat.name}</Name>
            <CatPic src={cat.pic} alt={`A ${cat.breed} named ${cat.name} available for adoption.`}></CatPic>
            <BotBox>
                <InfoBox>
                    <h4>{cat.breed}</h4>
                    <h4>{cat.price}</h4>
                </InfoBox>
                <BadButton onClick={()=>handleClick()}>Add to basket</BadButton>
            </BotBox>
        </CatBox>
    )
}


export default Cat