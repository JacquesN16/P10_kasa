import { route } from "../../utils/route";
import { Link } from "react-router-dom";
export default function Navbar (){

    return (<>
        <ul className="nav d-flex justify-content-between">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href={route.home}>
                    <img alt='logo' src='./img/LOGO.png' id="logo-navbar"/>
                </Link>
            </li>
            <div className="k-nav-item-grp d-flex flex-row ">
                <li className="nav-item h-100 d-flex align-items-center">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item h-100 d-flex align-items-center">
                    <a className="nav-link disabled">Disabled</a>
                </li>
            </div>
        </ul>
    </>)
}