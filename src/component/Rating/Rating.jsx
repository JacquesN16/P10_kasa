import {useState, useEffect} from 'react'

export default function Rating (props){

    const allStars = [1,2,3,4,5]
    const renderColor = (idx) => {
        if(idx < props.rating){
            return "red"
        } else {
            return "gray"
        }
    }
    console.log(props)
    return(<>
        <div className="rating-container">

           {props.rating && allStars.map((start,idx)=>{return(
            <i key={idx} className="fas fa-star" style={{color:`${renderColor(idx)}`}}></i>
           )})}
        </div>
    </>)
}
