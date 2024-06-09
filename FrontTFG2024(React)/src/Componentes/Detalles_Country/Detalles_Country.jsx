import './Detalles_Country.css'
import React from 'react'
import { Carousel, Table } from 'react-bootstrap';

const Detalles_Country = (props) => {
    const Country = props.country;
    const victories = Country?.victories?.length > 0 ? Country.victories : null;
    const hosted = Country?.hosted?.length > 0 ? Country.hosted : null;
    const images = Country?.images?.length > 0 ? Country.images : null;

    function MostrarVictoriasHosted(){
        return(
            <div className='row'>
                <div className='col-12 col-md-9 px-2'>
                    <h3 className='display-3'>Victorias</h3>
                    <div className='col-12'>
                    <Table striped bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th>Año</th>
                                <th>Ciudad</th>
                                <th>Cancion</th>
                                <th>Artista</th>
                                <th>Puntuacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {victories?.map((host, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{host.year}</td>
                                        <td>{host.city}</td>
                                        <td>{host.song}</td>
                                        <td>{host.artist}</td>
                                        <td>{host.points}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    </div>
                </div>
                <div className='col-12 col-md-3 px-2'>
                    <h3 className='display-3'>Hosted</h3>
                    <div className='col-12'>
                    <Table striped bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th>Año</th>
                                <th>Ciudad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hosted?.map((host, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{host.year}</td>
                                        <td>{host.city}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    </div>
                </div>
            </div>
        )
    }

    function MostrarCarousel() {
        return (
            <Carousel className='d-none d-sm-block carousel'>
                {images?.map((image, index) => {
                    return (
                        <Carousel.Item key={index} interval={2000}>
                            <img
                                className="d-block w-100 imagencarousel"
                                src={image}
                                alt={`Slide ${index}`}
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        );
    }

    return (
        <div className="row informacion">
            <div className='col-md-6 imagencountry'>
                <img src={Country.maps} className='img-fluid '/>
            </div>
            <div className='col-12 col-md-6 px-2'>
                <h3 className='display-2'>Información Pais</h3>
                <div className='lista'>
                    <ul>
                        <li><strong>Capital:</strong> {Country.capital}</li>
                        <li><strong>Area:</strong> {Country.area} km2</li>
                        <li><strong>Población:</strong> {Country.population}</li>
                    </ul>
                </div>
            </div>
            {victories !== null && hosted !== null ? MostrarVictoriasHosted() : null}
            {images !== null ? MostrarCarousel() : null}  
        </div>
    )
}
export default Detalles_Country;