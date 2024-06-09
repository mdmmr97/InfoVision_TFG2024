import Detalles_Country from '../Componentes/Detalles_Country/Detalles_Country';
import SongsList from '../Componentes/SongsList/SongsList';
import ScrollUp from '../Componentes/ScrollUp/ScrollUp';
import AjaxLoader from '../Componentes/Ajax-Loader/Ajax-Loader';
import React, { Suspense } from 'react';

import { useCountryId } from '../Hook/useCountries';
import { useSongsCountry } from '../Hook/useSongsIds';

const Country_Details = (props) => {

    const id = props.params.country;
    const { search, Country } = useCountryId(id)

    return (
        <div className='Detalles'>
            <div className="parallax country" style={{ backgroundImage: `url(${Country.flag}` }} >
                {search
                ? <AjaxLoader />
                :<div className='titulo'>
                    <h1>
                        {`#${Country.countryDetail.country_id}`}<br />
                        <span>{Country.countryDetail.country_name}</span>
                    </h1>
                 </div>
                }
            </div>
            <div className="deslizante">
                <Detalles_Country country={Country}/>
                <Suspense>
                    <SongsList hook={useSongsCountry(id)} titulo={'Lista de Canciones'} />
                    <ScrollUp />
                </Suspense>
            </div>
        </div>
    )
}
export default Country_Details;