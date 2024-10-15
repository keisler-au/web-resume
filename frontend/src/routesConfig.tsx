import Home from "./components/Home";
import WeatherApp from "./components/WeatherApp";
import InfosysBHP from "./components/InfosysBHP";
import RentalApp from "./components/RentalApp";

export const routesConfig = [
    {
        label: "Home",
        path: "/",
        element: <Home />
    },
    {
        label: "Weather App",
        path: "/weather",
        element: <WeatherApp />
    },
                {
        label: "Infosys & BHP",
        path: "/infosys",
        element: <InfosysBHP />
    },
                {
        label: "Rental App",
        path: "/rental",
        element: <RentalApp />
    }
];