import {useState, useEffect} from 'react'


const Cat = ({}) => {
    const [catPic, setCatPic] = useState([])
    useEffect(()=>{
        const getCat = async () =>{
        const response = await fetch('https://api.thecatapi.com/v1/images/search')
        const data = await response.json();
        setCatPic(data[0])
        }
        getCat();
    }, [])
    console.log(catPic.url)
    return (
        <div>
            <h4></h4>
            <img src={catPic.url}></img>
        </div>
    )
}


export default Cat