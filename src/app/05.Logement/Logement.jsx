import React, {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'
import Carousel from '../../component/Carousel/Carousel';
import Dropdown from '../../component/Dropdown/Dropdown';
import Rating from '../../component/Rating/Rating';
import Tag from '../../component/Tag/Tag';
import logements from "../../data/logements.json"
import "./logement.scss"
import DropdownSimple from "../../component/DropdownSimple/DropdownSimple";
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
                <DropdownSimple
                    title='Equipements'
                    description={data.equipments.join("\n")}
                />

                <DropdownSimple
                    title="Description"
                    description={data.description}
                />
            </div>
        </div>

        )}
