import React, { Component, useState, setState } from "react";
import { Navbar, Nav,OverlayTrigger,Tooltip,FormControl,Form } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen,faHome } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css";

export default function NavBar() {

  return (
    <React.Fragment>
      <Navbar  className="navBar" expand="lg" >
        <Navbar.Brand>
        <img
            src={require("../../../assets/images/logo.png")}
            width="130"
            height="80"
            alt="React Bootstrap logo"
          />
          
        </Navbar.Brand>
        <h2 style={{marginTop:'1%'}}><strong>Stock Analytics</strong></h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link className="mr-5 fontSize"  >
              <Link style={{ color: "black"}} to="/">
              <OverlayTrigger
                    key='bottom'
                    placement='bottom'
                    overlay={
                    <Tooltip id={`tooltip-bottom`}>
                      <strong>HOME</strong>.
                    </Tooltip>
                    }
                >
                    <FontAwesomeIcon icon={faHome} />
               </OverlayTrigger>
                
              </Link>
          </Nav.Link>
          <Nav.Link className="mr-5 fontSize"  >
              <Link style={{ color: "black" }} to="/">
              <OverlayTrigger
                    key='bottom'
                    placement='bottom'
                    overlay={
                    <Tooltip id={`tooltip-bottom`}>
                      <strong>CONTACT</strong>.
                    </Tooltip>
                    }
                >
                    <FontAwesomeIcon icon={faEnvelopeOpen} />
               </OverlayTrigger>
              </Link>
          </Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
