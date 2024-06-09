import './Cabecera.css';
import { logout } from "../../Servicios/UsersServices";
import useUsersLogin from "../../Hook/useUsers";

import {Container, Nav, Navbar, Row, Stack, Image} from 'react-bootstrap';
import Logo from '../../assets/Images/Infovision.svg';



const Cabecera = () => {
    const LoginIn = useUsersLogin();

    return (
        <div>
            <Navbar collapseOnSelect expand="md" fixed="top" className=" position-fixed flex-column anchura">
                <Row className="m-0 p-0 aling-content-center">
                <Container className="justify-content-center m-1 p-0 anchura">
                    <Navbar.Brand className="m-3" href="/">
                        <Image src={Logo} fluid alt="Infovision" className="imagencab mx-3"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav justify-content-end" />
                </Container>
                <Container xs={12} className="m-0 p-0 cabecera anchura">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav xs={12} md={7} className="me-auto px-5">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/years">Years</Nav.Link>
                                <Nav.Link href="/countries">Countries</Nav.Link>
                                <Nav.Link href="/songs">Songs</Nav.Link>
                        </Nav>
                        <Nav xs={12} md={2} className='justify-content-end px-5'>
                            {LoginIn === true ? <Nav.Link href="/user">My Count</Nav.Link> : null}
                            {LoginIn === true ? <Nav.Link href="/" onClick={logout}>Logout</Nav.Link> : null}
                            {LoginIn === false ? <Nav.Link href="/login">Login</Nav.Link> : null}
                            {LoginIn === false ? <Nav.Link href="/registrar">Registrarse</Nav.Link> : null}
                        </Nav>
                    </Navbar.Collapse>
                </Container></Row>
                
            </Navbar>
        </div>
    );
}
export default Cabecera