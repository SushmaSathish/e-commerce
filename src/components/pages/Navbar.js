import React from 'react';
import{Container, Navbar,Nav} from 'react-bootstrap'
import CartButton from './navbarcartbutton';
const Navigationbar=(props)=>{
    return(
     <div>
        <Navbar variant='dark'bg='dark' expand='sm'>
        <Container>
            <Navbar.Brand href='#'>E-COMMERCE</Navbar.Brand>
            <Nav className='me-auto my-2 my-lg-0'>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Store</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            </Nav>
            <Nav>
            <CartButton onButtonpass ={props.onOpenButton} />
            </Nav>
        </Container>
        </Navbar>
     </div>
    )
}
export default Navigationbar;