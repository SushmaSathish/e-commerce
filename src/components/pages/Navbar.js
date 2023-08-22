import Container from "react-bootstrap/Container";
import { Navbar,Nav } from "react-bootstrap";
import CartButton from './navbarcartbutton';
import {NavLink } from "react-router-dom";
import classes from './navbar.module.css';

const Navigationbar=(props)=>{
    return(
        <div>
        <Navbar className={classes.header}>
          <Container>
            
            <Nav className="me-auto"> 
              <th>
                <td>
              <NavLink activeClassName={classes.active} to="/home" >
                HOME
              </NavLink>
              </td>
             
              <td>
              <NavLink activeClassName={classes.active} to="/store" >
                STORE
              </NavLink>
              </td>
              
              <td>
              <NavLink activeClassName={classes.active} to="/about" >
                ABOUT
              </NavLink>
              </td>
              <td>
              
              <NavLink activeClassName={classes.active} to="/contact" >
                CONTACT US
              </NavLink>
              </td>
              
              </th>
            </Nav>
           <CartButton onButtonpass={props.onOpenButton} />
           </Container>
          </Navbar>
        </div>
    )
}
export default Navigationbar;