import './Detalles_Year.css'
import { Image, Table } from "react-bootstrap";

const Detalles_Year = (props) => {
    const Year = props.year;
    const country = Year?.country;
    const dates = Year?.dates?.length > 0 ? Year.dates : null;
    const winner = Year?.winner;

    return (
        <div className="row informacion">
            <h3 className='display-2'>Edicion</h3>
            <div className='col-12 col-md-6 px-2 titulo'>
                <h2>{Year.slogan}</h2>
            </div>
            <div className='col-12 col-md-6 px-2'>
                <div className='lista'>
                    <ul>
                        <li><strong>Lugar:</strong> {Year.place }</li>
                        <li><strong>Ciudad:</strong> { Year.city}</li>
                        <li><strong>Pais:</strong> {country?.country_name }</li>
                        <li><strong>Participantes:</strong> {Year.participants }</li>
                    </ul>
                </div>
            </div>
            <Image src={Year.stage} alt={`Escenario${Year.edition}`} className='col-12 mx-3 mb-5'/>
            <div className='col-12 col-md-6 px-2'>
                <h3 className='display-3'>Fechas</h3>
                <div className='col-12 mt-4 mb-5'>
                    <Table striped bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th>Evento</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dates?.map((dates, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{dates?.event}</td>
                                        <td>{dates?.date}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className='col-12 col-md-6 px-2'>
            <h3 className='display-3'>Winner</h3>
                <div className='lista'>
                    <ul>
                        <li><strong>Song:</strong> {winner?.song }</li>
                        <li><strong>Artista:</strong> {winner?.artist}</li>
                        <li><strong>Pais:</strong> {winner?.country }</li>
                        <li><strong>Puntuacion:</strong> {winner?.points }</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Detalles_Year