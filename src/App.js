
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './app/01.Home/Home';
import Navbar from './app/04.Navbar/Navbar';
import { route } from './utils/route';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path={route.home} element={<Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;
