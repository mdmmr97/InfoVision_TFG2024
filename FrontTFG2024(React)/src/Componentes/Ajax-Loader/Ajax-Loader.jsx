import './Ajax-Loader.css'
import Loader from '../../assets/Images/IconoCora.svg'

const AjaxLoader = () =>{
    return (
        <div className='.ajaxloaderdiv'>
            <img src={Loader} alt="ajax-loader" className='.ajaxloader'/>
        </div>
    )
}

export default AjaxLoader;