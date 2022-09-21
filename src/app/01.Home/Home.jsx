import "./home.scss"

export default function Home () {
    return(<>
        <div id="home">
            <header>
                <div className="header-wrapper">
                    <p id="header-text">Chez vous, partout et ailleurs</p>
                    <img alt="header-background" id="header-img" src="./img/IMG.png"/>
                </div>
            </header>
        </div>
    </>)
}