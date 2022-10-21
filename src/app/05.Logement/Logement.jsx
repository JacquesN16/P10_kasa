import React, {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import Carousel from '../../component/Carousel/Carousel';
import logements from "../../data/logements.json"
import "./logement.scss"
import Dropdown from "../../component/DropdownSimple/Dropdown";
import Host from "../../component/Host/Host";

export default function Logement () {
    const [searchParams] = useSearchParams()
    const logement_id = searchParams.get('id')
    const [ data, setData ] = useState(logements.find(item => item.id === logement_id))
    return(
        <div className="logement-container">
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

            <div style={{"display": "flex"}}>
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
