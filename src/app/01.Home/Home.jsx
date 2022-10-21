import "./home.scss"
import {useState,useEffect} from "react"
import logements from "../../data/logements.json"
import { route } from '../../utils/route';
import Card from "../../component/Card/Card";
import {Link} from "react-router-dom";


export default function Home () {

    const [data, setData] = useState([])

    useEffect(()=>{
       setData(logements)
    },[])

    return(<>
        <div id="home">
            <header>
                <div className="header-wrapper br-25">
                    <p id="header-text">Chez vous, partout et ailleurs</p>
                </div>
            </header>
            <main className="cards-container br-25 row">
                <section className="card-list">
                {data && data.map((item,idx) =>{
                    return (
                    <Link key={idx} to={`/announce/${item.id}`}>
                        <Card key={idx} id={idx} title={item.title} cover={item.cover} />
                    </Link>
                    )})}
                </section>
            </main>
        </div>
    </>)
}
