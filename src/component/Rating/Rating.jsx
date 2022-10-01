import {useState, useEffect} from 'react'

export default function Rating (props){

    const [starsCount, setStarsCount ] = useState([])

    useEffect(()=>{
        if(!props.rating){
            return 
        }

        const stars_arr = Array.from(Array(props.rating).keys())
        setStarsCount(stars_arr)
    },[props])

    return(<>
        <div className="rating-container">
           {starsCount && starsCount.map()}
        </div>
    </>)
}