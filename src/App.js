
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './app/01.Home/Home';
import Navbar from './app/04.Navbar/Navbar';
import { route } from './utils/route';
import Logement from './app/05.Logement/Logement';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path={route.home} element={<Home/>} />
        
        <Route path={route.logement} element={<Logement/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
