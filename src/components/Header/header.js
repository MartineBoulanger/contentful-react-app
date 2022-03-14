import React from "react";
import { Link } from "react-router-dom";

import { useEntry } from "../../hooks/useEntry";
import BlackLoader from "../../assets/images/black-loader.gif";

const Header = () => {
  const { data } = useEntry({ entryId: "4douF9xufyc5sXBbBewACi" });

  const loader = (
    <div className="text-center pt-5">
      <img src={BlackLoader} alt="Loading..." />
    </div>
  );

  const logo =
    data.length === 0 ? (
      loader
    ) : (
      <Link className="navbar-brand" to="/landingpage">
        <img src={data.fields.headerLogo.fields.file.url} alt="..." />
      </Link>
    );

  const headerContent =
    data.length === 0
      ? loader
      : data.fields.headerLinks.map((item, i) => {
          return (
            <li className="nav-item" key={i}>
              <Link className="nav-link" to={item.fields.linkSlug}>
                {item.fields.nameLink}
              </Link>
            </li>
          );
        });

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {logo}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarToggler"
        >
          <ul className="navbar-nav">{headerContent}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
