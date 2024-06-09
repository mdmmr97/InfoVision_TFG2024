import { useEffect, useState } from "react";
import { getCountries, getCountryId } from "../Servicios/CountriesServices"

const useCountries= () => {
    const [Countrieslist, setCountrieslist] = useState([]);
    const [search, setSearch] = useState(true);

    function GetCountries(){
        setSearch(true);
 
        getCountries().then(country =>{
            setCountrieslist(country);
            setSearch(false);
        })
    }

    useEffect(GetCountries, [])
    return {search, Countrieslist}
}
export default useCountries 

export const useCountryId = (id) => {
    const [Country, setCountry] = useState({});
    const [search, setSearch] = useState(true);

    function GetCountry(){
        setSearch(true);
        getCountryId(id).then(Country =>{
            setCountry(Country);
            setSearch(false);
        })
    }

    useEffect(GetCountry, [id])
    return {search, Country}
}