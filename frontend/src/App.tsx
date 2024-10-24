import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ErrorFallback } from "./components/Errors";
import NavBar from "./components/NavBar";
import { routesConfig } from "./constants";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <div>
          <NavBar />
          <Routes>
            {routesConfig.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
