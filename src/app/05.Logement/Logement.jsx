import React, {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import Carousel from '../../component/Carousel/Carousel';
import Dropdown from '../../component/Dropdown/Dropdown';
import logements from "../../data/logements.json" 
import { route } from '../../utils/route';
import "./logement.scss"

export default function Logement () {
    const [searchParams] = useSearchParams()
    const logement_id = searchParams.get('id')
    const [ data, setData ] = useState(logements.find(item => item.id === logement_id))
    
    return(
        <div className="logement-container">
            <Carousel imgs={data.pictures}/>
            <div className="info-container">
                <div className="text-left">
                    <h2>{data.title}</h2>
                    <p>{data.location}</p>
                </div>
                <div className="text-right profile-container">
                    <span id="name-container">{data.host.name}</span>
                    <div id="host-profile-pic"></div>
                </div>
            </div>
            
            <Dropdown name='Equipements' data={data.equipments}/>
        </div>
        
        )
}