import { CountryProvider, useCountryContext} from '../../Contexto/CountryContext'
import { YearProvider, useYearContext} from '../../Contexto/YearContext'

import useCountries from '../../Hook/useCountries';
import useYears from '../../Hook/useYears';

import AjaxLoader from '../Ajax-Loader/Ajax-Loader'
import Buscador from '../Buscador/Buscador';
import Select from '../Select/Select';

const Filtrar = () => {
    const {searchcountri, Countrieslist} = useCountries()
    const {searchyear, Yearslist} = useYears()
    
    const {setCountryContext} = useCountryContext(CountryProvider);
    const {setYearContext} = useYearContext(YearProvider);


    function manejarDatos(tipo, dato){

        switch (tipo) {
            case 'Año':
                setYearContext(dato);
            break;
            case 'Pais':
                setCountryContext(dato);
            break;
        }
    }

    return(
        <div>
            <div className='mb-2'>
                {searchyear
                    ? <AjaxLoader></AjaxLoader>
                    : <Select titulo="Año" tipo="filtro" lista={Yearslist} manejardatos={manejarDatos}></Select>
                }
            </div>
            <div className='mb-2'>
                {searchcountri
                    ? <AjaxLoader></AjaxLoader>
                    : <Select titulo="Pais" tipo="filtro" lista={Countrieslist} manejardatos={manejarDatos}></Select>
                }
            </div>
            <div className='col-12  mb-2'>
                <Buscador titulo="Nombre Cancion"/>
            </div>
        </div>
    )
};
export default Filtrar;