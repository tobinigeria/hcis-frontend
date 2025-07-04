import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./onboardingNav.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import mylogo from "../images/Group.png";



function BasicExample() {
  return (
    <Navbar
      expand="lg"
      className=""
      style={{
        backgroundColor: "#E9F7FF",
        height: "102px",
        display: "flex",
        boxSizing: "border-box",
        paddingBlock: "25px",
        paddingInline: "37px",
      }}
    >
      <Container
        style={{
          marginInline: "0",
          display: "flex",
          gap: "85px",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Navbar.Brand href="#home">
          <img
            src={mylogo}
            alt=""
            style={{
              width: "109.8px",
              height: "22.42px",
              justifyContent: "center",
              alignItems: "center",
              marginBlock: "39.79px",
            }}
          />
        </Navbar.Brand>

        <div className="dropdowns">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                justifyContent: "center",
                alignContent: "center",
                marginBlock: "39px",
                paddingBlock: "14px",
              }}
            >
              <NavDropdown
                title="Programs and courses"
                id="basic-nav-dropdown"
                className="inter-medium"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Enroll Now"
                id="basic-nav-dropdown"
                className="inter-medium"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="More Information"
                id="basic-nav-dropdown"
                className="inter-medium"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Resourses"
                id="basic-nav-dropdown"
                className="inter-medium"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Contact Us"
                id="basic-nav-dropdown"
                className="inter-medium"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <div
                className="myButton"
                style={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: "center",
                  alignContent: "center",
                  paddingBlock: "0"
                }}
              >
                <Button
                  className="inter-medium navButton"
                  style={{
                    width: "111px",
                    height: "52px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "5px",
                    border: "1px solid #0684C9",
                    paddingBlock: "14px",
                    paddingInline: "28px",
                    color: "#0684C9",
                    fontSize: "",
                    cursor: "pointer",
                  }}
                  active
                >
                  Button
                </Button>

                <Button
                  className="inter-medium navButton"
                  style={{
                    width: "111px",
                    height: "52px",
                    backgroundColor: "#0684C9",
                    borderRadius: "5px",
                    border: "1px solid #0684C9",
                    paddingBlock: "14px",
                    paddingInline: "28px",
                    color: "#FFFFFF",
                    fontSize: "",
                    cursor: "pointer",
                  }}
                  active
                >
                  Button
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>



  );
}

export default BasicExample;
