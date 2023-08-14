import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/*import NavDropdown from 'react-bootstrap/NavDropdown';*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';
import './navbar2.css';
import Logo from './images/PinkLemonLogo.png'; // Percorso dell'immagine

function Navbar2() {
  return (
    <div className='navbar-position'>
      <Navbar expand="lg" className="bg-body-tertiary m-auto" >
        <Container>
          <Navbar.Brand href="./"> <img src={Logo} alt="Descrizione dell'immagine" className="logo" /></Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navb ar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"  >
            <Nav className="me-auto">
              <Nav.Link href="/PinkPic" className='link-nav'>PinkPic</Nav.Link>
              <Nav.Link href="/PinkVar" className='link-nav'>PinkVar</Nav.Link>
              <Nav.Link href="/Pinkedit" className='link-nav'>PinkEdit</Nav.Link>
              <Nav.Link href="/Prices" className='link-nav'>Prices</Nav.Link>
              <Nav.Link href="/Login" className='link-nav'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
}

export default Navbar2;