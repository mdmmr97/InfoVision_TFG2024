import './Tarjeta.css'
import { useLocation } from "wouter";

const Tarjeta = (props) => {

    const [location, setLocation] = useLocation();

    function RutaDetalle() {
        setLocation(`/${props.type}/${props.id}`, {image: props.image});
    }

    function DetallesSongs() {
        return (
           <> 
                <img className={`${props.type}`} src={`https://img.youtube.com/vi/${props.image}/0.jpg`} alt={props.title}/>
                <div className="card-img-overlay text-bg-dark song">
                    <h5 className="card-title-song">{props.title}</h5>
                    <div>
                        <div className='row m-1'><p className='col-2 p-0 contenido artist'>Artista: </p><p className='col-9 m-0 contenido'>{props.performer}</p></div>
                        <p className="card-text">Pais: {props.country} </p>
                        <p className="card-text">Año: {props.year} </p>
                    </div>
                </div>
            </>
        )
    }

    function DetallesCard() {
        return (
            <>
                <img className={`${props.type}`} src={props.image} alt={props.title} />
                <div className="card-img-overlay text-bg-while">
                    <h5 className="card-title">{props.title}</h5>
                </div>
            </>
        )
    }

    return (
        <div className='col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center'>
            <div className={`card tarjeta ${props.type}`} onClick={RutaDetalle}>
                {props.type === 'songs' 
                ? DetallesSongs()
                : DetallesCard()   
                }
            </div>
        </div>
    )
}
export default Tarjeta;
