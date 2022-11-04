
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './app/01.Home/Home';
import Navbar from './app/04.Navbar/Navbar';
import { route } from './utils/route';
import Logement from './app/05.Logement/Logement';
import Footer from './app/02.Footer/Footer';
import ErrorPage from './app/07.ErrorPage/ErrorPage';
import APropos from './app/06.APropos/APropos';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path={route.about} element={<APropos />} />
        <Route path={route.logement} element={<Logement/>}/>
        <Route path={route.home} element={<Home/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
