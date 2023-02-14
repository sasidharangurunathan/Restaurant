import React, { Component } from "react";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login/Login";
import Register from "./Login/Register";
import { CartProvider } from 'react-use-cart';
import Cart from "./cart/Cart";



import Product from "./menu/menuContainer";
import MenuDataContainer from "./menu/MenuDataContainer";


function Navbar1() {
  return (
    <div>
    <Router>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/product">Product</NavDropdown.Item>
              <NavDropdown.Item href="/cart">
                Cart
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">TableReservation</Nav.Link>
            
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
             {
                  localStorage.getItem('login') ? 
                <Nav.Link className="pg-2" href="/logout">logout</Nav.Link>
                :
                <Nav.Link href="/register">login</Nav.Link>

                }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    <div>
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/cart">
        <CartProvider><Cart/></CartProvider>
        </Route>
        <Route path="/menu">
        <CartProvider><MenuDataContainer /></CartProvider>
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
    </div>
  );
}

export default Navbar1;


