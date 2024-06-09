import { OrdenNameSongProvider, useOrdenNameSongContext } from '../../Contexto/OrdenNameSongContext'
import { OrdenCountryProvider, useOrdenCountryContext } from '../../Contexto/OrderCountryContext'
import { OrdenYearProvider, useOrdenYearContext } from '../../Contexto/OrderYearContext'

import Select from '../Select/Select'

const Ordenar = () => {
    const {setOrdenNameSongContext} = useOrdenNameSongContext(OrdenNameSongProvider);
    const {setOrdenCountryContext} = useOrdenCountryContext(OrdenCountryProvider);
    const {setOrdenYearContext} = useOrdenYearContext(OrdenYearProvider);
    
    function manejarDatos(tipo, dato) {

        switch (tipo) {
            case 'Nombre Cancion':
                setOrdenNameSongContext(dato);
                break;
            case 'Pais':
                setOrdenCountryContext(dato);
                break;
            case 'Año':
                setOrdenYearContext(dato);
                break;
        }
    }

    return (
        <div>
            <div className='mb-2'>
                <Select titulo="Nombre Cancion" tipo="orden" manejardatos={manejarDatos}></Select>
            </div>
            <div className='mb-2'>
                <Select titulo="Pais" tipo="orden" manejardatos={manejarDatos}></Select>
            </div>
            <div className='mb-2'>
                <Select titulo="Año" tipo="orden" manejardatos={manejarDatos}></Select>
            </div>
        </div>
    )
}
export default Ordenar;