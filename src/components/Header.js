import React from "react";
import { Link } from "react-router-dom";
import bgcolors from "../utils/BgColors";

const dropdownBorder = "1px solid fbfcfd";

function Header(props) {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand navbar-light bg-light">
        <p className="navbar-brand">{props.pageTitle}</p>
        <ul className="nav nav-pills">
          <li>
            <div className="btn-group">
              <Link
                id="button-basic"
                className="btn btn-primary"
                aria-controls="dropdown-basic"
                style={{
                  backgroundcolor: bgcolors.DodgerBlue,
                  borderColor: bgcolors.DodgerBlue
                }}
                to="/home"
              >
                Home<span className="caret"></span>
              </Link>
            </div>
            <div className="btn-group">
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Employee <span className="caret"></span>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link
                    className="dropdown-item"
                    style={{
                      backgroundcolor: bgcolors.DodgerBlue,
                      border: dropdownBorder
                    }}
                    to="/employees"
                  >
                    View All Employess
                  </Link>
                  <Link
                    className="dropdown-item"
                    style={{
                      backgroundcolor: bgcolors.DodgerBlue,
                      border: dropdownBorder
                    }}
                    to="/addEmployee"
                  >
                    Add New Employee
                  </Link>
                  <Link
                    className="dropdown-item"
                    style={{
                      backgroundcolor: bgcolors.DodgerBlue,
                      border: dropdownBorder
                    }}
                    to="/employees"
                  >
                    Search Employee
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
