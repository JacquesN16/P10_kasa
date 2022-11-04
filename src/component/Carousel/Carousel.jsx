import React, {useState,useEffect} from 'react'
import "./carousel.scss"

export default function Carousel (props) {
    const [currentID, setCurrentID] = useState(0)
    const [maxId, setMaxId] = useState(5)
    const handlePrev = () => {
        let prev_id = currentID
        if(currentID <= 0 ){
            prev_id = maxId
        } else {
            prev_id = prev_id - 1
        }

        setCurrentID(prev_id)
    }

    const handleNext = () => {
        let next_id = currentID
        if(currentID >= maxId){
            next_id = 0
        } else {
            next_id = currentID + 1
        }
        setCurrentID( next_id)
    }

    const renderDisplay = (id) => {
        if(id === currentID){
            return "img active-img"
        }
        return "img hidden-img"

    }

    useEffect(()=>{
        if(!props.imgs){
            return
        }
        setMaxId(props.imgs.length - 1)
    },[props.imgs])

    return(<>
        <div className='carousel-container br-25'>
            <i
                className="fas fa-chevron-left navigate-icon"
                onClick={handlePrev}
                id="prev-icon"
                > </i>
            <div className="img-container">

                {props.imgs && props.imgs.map((item,idx) =>{return(
                    <img
                    key={idx}
                    src={item}
                    alt={`carousel-img-${idx}`}
                    className={renderDisplay(idx)}
                    />
                )})}
                <span id='carousel-index'> {currentID + 1} / {props.imgs? props.imgs.length.toString() : '0'}</span>

            </div>
            <i
                id="next-icon"
                className="fas fa-chevron-right navigate-icon"
                onClick={handleNext}> </i>

        </div>
    </>)
}
