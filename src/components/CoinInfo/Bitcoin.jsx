import { Typography } from '@material-ui/core';
import React from 'react';
import styled from '@emotion/styled';

const AppContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent:"center",
  flexDirection: "column",
  color: "white",
  width: "100%",
  maxWidth:"600px",

});

const ImageContainer = styled("div")({
  marginTop:"20px",
  marginBottom: "20px",
});

const Bitcoin = () => {
  return (
    <AppContainer>
      <ImageContainer>
        <img 
          src='/coins.png/10 Bitcoin.png' 
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
          }}
          alt="Bitcoin Logo"
        />
      </ImageContainer>
      <Typography 
        variant="body1"
        style={{
          textAlign: "center",
          fontSize: '24px', // Adjust font size as needed
          fontFamily: 'sans-serif'
        }}
      >
        Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency.
      </Typography>
    </AppContainer>
  );
};

export default Bitcoin;
