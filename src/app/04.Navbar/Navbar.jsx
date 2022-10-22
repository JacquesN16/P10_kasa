import { route } from "../../utils/route";
import {Link, useLocation} from "react-router-dom";
import "./navbar.scss"

export default function Navbar (){
    const location = useLocation();

    return (<div className="nav-container">
        <ul className="nav d-flex justify-content-between">
            <li className="nav-item">
                <Link className="nav-link" aria-current="page" href={route.home}>
                    <img alt='logo' src='./img/LOGO.png' id="logo-navbar"/>
                </Link>
            </li>
            <div className="k-nav-item-grp d-flex flex-row ">
                <li className="nav-item h-100 d-flex align-items-center">
                    <a
                        style={{
                            textDecoration: location.pathname === `${route.home}` ? "underline" : "none",
                        }}
                        href={route.home}
                    > Accueil </a>
                </li>
                <li className="nav-item h-100 d-flex align-items-center">
                        <a
                            style={{
                                textDecoration: location.pathname === `${route.about}` ? "underline" : "none",
                            }}
                            href={route.about}>A Propos</a>
                </li>
            </div>
        </ul>
    </div>)
}
