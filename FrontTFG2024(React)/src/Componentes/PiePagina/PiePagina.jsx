import './PiePagina.css';
import { Container, Stack } from 'react-bootstrap';

const PiePagina = () =>{

    return (
        <Container className="col-12 pie bg-dark">
            <Stack direction="vertical" gap={3}>
                <p className="text-white">Proyecto Final DAW - Infovision</p>
                <p className="text-white">Pagina Realizada por Maria del Mar Marín Rodríguez</p>
            </Stack>
        </Container>
    )
};
export default PiePagina