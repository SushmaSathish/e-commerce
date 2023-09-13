import Container from "react-bootstrap/Container";
import { Navbar,Nav ,Button} from "react-bootstrap";
import CartButton from './navbarcartbutton';
import {NavLink ,useHistory} from "react-router-dom";
import classes from './navbar.module.css';
import { useContext } from "react";
import AuthContext from "../Auth/Authcontext";

const Navigationbar=(props)=>{
  const authCtx = useContext(AuthContext);

const history=useHistory()
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () =>{authCtx.logout();
    history.replace("/");}
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
           <Nav>
       {isLoggedIn && (
            <Button onClick={logoutHandler}variant="info"
            style={{ border: "1px solid skyblue",
            marginLeft: "10px", }}
            type="click">
              Logout
            </Button>

          )}
          </Nav>
           </Container>
          </Navbar>
        </div>
    )
}
export default Navigationbar;