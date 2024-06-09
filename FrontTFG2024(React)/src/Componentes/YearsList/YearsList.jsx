import { useYears,  useDecades } from '../../Hook/useYears'
import AjaxLoader from '../Ajax-Loader/Ajax-Loader'
import DesplegableYears from '../DesplegableYears/DesplegableYears';

const YearsList = () =>{
    const {search, Yearslist} = useYears();
    const Decadelist = useDecades(Yearslist);

    function MostrarDecada(Decade){
        return (
            <DesplegableYears key={Decade.decade} decade={Decade.decade} list={Decade.list}></DesplegableYears>
        )
    }

    return (
        <div>
            {search 
            ? <AjaxLoader></AjaxLoader>
            : Decadelist.map(MostrarDecada).reverse()
            }
            
        </div>
    )
};
export default YearsList