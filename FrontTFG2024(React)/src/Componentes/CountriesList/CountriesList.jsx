import useCountries from '../../Hook/useCountries'
import AjaxLoader from '../Ajax-Loader/Ajax-Loader'
import Tarjeta from '../Tarjeta/Tarjeta'

const CountriesList = () =>{
    const {search, Countrieslist} = useCountries()

    function MostrarCountry(country){
        return (
            <Tarjeta key={country.countryDetail.country_id}
                         id={country.countryDetail.country_id}
                         image={country.flag}
                         title={country.countryDetail.country_name}
                         type='countries'
            />
        )
    }

    return (
        <div className='row'>
            {search 
            ? <AjaxLoader></AjaxLoader>
            : Countrieslist.map(MostrarCountry)
            }
        </div>
    )
};
export default CountriesList