import {useState, useEffect} from 'react'
import { faker } from "@faker-js/faker";


const Cat = ({}) => {
    const [catPic, setCatPic] = useState([])
    const [catName, setCatName] = useState("")
    const [catPrice, setCatPrice] = useState("")
    useEffect(()=>{
        const getCat = async () =>{
        const response = await fetch('https://api.thecatapi.com/v1/images/search')
        const data = await response.json();
        setCatPic(data[0])
        setCatName(faker.animal.cat());
        setCatPrice(faker.commerce.price(10,100,2,'£'));
        }
        getCat();
    }, [])


    return (
        <div>
            <h4>{catName}</h4>
            <img src={catPic.url}></img>
            <h4>{catPrice}</h4>
        </div>
    )
}


export default Cat