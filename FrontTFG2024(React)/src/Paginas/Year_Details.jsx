import Detalles_Year from '../Componentes/Detalles_Year/Detalles_Year';
import SongsList from '../Componentes/SongsList/SongsList';
import ScrollUp from '../Componentes/ScrollUp/ScrollUp';
import AjaxLoader from '../Componentes/Ajax-Loader/Ajax-Loader';
import React, { Suspense } from 'react';

import { useSongsYear } from '../Hook/useSongsIds';
import { useYearId } from "../Hook/useYears";


const Year_Details = (props) => {

    const id = props.params.year;
    const { search, Year } = useYearId(id)

    return (
        <div>
            <div className="parallax year" style={{ backgroundImage: `url(${Year.logo})` }} >
                {search
                    ? <AjaxLoader />
                    : <div className='titulo'>
                        <h1>
                            {`#${Year.country.country_id}`}<br />
                            <span>{Year.edition}</span>
                        </h1>
                    </div>
                }
            </div>
            <div className="deslizante">
                <ScrollUp />
                <Detalles_Year year={Year} />
                <Suspense>
                    <SongsList hook={useSongsYear(id)} titulo={'Lista de Canciones'} />
                </Suspense>
            </div>
        </div>
    )
}
export default Year_Details;

