import './Detalles_Song.css';
import React from "react";
import { Col, Row, Image, ListGroup, Accordion, Tabs, Tab } from "react-bootstrap";

const Detalles_Song = (props) => {
    const Song = props.song;
    const candidature = Song?.candidature;
    const country = Song?.country;
    const performance_sf = Song?.performance_sf;
    const performance_f = Song?.performance_final;

    const nfp = Song?.youtube_nfp === '' ? null : Song?.youtube_nfp?.split('=')[1];
    const ofm = Song?.youtube_ofm === '' ? null : Song?.youtube_ofm?.split('=')[1];
    const live= Song?.youtube_live === '' ? null : Song?.youtube_live?.split('=')[1];

    const letra = candidature?.lyrics.split('\\n\\n');
    const mitad = letra?.length/2;

    function MostrarProduccion(titulo, personal){
        return(
            <Col xs={12}>
                <ListGroup className='lista produccion'>
                    <ListGroup.Item key={0}><h4>{titulo}</h4></ListGroup.Item>
                    {personal?.split(';').map((persona, index) => {
                        return(
                            <ListGroup.Item key={index}>{persona}</ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Col>
        )
    }

    function ExtraerLetra(parrafocolumna, columna) {
        return (
        <Col xs={6} > {
            parrafocolumna?.map((parrafo, index) => (
                <p key={index + columna} className="letra">{parrafo.split('\\n').map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}> 
                        {line}
                        {lineIndex < parrafo.split('\\n').length - 1 && <br />}
                    </React.Fragment>
                ))}</p>
            ))
        }
        </Col>
        )
    }

    return (
        <Row className="informacion">
            <Col xs={12} md={6}>
                <Image src={candidature?.img_performer} alt={candidature?.performer} fluid/>
            </Col>
            <Col xs={12} md={6}>
                <h2 className='display-2'>{candidature?.song_title}</h2>
                <ListGroup variant="flush" className='lista'>
                    <ListGroup.Item><strong>Artista:</strong> {candidature?.performer}</ListGroup.Item>
                    <ListGroup.Item><strong>Pais:</strong> {country?.country_name}</ListGroup.Item>
                    <ListGroup.Item><strong>Año:</strong> {Song.year}</ListGroup.Item>
                    <ListGroup.Item><strong>Posicion:</strong> {Song.place_contest}</ListGroup.Item>
                </ListGroup>
            </Col>
            <Row className='align-items-start'>
                <Col xs={12} md={6}>
                    <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Produccion</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    {candidature?.composers !== '' ? MostrarProduccion('Compositores', candidature?.composers) : null}
                                    {candidature?.lyricists !== '' ? MostrarProduccion('Letristas', candidature?.lyricists) : null}
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col xs={12} md={6}>
                    <Accordion>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Letra</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    {ExtraerLetra(letra?.slice(0, mitad), 0)}
                                    {ExtraerLetra(letra?.slice(mitad), mitad)}
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
            {Song.sf_num > 0 ?
                <Col xs={12} md={6}>
                    <h3 className='display-3'>Semifinal {Song.sf_num}</h3>
                    <ListGroup className='lista'>
                        <ListGroup.Item><strong>Orden Actuacion: </strong> {performance_sf.running_sf}</ListGroup.Item>
                        <ListGroup.Item><strong>Posicion Semi: </strong> {performance_sf?.place_sf}</ListGroup.Item>
                        <ListGroup.Item><strong>Votos Totales: </strong> {performance_sf?.points_sf}</ListGroup.Item>
                        <ListGroup.Item><strong>Televoto:</strong> {performance_sf?.points_tele_sf}</ListGroup.Item>
                        <ListGroup.Item><strong>Jurado:</strong> {performance_sf?.points_jury_sf}</ListGroup.Item>
                    </ListGroup>
                </Col> : null
            }
            <Col xs={12} md={Song.sf_num > 0 ? 6 : 12}>
                <h3 className='display-3'>Final</h3>
                <ListGroup className='lista'>
                        <ListGroup.Item><strong>Orden Actuacion: </strong> {performance_f?.running_final}</ListGroup.Item>
                        <ListGroup.Item><strong>Posicion Semi: </strong> {performance_f?.place_final}</ListGroup.Item>
                        <ListGroup.Item><strong>Votos Totales: </strong> {performance_f?.points_final}</ListGroup.Item>
                        <ListGroup.Item><strong>Televoto:</strong> {performance_f?.points_tele_final}</ListGroup.Item>
                        <ListGroup.Item><strong>Jurado:</strong> {performance_f?.points_jury_final}</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col xs={12}>
                <Tabs
                    defaultActiveKey="profile"
                    id="justify-tab-example"
                    className="mb-4 text-center song"
                    justify
                >   
                    {nfp === null ? null :
                    <Tab eventKey="nfp" title="Eleccion Nacional">
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${nfp}?si=ecpw-ouT0NkT8Fc1`} title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                    </Tab>
                    }
                    {ofm === null ? null :
                    <Tab eventKey="ofm" title="Video Oficial">
                        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${ofm}?si=ecpw-ouT0NkT8Fc1`} title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                    </Tab>
                    }
                    {live === '' ? null :
                    <Tab eventKey="liveb" title="Actuacion Eurovision">
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${live}?si=ecpw-ouT0NkT8Fc1`} title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                    </Tab>
                    }
                </Tabs>
            </Col>
        </Row>
    );
}
export default Detalles_Song;
