import useComments from "../Hook/useComments";
import { jwtDecode } from 'jwt-decode';

import { Container, Row, Table } from "react-bootstrap";
import AjaxLoader from '../Componentes/Ajax-Loader/Ajax-Loader';

const User = () => {
    const { search, Commentslist } = useComments();
    const token = localStorage.getItem('token');
    let decodedToken = {};

    if (token) {
        decodedToken = jwtDecode(token);
    }

    const email = decodedToken.email;
    const name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

    return (
        <Container className='user my-5'>
            <h1 className="my-3 pt-4">Mi Perfil</h1>
            <Container className='user-info my-3 py-3'>
                <h2>Informacion del Usuario</h2>
                    <p className="text-align-start"><span>Nombre:</span> {name || ''}</p>
                    <p className="text-align-start"><span>Correo:</span> {email || ''}</p>
            </Container>
            {search
                ?   <AjaxLoader/>
                :   <Container>
                    <h2>Mis Comentarios</h2>
                    <Table striped bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th>Cancion</th>
                                <th>Año</th>
                                <th>Pais</th>
                                <th>Nota NFP</th>
                                <th>Nota OFM</th>
                                <th>Nota Live</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Commentslist?.map((host, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{host.song_name}</td>
                                        <td>{host.year}</td>
                                        <td>{host.country}</td>
                                        <td>{host.note_nfp}</td>
                                        <td>{host.note_ofm}</td>
                                        <td>{host.note_live}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Container>
            }
        </Container>
    );
};
export default User;