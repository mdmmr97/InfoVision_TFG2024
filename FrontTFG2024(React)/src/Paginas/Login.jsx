import { Button, Container, Row, Form} from 'react-bootstrap';
import { useLocation } from "wouter";
import React, { useState } from 'react';

import { login } from '../Servicios/UsersServices';

const Login = () => {

    const [location, setLocation] = useLocation();

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const EnviarLogin = async (e) => {
        e.preventDefault();
        const result = await login(usuario);
        window.location.href = '/';
    }

    function Volver() {
        window.location.href = '/';
    }

    return (
        <Container>
            <Row className="justify-content-center">
        <Form onSubmit={EnviarLogin} className='mt-4 formulario' >
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" required
                              onChange={(e) => setUsuario({...usuario, email: e.target.value})}/>
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" 
                              onChange={(e) => setUsuario({...usuario, password: e.target.value})}/>
            </Form.Group>
            <Button variant="primary" type="submit" className='btn btn-primary'> Login </Button>
        </Form>
        </Row>
        </Container>
    )
}
export default Login;