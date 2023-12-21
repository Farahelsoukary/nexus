import React from "react";
import './header.css';
import NavItem from "../navitem/navitem";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">Bookery</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                <NavLink className="nav-link" to='/' style={({ isActive }) => {
                                    return {

                                        color: isActive ? "blue" : ""

                                    }
                                }
                                }>Home</NavLink>
                                <NavLink className="nav-link" to='/book' style={({ isActive }) => {
                                    return {
                                        color: isActive ? "blue" : ""
                                    }
                                }
                                }
                                >Books</NavLink>

                                <NavLink className="nav-link" to='/tvshow' style={({ isActive }) => {
                                    return {
                                        color: isActive ? "blue" : ""
                                    }
                                }
                                }
                                >New Books</NavLink>
                                <NavLink className="nav-link" to='/contact' style={({ isActive }) => {
                                    return {
                                        color: isActive ? "blue" : ""
                                    }
                                }
                                }
                                >Contact</NavLink>
                                <NavLink className="nav-link" to='/login' style={({ isActive }) => {
                                    return {
                                        color: isActive ? "blue" : ""
                                    }
                                }
                                }
                                >JoinUs</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                {/* <ul>
                    <NavItem name="Home" path="https://www.google.com/" />
                    <NavItem name="News" path="https://www.bbc.com/news" />
                    <NavItem name="Contact" path="https://www.twitter.com/" />
                    <NavItem name="About" path="https://www.amazon.com/" />
                </ul> */}

                {/* <li><a className="active" href="#home">Home</a></li>
                 <li><a href="#news">News</a></li>
                 <li><a href="#contact">Contact</a></li>
                 <li><a href="#about">About</a></li> */}

            </>
        );

    }
}
export default Header;