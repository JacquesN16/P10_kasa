import React, {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import Carousel from '../../component/Carousel';
import logements from "../../data/logements.json" 
import { route } from '../../utils/route';

export default function Logement () {
    const [searchParams] = useSearchParams()
    const logement_id = searchParams.get('id')
    const [ data, setData ] = useState(logements.find(item => item.id === logement_id))
    
    return(
        <div>
        <Carousel imgs={data.pictures}/>
        {data.title}
        </div>)
}