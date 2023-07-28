import React from 'react';
import{Container, Navbar,Nav,Button} from 'react-bootstrap'
const Navigationbar=()=>{
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
                <Button  variant="secondary">cart<span>1</span></Button>
            </Nav>
        </Container>
        </Navbar>
     </div>
    )
}
export default Navigationbar;