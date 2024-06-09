import YearsList from "../Componentes/YearsList/YearsList";
import ScrollUp from "../Componentes/ScrollUp/ScrollUp";

import React, { Suspense } from 'react';

const Years = () => {
    return (
        <div>
            <Suspense>
            <YearsList />
            <ScrollUp/>
            </Suspense>
        </div>
    )
}
export default Years;
