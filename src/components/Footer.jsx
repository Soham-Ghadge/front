import React from "react";
import { styled } from "@mui/system";
import { Button, TextField, Container, Grid, Typography, Divider } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

const StyledContainer = styled('div')({
    backgroundColor: "#023E8A",

  });

const Footer = () => {
  return (
    <Wrapper>

      {/* footer section  */}
      <footer>
        <StyledContainer className="container" maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={3} className="footer-about">
                <img src="/CryptoIntel.png" alt="CryptoIntel Logo" style={{width:'100px'}}></img>
              <Typography variant="h4">CryptoIntel</Typography>
              <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Typography>
            </Grid>

            {/* 2nd column */}
            <Grid item xs={12} md={3} className="footer-subscribe">
              <Typography variant="h4">Subscribe to get important updates</Typography>
              <form style={{ margin: '16px 0' }}>
                <TextField

                  type="email"
                  required
                  autoComplete="off"
                  placeholder="Email"
                  variant="outlined"
                  fullWidth
                  inputProps={{ style: { color: 'black' , backgroundColor:'white'} }}
                />
                <Button type="submit" variant="contained" color="primary" style={{ margin: '16px 0' }}>
                  Subscribe
                </Button>
              </form>
            </Grid>

            {/* 3rs column  */}
            <Grid item xs={12} md={3} className="footer-social">
              <Typography variant="h4">Follows Us</Typography>
              <div className="footer-social--icons">
                <div>
                  <WhatsAppIcon />
                </div>
                <div>
                  <InstagramIcon />
                </div>
                <div>
                    <YouTubeIcon />
                  
                </div>
              </div>
            </Grid>

            {/* 4th column  */}
            <Grid item xs={12} md={3} className="footer-contact">
              <Typography variant="h4">Call Us</Typography>
              <Typography>+91 12345678978</Typography>
            </Grid>
          </Grid>
        </StyledContainer>

        {/* bottom section  */}
        <StyledContainer className="footer-bottom--section" maxWidth="lg">
          <Divider />
          <Grid container justifyContent="space-between" alignItems="center">
  <Typography>
    @{new Date().getFullYear()} CryptoIntel. All Rights Reserved
  </Typography>
  <Typography variant="body2">PRIVACY POLICY</Typography>
</Grid>

        </StyledContainer>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled("section")`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 3px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 2rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3rem;
    }
  }
`;

export default Footer;


