import CountriesList from "../Componentes/CountriesList/CountriesList";
import ScrollUp from "../Componentes/ScrollUp/ScrollUp";

import React, { Suspense } from 'react';

const Countries = () => {
    return (
        <div>
            
            <Suspense>
                <CountriesList />
                <ScrollUp/>
            </Suspense>
        </div>
    )
}
export default Countries;