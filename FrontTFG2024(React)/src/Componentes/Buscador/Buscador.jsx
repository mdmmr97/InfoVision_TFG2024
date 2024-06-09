import './Buscador.css';
import { SearchNameSongProvider, useSearchNameSongContext } from '../../Contexto/SearchNameSongContext';

const Buscador = (props) => {
    const {searchnamesongcontetx, setSearchNameSongContext} = useSearchNameSongContext(SearchNameSongProvider);

    function GuardarBusqueda(e){
        console.log(e.target.value);
        setSearchNameSongContext(e.target.value);
    }

    return (
        <div className='row'>
            <div className='col-12 col-md-6 col-l-3'>
                <h5 >{props.titulo}</h5>
            </div>
            
            <div className="input-group col-12 col-md-6 col-l-8">
                <span className="input-group-text" id="basic-addon1"><i className="bi bi-search"></i></span>
                <input type="text" value={searchnamesongcontetx} onChange={GuardarBusqueda} className="form-control "
                    placeholder="Cancion" aria-label="Cancion" aria-describedby="basic-addon1" />
            </div>
        </div>
    );
}
export default Buscador;