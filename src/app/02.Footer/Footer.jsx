import "./Footer.scss";
import React from "react";
import logo from "./FooterLogo.svg";

export default function Footer  () {
  return (
    <footer>
      <img className="footer-img" alt="kasa logo" src={logo}></img>
      <p>© 2022 Kasa. All rights reserved</p>
    </footer>
  );
};


