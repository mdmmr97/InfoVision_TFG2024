import './DesplegableYears.css'
import Tarjeta from '../Tarjeta/Tarjeta'

const DesplegableYears = (props) => {

    function MostrarYear(year){
        return (
            <Tarjeta key={year.edition}
                          id={year.edition}
                          image={year.logo}
                          title={year.edition}
                          type='years'
            />
        )
    }

    return (
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.decade}`} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <span className='col-12'>{props.decade}</span>
                    </button>
                </h2>
                <div id={`${props.decade}`} className="accordion-collapse collapse show">
                    <div className="accordion-body row">
                        {props.list.map(MostrarYear)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DesplegableYears