import { useEffect, useState } from "react";
import { getYears, getYearId } from "../Servicios/YearsServices";

export const useYears= () => {
    const [Yearslist, setYearsList] = useState([]);
    const [search, setSearch] = useState(true);

    function GetYears(){
        setSearch(true);
 
        getYears().then(year =>{
            setYearsList(year);
            setSearch(false);
        })
    }

    useEffect(GetYears, [])
    return {search, Yearslist}
}
export default useYears;

export const useDecades = (Yearslist) => {
    const [Decadelist, setListaDecades] = useState([]);

    // Función que agrupa los años por décadas
    // reduce() --> Itera sobre la lista de años y devuelve un objeto con las décadas como clave y un array con los años como valor
    // acc --> Acumulador :  objeto que se va a devolver
    // element --> Elemento actual

    function groupByDecade(years) {
        return years.reduce((acc, element) => {
            const decade = Math.floor(element.edition / 10) * 10; // Obtiene la década
            if (!acc[decade]) { // Si no existe la década en el acumulador, la crea
                acc[decade] = {
                    decade,
                    list: [],
                };
            }
            acc[decade].list.push(element); // Añade el año a la década correspondiente
            acc[decade].list.toSorted((a, b) => b.edition - a.edition); // Ordena los años de forma descendente
            return acc; 
        }, {}); // Objeto vacío que se va a devolver
    }

    useEffect(() => {
        if (Yearslist.length > 0) {
            const decades = groupByDecade(Yearslist); // Agrupa los años por décadas
            setListaDecades(Object.values(decades)); // Convierte el objeto en un array y lo guarda en el estado
        }
    }, [Yearslist])
    return Decadelist;
}

export const useYearId = (id) => {
    const [Year, setYear] = useState({});
    const [search, setSearch] = useState(true);

    function GetYear(){
        setSearch(true);
        getYearId(id).then(year =>{
            setYear(year);
            setSearch(false);
        })
    }

    useEffect(GetYear, [id])
    return {search, Year}
}