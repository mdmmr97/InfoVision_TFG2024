import './SeccionFiltros.css';
import Filtrar from "../Filtrar/Filtrar";
import Ordenar from "../Ordenar/Ordenar";

const SeccionFiltros = () => { 
  return (
    <>
      <p className="d-inline-flex gap-1">
        <button className="botonfiltros btn btn-primary " type="button" data-bs-toggle="collapse" 
                data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
          Filtrar y Ordenar
        </button>
      </p>
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 px-2">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card card-body">
              <h2>Ordenar</h2>
              <Ordenar titulo="Título"></Ordenar>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body">
              <h2>Filtrar</h2>
              <Filtrar titulo="Filtros"></Filtrar>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default SeccionFiltros;