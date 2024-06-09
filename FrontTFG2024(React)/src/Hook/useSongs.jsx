import { useEffect, useState } from "react";
import { getSongs } from "../Servicios/SongsServices";

import { CountryProvider, useCountryContext} from '../Contexto/CountryContext'
import { YearProvider, useYearContext} from '../Contexto/YearContext'
import { SearchNameSongProvider, useSearchNameSongContext } from '../Contexto/SearchNameSongContext';

import { OrdenNameSongProvider, useOrdenNameSongContext } from '../Contexto/OrdenNameSongContext'
import { OrdenCountryProvider, useOrdenCountryContext } from '../Contexto/OrderCountryContext'
import { OrdenYearProvider, useOrdenYearContext } from '../Contexto/OrderYearContext'

const useSongs = () => {
    const {countrycontext} = useCountryContext(CountryProvider);
    const {yearcontext} = useYearContext(YearProvider);
    const {searchnamesongcontetx} = useSearchNameSongContext(SearchNameSongProvider);

    const {ordenNameSongcontext} = useOrdenNameSongContext(OrdenNameSongProvider);
    const {ordenCountrycontext} = useOrdenCountryContext(OrdenCountryProvider);
    const {ordenYearcontext} = useOrdenYearContext(OrdenYearProvider);

    const [Songslist, setSongslist] = useState([]);
    const [search, setSearch] = useState(true)
    const [page, SetPage] = useState(0);

    function GetSongs(){
        setSearch(true);
        getSongs(countrycontext, yearcontext, searchnamesongcontetx, 
                 ordenNameSongcontext, ordenCountrycontext, ordenYearcontext)
            .then(song =>{
            setSongslist(song);
            setSearch(false);
        })
    }

    useEffect(GetSongs, [countrycontext, yearcontext, searchnamesongcontetx, ordenNameSongcontext, ordenCountrycontext, ordenYearcontext])
    return {search, Songslist, SetPage}
}
export default useSongs;