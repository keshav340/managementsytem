import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Droame</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="booking_list">Bookings List</Nav.Link>
            <Nav.Link href="booking_form">Booking Form</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default NavBar;
