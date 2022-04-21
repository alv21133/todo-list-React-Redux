import React from "react";

export const Navbar = () => {
  return (
    <nav
      className="navbar has-background-grey-lighter"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a role="button" className="navbar-burger">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item has-text-weight-semibold is-italic">
            FmStore
          </a>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
