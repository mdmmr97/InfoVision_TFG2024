import { Container, Row, Col, Image, Button } from "react-bootstrap"
import {Link} from 'wouter';
import LogoInfovision from '../assets/Images/Infovision_Black.svg'

const Home = () => {
    return (
        <Container className="home my-4 py-2">
            <Row className="mt-5 py-3 entrada">
                <Col xs md={6}>
                    <p>Bienvenid@ a <span>InfoVision</span> la web donde encontraras toda la informacion referente sobre Eurovision.</p>
                    <br/>
                    <p>Aqui podras encontrar informacion sobre los paises participantes, las canciones, sus ediciones y podras puntuar las canciones.</p>
                </Col>
                <Col xs md={6}>
                    <Image src={LogoInfovision}fluid />
                </Col>
            </Row>
            <Row className="mt-5 py-3 registrarse">
                <Col xs={6}>
                    <p>Registrate de forma gratuita y disfruta nuestra pagina</p>
                </Col>
                <Col xs={6}>
                    <Button><Link to="/registrar">Registrarse</Link></Button>
                </Col>
            </Row>
            <Row className="mt-5 py-3 infohome">
                <h2>Encuentra Informacion Sobre:</h2>
                <Col xs md={4}>
                    <Link to="/years">
                        <Image src="https://img2.rtve.es/i/?w=1600&i=1682435603005.jpg" alt="Años" height={170} width={275}/>
                    </Link>
                </Col>
                <Col xs md={4}>
                    <Link to="/countries">
                        <Image src="https://estaticos.elmundo.es/assets/multimedia/imagenes/2016/04/30/14620091909788.jpg" alt="Paises" height={170} width={275}/>
                    </Link>
                </Col>
                <Col xs md={4}>
                    <Link to="/songs">
                        <Image src="https://s3.ppllstatics.com/elnortedecastilla/www/multimedia/202301/02/media/cortadas/1447821866-klLB-U1901372341468wG-1248x770@El%20Norte.JPG" alt="Paises" height={170} width={275}/>
                    </Link>
                </Col>
            </Row>
            <Row className="mt-5 py-3 desarrollo">
                <p>Pagina totalmente desarrollada y creada por María del Mar Marín</p>
                <br/>
                <p>TFG para Grado Superior de Desarrollod de aplicaciones Web "DAW"</p>
                <br/>
                <br/>
                <p>Espero que os guste.</p>
            </Row>
        </Container>
    )
}
export default Home
