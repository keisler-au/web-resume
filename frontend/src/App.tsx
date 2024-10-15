import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import { routesConfig } from "./routesConfig";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          {routesConfig.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
