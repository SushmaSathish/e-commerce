import Container from "react-bootstrap/Container";
import { Navbar,Nav } from "react-bootstrap";
import CartButton from './navbarcartbutton';
import {NavLink } from "react-router-dom";
const Navigationbar=(props)=>{
    return(
        <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <NavLink to="/home" className="nav-link">
                HOME
              </NavLink>
              <NavLink to="/store" className="nav-link">
                STORE
              </NavLink>
              <NavLink to="/about" className="nav-link">
                ABOUT
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                CONTACT US
              </NavLink>
            </Nav>
    
           <CartButton onButtonpass={props.onOpenButton} />
           </Container>
          </Navbar>
        </div>
    )
}
export default Navigationbar;