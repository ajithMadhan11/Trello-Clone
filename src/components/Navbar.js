import React from "react";
import styled from "styled-components";

const NavbarCont = styled.div`
  background: rgba(75, 191, 107, 0.8);

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  padding: 20px;
  width: inherit;
  color: #ffffff;
  font-size: 30px;
  font-weight: 400;
`;

const Navbar = () => {
  return <NavbarCont>Trello - Clone</NavbarCont>;
};

export default Navbar;
