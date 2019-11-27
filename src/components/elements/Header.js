import React from "react";

import RMDBLogo from "../images/reactMovie_logo.png";
import { StyledHeader, StyledRMDBLogo } from "../styles/StyledHeader";
import { Link } from "@reach/router";

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link to="/">
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      {/* <h4>Home</h4>
      <h4>Movies</h4>
      <h4>TV Shows</h4> */}
    </div>
  </StyledHeader>
);

export default Header;
