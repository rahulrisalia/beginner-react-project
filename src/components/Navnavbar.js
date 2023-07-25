import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../image/logologo.png";
import darklogo from "../image/darklogo.png";
import "../components/Navnavbar.css";
import { GoHome } from "react-icons/go";
import { GoTasklist } from "react-icons/go";
import { PiPasswordBold } from "react-icons/pi";
import { BiSolidSun } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function Navnavbar(props) {
  const myclick = () => {
    const mytoggle = document.querySelector(".fa");
    mytoggle.classList.contains("fa-bars")
      ? mytoggle.classList.remove("fa-bars") ||
        mytoggle.classList.add("fa-close")
      : mytoggle.classList.remove("fa-close") ||
        mytoggle.classList.add("fa-bars");
  };
  return (
    <>
      <Navbar expand="lg" className="navbg p-0 m-0">
        <Container>
          <Navbar.Brand href="#home">
            {props.logo === true ? (
              <img className="logopng" src={logo} alt="LOGO" />
            ) : (
              <img className="logopng" src={darklogo} alt="LOGO" />
            )}
          </Navbar.Brand>
          <div className="m-3 d-flex position-absolute  text-warning top-0 start-0 border-0">
            {props.themeicon ? (
              <BsFillMoonStarsFill
                onClick={props.changetheme}
                style={{ color: "black" }}
              />
            ) : (
              <BiSolidSun onClick={props.changetheme} />
            )}
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i className="fa fa-bars" onClick={myclick}></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav d-flex">
            <Nav className=" mx-auto d-flex p-2">
              <ul className="liststyle d-flex mx-auto m-0 list-unstyled">
                <li>
                  <Nav.Link className="darkicon" as={Link} to={"/"}>
                    <GoHome />
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="darkicon" as={Link} to={"/todolist"}>
                    <GoTasklist />
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link className="darkicon" as={Link} to={"/passgen"}>
                    <PiPasswordBold />
                  </Nav.Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navnavbar;
