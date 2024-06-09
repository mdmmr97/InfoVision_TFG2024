import React, { Suspense } from 'react';

import SeccionFiltros from '../Componentes/SeccionFiltros/SeccionFiltros';
import SongsList from "../Componentes/SongsList/SongsList";
import ScrollUp from "../Componentes/ScrollUp/ScrollUp";

import { YearProvider } from '../Contexto/YearContext';
import { CountryProvider } from '../Contexto/CountryContext';
import { SearchNameSongProvider } from '../Contexto/SearchNameSongContext';

import { OrdenYearProvider } from '../Contexto/OrderYearContext';
import { OrdenNameSongProvider } from '../Contexto/OrdenNameSongContext';
import { OrdenCountryProvider } from '../Contexto/OrderCountryContext';

const Songs = () => {
    return (
        <div>
            <YearProvider>
            <CountryProvider> 
            <SearchNameSongProvider>
            <OrdenYearProvider>
            <OrdenNameSongProvider>
            <OrdenCountryProvider>
                    <Suspense>
                    <SeccionFiltros />
                    <SongsList />
                    <ScrollUp />
                    </Suspense>
            </OrdenCountryProvider>
            </OrdenNameSongProvider>
            </OrdenYearProvider>
            </SearchNameSongProvider>
            </CountryProvider>
            </YearProvider>
        </div>
    )
}
export default Songs;

/*
<YearProvider>
            <CountryProvider> 
            <SearchNameSongProvider>
            <OrdenYearProvider>
            <OrdenNameSongProvider>
            <OrdenCountryProvider>
                    <SeccionFiltros />
                    <SongsList />
                    <ScrollUp />
                    <Suspense fallback={"Cargando"}>
                        <LazyLoad offset={100}>
                            <PiePagina />
                        </LazyLoad>
                    </Suspense>
            </OrdenCountryProvider>
            </OrdenNameSongProvider>
            </OrdenYearProvider>
            </SearchNameSongProvider>
            </CountryProvider>
            </YearProvider>*/