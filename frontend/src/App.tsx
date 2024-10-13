import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import WeatherApp from "./components/WeatherApp";
import InfosysBHP from "./components/InfosysBHP";
import RentalApp from "./components/RentalApp";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<WeatherApp />} />
            <Route path="/infosys" element={<InfosysBHP />} />
            <Route path="/rental" element={<RentalApp />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
