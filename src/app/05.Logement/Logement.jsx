import React, {useEffect, useState} from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Carousel from '../../component/Carousel/Carousel';
import logements from "../../data/logements.json"
import "./logement.scss"
import Dropdown from "../../component/DropdownSimple/Dropdown";
import Host from "../../component/Host/Host";
const DEFAULT = {
    host:{
        name: '',
        picture:'',
    },
    rating:0,
    tags:[],
    title:'',
    location:'',
    equipments:[],
    description:''
}



export default function Logement () {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const logement_id = searchParams.get('id')

    const [ data, setData ] = useState(DEFAULT)

    useEffect(()=>{
        const logement = logements.find(item => item.id === logement_id)
        if(!logement){
            navigate("*")
            return
        }
        setData(logement)
    },[])

    return(
        <div className="logement-container center-wrapper">
            <Carousel imgs={data.pictures}/>
            <div className="info-container">
                <Host
                    name={data.host.name}
                    cover={data.host.picture}
                    rating={data.rating}
                    tags={data.tags}
                    title={data.title}
                    location={data.location}
                />
            </div>

            <div
                className="dropdown-container"
            >
                <Dropdown
                    title='Equipements'
                    description={data.equipments.join("\n")}
                />

                <Dropdown
                    title="Description"
                    description={data.description}
                />
            </div>
        </div>

        )}
