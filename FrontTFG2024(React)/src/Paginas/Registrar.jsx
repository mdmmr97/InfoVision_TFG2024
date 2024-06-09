import { Button, Form, Row, Container} from 'react-bootstrap';
import { useLocation } from "wouter";
import React, { useState } from 'react';

import { register } from '../Servicios/UsersServices';

const Registrar = () => {
    const [location, setLocation] = useLocation();

    const [usuario, setUsuario] = useState({
        name: '',
        email: '',
        password: ''
    });

    const EnviarRegistro = async (e) => {
        e.preventDefault();
        
        const result = await register(usuario);
        console.log('Resultado obtenido ' + result);
        window.location.href = '/';
    }

    return (
        <Container>
            <Row className="justify-content-center">
            <Form onSubmit={EnviarRegistro} className='mt-4 formulario' >
                <Form.Group controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" aria-required
                        onChange={(e) => setUsuario({ ...usuario, name: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" aria-required
                        onChange={(e) => setUsuario({ ...usuario, email: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" aria-required
                        onChange={(e) => setUsuario({ ...usuario, password: e.target.value })} />
                </Form.Group>
                <Button variant="primary" type="submit"> Registrate </Button>
            </Form>
            </Row>
        </Container>
    )
}
export default Registrar;