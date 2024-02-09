import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from '@emotion/styled';

const Logo = styled("img")({
    height: "50px", // Adjust the height as needed
    margin: "10px", // Adjust the margin for spacing
  });
  const Navbar = styled("nav")({
    display: "flex",
    alignItems: "center",
  });
  const Name = styled("span")({
    fontSize: "1.5rem", // Adjust the font size as needed
    fontWeight: "bold", // Add fontWeight if needed
    margin: "0 10px", // Adjust the margin for spacing
  });
  
const Header = () => {
  return (
    <div>
              <Navbar>
                <Logo src="/CryptoIntel.png" alt="Logo" />
                <Name>CryptoIntel</Name>

                <ul>
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/about">ABOUT</Link>
                  </li>
                  <li>
                    <Link to="/cryptocurrencies">CRYPTO-CURRENCIES</Link>
                  </li>
                  <li>
                    <Link to="/cryptopredictions">CRYPTO-PREDICTIONS</Link>
                  </li>
                  <li>
                    <Link to="http://localhost:3000/login">LOGIN</Link>
                  </li>
                  <li>
                    <Link to="http://localhost:3000/signup">SIGN-UP</Link>
                  </li>
                </ul>
                </Navbar>
            </div>
  )
}

export default Header
