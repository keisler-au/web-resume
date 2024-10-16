import Home from "./components/Home";
import InfosysBHP from "./components/InfosysBHP";
import RentalApp from "./components/RentalApp";
import WeatherApp from "./components/WeatherApp";

interface RouteConfig {
  label: string;
  path: string;
  element: JSX.Element;
}

export const routesConfig: RouteConfig[] = [
  {
    label: "Home",
    path: "/",
    element: <Home />,
  },
  {
    label: "Weather App",
    path: "/weather",
    element: <WeatherApp />,
  },
  {
    label: "Infosys & BHP",
    path: "/infosys",
    element: <InfosysBHP />,
  },
  {
    label: "Rental App",
    path: "/rental",
    element: <RentalApp />,
  },
];
