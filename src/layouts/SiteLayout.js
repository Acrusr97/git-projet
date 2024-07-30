import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link ,Outlet} from "react-router-dom";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const SiteLayout =()=>{
  return (
    <>
    <header>
    <Navbar expand="lg" className="navbar navbar-light bg-light ps-4">
      <Container fluid>
        <Navbar.Brand href="#" to="/">MNEM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className ="" to="/"> Accueil</Link>
            <Link to="/produit">Produits</Link>
            <Link to="/contact">Contact</Link>
            <NavDropdown title="Espace Clients" id="navbarScrollingDropdown">
              <NavDropdown.Item>
               <Link to= "/espace-client"> Création de Contact </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                <Link to= "/spaceUsr">Identification </Link>
              </NavDropdown.Item>
              
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    <main>
    <Outlet/>
</main>
<footer>
<div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                            content.</p>
                    </div>
                </div>
            </footer>
        </>

  );
}
export default SiteLayout;
