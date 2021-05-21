import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Box, Title, Text } from "../Core";
import styled from "styled-components";
import Logo from "../Logo";
import { device } from "../../utils";

const StyledHubspot = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  align-content: center;  
  border-radius: 2rem;
  background-color: ${ props => (props.isLight ? `#FFF3F7` : `#4C4C78`)};
  color: #4C4C78;
  padding: 1.25rem;
  margin: 4vw auto;
  @media ${device.lg} {
    margin: 2vw auto;
  }
`
const Column = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: ${props => (props.isCentered? `center` : `flex-start`)};
  align-items: ${props => (props.isCentered? `center` : `flex-start`)};
  align-content: stretch;
  flex-basis: 1;
  border-radius: 2rem;
`
const HubspotRow = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: ${props => (props.isCentered ? "center" : "flex-start")};
`

const HubspotField = styled.input`
  border: 2px solid transparent;
  border-radius: 2rem;
  flex-grow: 1;
  background: #FFFFFF;
  color: #4C4C78;
  padding: 1rem 2rem;
  font-size: 14px;
  margin-right: 0.75rem;
  margin-top: 0.75rem;
  &:hover {
      border: 2px solid #e32248;
    }
  &:focus {
      color: #e32248;
      border: 2px solid #e32248;
      outline: none;
    }
`
const HubspotContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${(props) =>
    props.isCentered ? "center" : "flex-start"};
  align-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  a {
      margin-top: 0;
      margin-right: 2rem;
    }
`;
const HubspotButton = styled.button`
  text-decoration: none;
  width: 100%;
  flex-grow: 1;
  font: inherit;
  font-weight: 600;
  border-radius: 2rem;
  padding: 1rem 2rem;
  margin-top: 0.75rem;
  margin-right: 0.75rem;
  transition: all .3s cubic-bezier(0,.89,.44,1);  
`
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;
const Menu = styled.ul`
  @media ${device.lg} {
  display: flex;
  justify-content: flex-end;
  }
  .dropdown-toggle {
  cursor: pointer;
  }
  > li {
  > .nav-link {
      color: ${({ dark, theme }) => theme.colors.front}!important;
      transition: 0.4s;
      align-items: center;
      display: inline-flex;
      font-size: 15px;
      font-weight: 700;
      line-height: 24px;
      padding-top: 18px !important;
      padding-bottom: 18px !important;
      padding-left: 18px !important;
      padding-right: 18px !important;

      &.dropdown-toggle:after {
        margin-left: 10px;
        position: relative;
        transform: rotate(90deg);
        top: 1px;
        content: "\\ea06";
        border: none;
        font-family: "Grayic";
        font-size: 24px;
        transition: 0.4s;
        font-weight: 900;
        line-height: 14px;
      }
    }
  &.nav-item:hover > .nav-link,
  &.nav-item.active > .nav-link {
    color: ${({ theme }) => theme.colors.primary} !important;
    &:after {
      transform: rotate(-90deg);
    }
  }
  }
  .nav-item.dropdown {
  @media ${device.lg} {
    position: relative;
    z-index: 99;
  }
  &:hover {
    > .menu-dropdown {
      @media ${device.lg} {
        top: 90%;
        right: 0;
        opacity: 1;
        pointer-events: visible;
      }
    }
  }
  }
`;

const Footer = ({isDark = true, pathKey}) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    website: '',
    contact: '',
    message: '',
  })

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    const portalId = "14550965";
    const formId = "8024218a-9ed2-4ff5-85a8-02b427fc1217";
    var url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
    var data = {
      submittedAt: Date.now(),
      fields: [
          {
            name: "email",
            value: state.email,
          },
          {
            name: "firstname",
            value: state.name,
          },
          {
            name: "website",
            value: state.website,
          },
          {
            name: "contact",
            value: state.contact,
          }, 
          {
            name: "message",
            value: state.message,
          },
      ],
      context: {
        pageUri: "subscribe-success",
        pageName: "Subscribe successful",
      },
    };
    var final_data = JSON.stringify(data);
    xhr.open("POST", url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText); // Returns a 200 response if the submission is successful.
      } else if (xhr.readyState == 4 && xhr.status == 400) {
        alert(xhr.responseText); // Returns a 400 error the submission is rejected.
      } else if (xhr.readyState == 4 && xhr.status == 403) {
        alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
      } else if (xhr.readyState == 4 && xhr.status == 404) {
        alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
      }
    };
    // Sends the request
    xhr.send(final_data);
  }

  return (
    <>
      <Box
        bg="bg"
        pt={['1rem', '1rem', '1.5rem', "2rem"]}
        mt={["0.5rem", "1rem", "1rem", "2rem"]}
        css={`
          z-index: 0;
          border-top: ${pathKey !== '/contact/' && "1px solid black"};
        `}
        className="position-relative"
      >
        {pathKey !== '/contact/' &&
        <Container>
          <div className="text-center">
            <Title variant="secSm">
              Work With Us
            </Title>
            <StyledHubspot onSubmit={submitHandler}>
              <HubspotRow>
                <Column>
                  <HubspotContainer>
                    <HubspotField
                      type="text"
                      id="firstName"
                      onChange={handleChange}
                      name="firstName"
                      placeholder="Your name"
                    />
                    <HubspotField
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      placeholder="Your email address*"
                      required="required"
                    />
                  </HubspotContainer>
                  <HubspotContainer>
                    <HubspotField
                      type="text"
                      id="website"
                      name="website"
                      onChange={handleChange}
                      placeholder="Your website url"
                    />
                    <HubspotField
                      type="text"
                      id="contact"
                      onChange={handleChange}
                      name="contact"
                      placeholder="Your contact number"
                    />
                  </HubspotContainer>
                  <HubspotField
                    style={{width: '98%'}}
                    type="text"
                    id="message"
                    onChange={handleChange}
                    name="message"
                    placeholder="Message"
                  />
                  <HubspotButton
                    buttonLink=""
                  >
                    Submit
                  </HubspotButton>
                </Column>
              </HubspotRow>
            </StyledHubspot>
          </div>
        </Container>
        }
        <Divider />
        <nav className="navbar px-0 px-md-3 site-navbar offcanvas-active navbar-expand-sm navbar-light">
            {/* <!-- Brand Logo--> */}
            <div className="navbar-collapse">
              <div className="navbar-nav mr-auto mr-3 d-flex">
                <Menu
                  className="navbar-nav d-sm-flex"
                  dark={isDark ? 1 : 0}
                >
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/terms"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/cookie"
                    >
                      Cookie
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/privacy"
                    >
                      Privacy
                    </a>
                  </li>
                  
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/contact"
                    >
                      Contact
                    </a>
                  </li>                  
                </Menu>
              </div>
            </div>
            <div className="brand-logo">
              <Logo color={isDark ? "light" : "dark"} />
            </div>
          </nav>
      </Box>
    </>
  );
};

export default Footer;
