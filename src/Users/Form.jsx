import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Define a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Custom primary color
    },
    background: {
      default: "#f0f0f0", // Set default background color
    },
  },
});

function Form() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" sx={{ color: "#3f51b5", marginBottom: '1rem' }}>
          Create a Portfolio
        </Typography>
        <form className="form" action="">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                required
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px", // Add border radius
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="E-mail"
                variant="outlined"
                fullWidth
                required
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px", // Add border radius
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px", // Add border radius
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Number of CryptoHoldings"
                variant="outlined"
                fullWidth
                required
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px", // Add border radius
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
                <InputLabel>Coin Invested</InputLabel>
                <Select>
                  <MenuItem value="Bitcoin">Bitcoin</MenuItem>
                  <MenuItem value="Ethereum">Ethereum</MenuItem>
                  <MenuItem value="Tether">Tether</MenuItem>
                  <MenuItem value="Binance Coin">Binance Coin</MenuItem>
                  <MenuItem value="Solana">Solana</MenuItem>
                  <MenuItem value="XRP">XRP</MenuItem>
                  <MenuItem value="USDC">USDC</MenuItem>
                  <MenuItem value="Cardano">Cardano</MenuItem>
                  <MenuItem value="Avalanche">Avalanche</MenuItem>
                  <MenuItem value="DogeCoin">DogeCoin</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Current Market Share"
                variant="outlined"
                fullWidth
                type="number"
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px", // Add border radius
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Predicted Loss/Profit"
                variant="outlined"
                fullWidth
                type="number"
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px", // Add border radius
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
                <InputLabel>Position</InputLabel>
                <Select>
                  <MenuItem value="">Select position</MenuItem>
                  <MenuItem value="inr">INR</MenuItem>
                  <MenuItem value="usd">USD</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ borderRadius: "10px", marginTop: '1rem' }} // Add border radius and margin top
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </ThemeProvider>
    </div>
  );
}

export default Form;
