// App.jsx
import React from "react";
import "/Users/thesohamghadge/INERITANCE01/frontend/frontend/src/index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CryptoDetailsPage from "./CryptoDetailsPage";
import CryptoPrice from "./components/CryptoPredictions";
import {
  BitcoinCard,
  EthereumCard,
  TetherCard,
  BNBCard,
  SolanaCard,
  XRPCard,
  USDCCard,
  CardanoCard,
  AvalanceCard,
  DogeCoinCard,
} from "./components/CryptoCards";
import { styled } from "@mui/system";
import AddTrans from "./addTransaction";
import "/Users/thesohamghadge/INERITANCE01/frontend/frontend/src/index.css";
import "/Users/thesohamghadge/INERITANCE01/frontend/frontend/src/Tweet.css";
import Footer from "./components/Footer";
import { ThemeProvider } from "@emotion/react";
import Theme from "./components/FooterTheme";
import { Typography } from "@material-ui/core";
import Markets from "./components/Markets";
import Trending from "./components/Trending";
import PageDetail from "./PageDetail";
import Header from "./components/Header";
import Form from "./Users/Form";
import GainersLosers from "./components/GainersLosers";
import CryptoPredictions from "./components/CryptoPredictions";

const AppContainer = styled("div")({
  color: "white",
  minHeight: "100vh",
});

const IntroContainer = styled("div")({
  color: "white",
  textAlign: "center",
  padding: "2rem",
  marginTop: "2rem",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(63,69,81,0.16)",
});
const IntrosContainer = styled("div")({
  color: "white",
  textAlign: "center",

  boxShadow: "0 2px 8px rgba(63,69,81,0.16)",
});
const GainerContainer = styled("div")({
  fontSize: "24px", // Adjust the font size as needed
});

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <>
          <AppContainer>
            <Header />

            <Routes>
              <Route
                path="/"
                element={
                  <div className="card-space ">
                    <div className="intro">
                      <IntroContainer maxWidth="md" className="intro">
                        <Typography
                          variant="h1"
                          component="div"
                          style={{ fontFamily: "inherit" }}
                          gutterBottom
                        >
                          Welcome to CryptoIntel!
                        </Typography>
                        <Typography
                          variant="h3"
                          style={{ fontFamily: "serif" }}
                          gutterBottom
                        >
                          Your Gateway to Informed Crypto Investing!
                        </Typography>
                        <Typography
                          variant="h4"
                          style={{ fontFamily: "serif" }}
                        >
                          Understand the Trends of Bitcoins, Ethereum, and Many
                          more CryptoCurrencies
                        </Typography>
                      </IntroContainer>
                      <IntroContainer>
                        <Typography
                          variant="h1"
                          style={{ fontFamily: "inherit" }}
                        >
                          Current Market Trends
                        </Typography>
                        <Markets />
                      </IntroContainer>
                      <IntroContainer>
                        <Typography
                          variant="h1"
                          style={{ fontFamily: "inherit" }}
                        ></Typography>
                        <Trending />
                      </IntroContainer>
                    </div>
                    <IntroContainer>
                      <GainerContainer>
                        <div className="Gainer">
                          <GainersLosers />
                        </div>
                      </GainerContainer>
                    </IntroContainer>
                  </div>
                }
              />
              <Route
                path="/about"
                element={
                  <div>
                    <p className="about1">
                      <span class="portfolio">
                        <h1>Create Your Portfolio</h1>
                        <span></span>
                      </span>
                    </p>
                    <p className="about2">
                      <span className="portfolio2">
                        <h2>
                          Craft Your Portfolio, Track Your Fortune: Seamlessly
                          manage your investments with buy, sell, and transfer
                          functionalities while staying updated on real-time
                          asset values.
                        </h2>
                      </span>
                    </p>
                    <Form />
                    <AddTrans></AddTrans>
                  </div>
                }
              />
              <Route
              path="/cryptopredictions"
              element={
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <Typography variant="h1">Crypto Predictions</Typography>
                {/* Wrap your CryptoPredictions component with styled components */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CryptoPredictions style={{ maxWidth: "600px" }} />
                </div>
              </div>
              }/>
              <Route
                path="/cryptocurrencies"
                element={
                  <div className="card-space">
                    <div className="intro">
                      <IntroContainer>
                        <Typography
                          variant="h1"
                          style={{ fontFamily: "inherit" }}
                        >
                          CryptoCurrencies
                        </Typography>
                      </IntroContainer>
                      <IntrosContainer>
                        <Typography
                          variant="h3"
                          style={{ fontFamily: "inherit" }}
                        >
                          For Details related to each Coins, click on View
                          Details
                        </Typography>
                      </IntrosContainer>
                    </div>
                    <BitcoinCard />
                    <EthereumCard />
                    <TetherCard />
                    <BNBCard />
                    <SolanaCard />
                    <XRPCard />
                    <USDCCard />
                    <CardanoCard />
                    <AvalanceCard />
                    <DogeCoinCard />
                  </div>
                }
              />
              <Route path="/coin/:id" element={<PageDetail />} />
              <Route path="/crypto/:id" element={<CryptoDetailsPage />} />
            </Routes>
            <Footer />
          </AppContainer>
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
