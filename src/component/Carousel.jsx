import React, {useState,useEffect} from 'react'


export default function Carousel (props) {
    const [items, setItems] = useState(props.imgs)
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

    useEffect(()=>{
        if(!props.imgs){
            return
        }
        console.log(props.imgs[currentID])
        setMaxId(props.imgs.length - 1)
    },[props])

    return(<>
        <div>
            <button onClick={handlePrev}> back </button>
            <span>{currentID}</span>
            <img src={`${items[currentID]}`}/>
            <button onClick={handleNext}> go </button>
        </div>
    </>)
}