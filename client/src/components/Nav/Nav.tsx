import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <p className="nav-link active" aria-current="page">
                Home
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Log in</p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Sing up</p>
            </li>
            <li className="nav-item">
              <p className="nav-link disabled" aria-disabled="true">
                All trips
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
