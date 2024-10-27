import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { ErrorFallback, NotFound } from "./components/Errors";
import Home from "./components/Home";
import InfosysBHP from "./components/InfosysBHP";
import RentalApp from "./components/RentalApp";
import WeatherApp from "./components/WeatherApp";

interface RoutesConfig {
  label: string;
  path: string;
  element: React.FC;
}
interface NavBarProp {
  routesConfig: RoutesConfig[];
}
const NavBar: React.FC<NavBarProp> = ({ routesConfig }) => {
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Box>{t("joshKeisler")}</Box>
          <Box>{t("webResume")}</Box>
        </Typography>
        <Box>
          {routesConfig.map(({ path, label }) => (
            <Button key={path} color="inherit" component={Link} to={path}>
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

function App() {
  const { t } = useTranslation();
  const routesConfig: RoutesConfig[] = [
    {
      label: t("home"),
      path: "/",
      element: Home,
    },
    {
      label: t("weatherApp"),
      path: "/weather",
      element: WeatherApp,
    },
    {
      label: t("infosysBHP"),
      path: "/infosys",
      element: InfosysBHP,
    },
    {
      label: t("rentalApp"),
      path: "/rental",
      element: RentalApp,
    },
    {
      label: t("notFound"),
      path: "*",
      element: NotFound,
    },
  ];
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <NavBar routesConfig={routesConfig} />
        <Routes>
          {routesConfig.map(({ path, element: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
