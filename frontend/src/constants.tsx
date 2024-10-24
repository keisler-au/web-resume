import { NotFound } from "./components/Errors";
import Home from "./components/Home";
import InfosysBHP from "./components/InfosysBHP";
import RentalApp from "./components/RentalApp";
import WeatherApp from "./components/WeatherApp";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://domain.com"
    : "http://localhost:8000";

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
  {
    label: "Not Found",
    path: "*",
    element: <NotFound />,
  },
];

export const pageReferences: { [key: string]: number } = {
  home: 1,
  infosys: 2,
};
