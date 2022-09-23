import "./home.scss"
import {useState,useEffect} from "react"
import logements from "../../data/logements.json" 
import { route } from '../../utils/route';


export default function Home () {

    const [data, setData] = useState([])

    const goToDetailPage = (id) => {
        if(!id){
            return
        }
     window.location.replace(`${route.logement}?id=${id}`)
    }

    const renderCard = (datum) =>{

        return(
        <div 
            key={datum.id} 
            className="card k-card br-10"
            onClick={()=>goToDetailPage(datum.id)}
            style={{
                background: 
                `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5)), url('${datum.cover}') no-repeat`
            }}
        > 
            {/* <img src={datum.cover} alt={`cover-${datum.id}`}/> */}
            <span id="k-card-title">{datum.title} </span>
        </div>)

    }

    useEffect(()=>{
       setData(logements)
    },[])

    return(<>
        <div id="home">
            <header>
                <div className="header-wrapper br-25">
                    <p id="header-text">Chez vous, partout et ailleurs</p>
                    {/* <img alt="header-background" id="header-img" src="./img/IMG.png"/> */}
                </div>
            </header>
            <main className="cards-container br-25 row">
                {data && data.map(item => renderCard(item))}
            </main>
        </div>
    </>)
}