import { useContext } from "react";
import { Navbar, Container, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <Navbar bg="light" sticky="top" className="top">
        <Container fluid>
          <Col md={3} className="topLeft">
            <Nav>
              <i className="topIcon fab fa-facebook-square"></i>
            </Nav>
            <Nav>
              <i className="topIcon fab fa-twitter-square"></i>
            </Nav>
            <Nav>
              <i className="topIcon fab fa-pinterest-square"></i>
            </Nav>
            <Nav>
              <i className="topIcon fab fa-instagram-square"></i>
            </Nav>
          </Col>
          <Col md={6} className="topCenter">
            <Link to={"/"} className="link">
              <Nav className="topListItem">Home</Nav>
            </Link>

            <Link to={"/about"} className="link">
              <Nav className="topListItem">About</Nav>
            </Link>
            <Link to={"/contact"} className="link">
              <Nav className="topListItem">Contact</Nav>
            </Link>
            <Link to={"/write"} className="link">
              <Nav className="topListItem">Write</Nav>
            </Link>
            <li className="topListItem" onClick={handleLogout}>
              {user && "Logout"}
            </li>
          </Col>
          <Col md={3} className="topRight">
            {user ? (
              <Link to={"/settings"} className="link">
                <img src={PF + user.profilePic} alt="" className="topImg" />
              </Link>
            ) : (
              <>
                <Nav className="topListItem">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </Nav>
                <Nav className="topListItem">
                  <Link className="link" to="/register">
                    REGISTER
                  </Link>
                </Nav>
              </>
            )}

            <i className="topSearchIcon fas fa-search"></i>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}
