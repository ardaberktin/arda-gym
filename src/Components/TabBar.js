import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./TabBar.css";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddIcon from "@mui/icons-material/Add";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StraightenIcon from "@mui/icons-material/Straighten";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

function TabBar() {
  const [click, setClick] = useState(false);

  const location = useLocation();

  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const isActive = (path) => {
    return location.pathname === path ? "highlight" : "";
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-links ${isActive("/")}`}
                onClick={closeMobileMenu}
              >
                <HomeIcon />
                <p>Home</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/history"
                className={`nav-links ${isActive("/history")}`}
                onClick={closeMobileMenu}
              >
                <CalendarMonthIcon />
                <p>History</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/start-workout"
                className={`nav-links ${isActive("/start-workout")}`}
                onClick={closeMobileMenu}
              >
                <AddIcon />
                <p>Start Workout</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/exercises"
                className={`nav-links ${isActive("/exercises")}`}
                onClick={closeMobileMenu}
              >
                <FitnessCenterIcon />
                <p>Exercises</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/measure"
                className={`nav-links ${isActive("/measure")}`}
                onClick={closeMobileMenu}
              >
                <StraightenIcon />
                <p>Measure</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default TabBar;
