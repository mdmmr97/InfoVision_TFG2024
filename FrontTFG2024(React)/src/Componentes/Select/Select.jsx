import './Select.css'
import React, { useState } from 'react';

const Select = (props) => {
    const [valor, setValor] = useState('All');

    function guardarSeleccion(e){

        setValor(e.target.value);
        props.manejardatos(props.titulo, e.target.value);
    }

    return (
        <div className='row'>
            <h5 className='col-12'>{props.titulo}</h5>
            <select id="select" name="select" className="form-select" aria-label="Default select example" value={valor} onChange={guardarSeleccion}>
                <option key={`...${props.titulo}`} value="All">...</option>
                {props.tipo === "filtro" ?
                    props.lista.map(item => {
                        switch (props.titulo) {
                            case "Año":
                                return <option key={item.edition} value={item.edition}>{item.edition}</option>
                            case "Pais":
                                return <option key={item.countryDetail.country_id} value={item.countryDetail.country_id}>{
                                            item.countryDetail.country_name}
                                        </option>
                        }
                    })
                : 
                    <>
                        <option value={'-1'}>{'desc'}</option>
                        <option value={'1'}>{'asc'}</option>
                    </>
                }             
            </select>
        </div>
    )
};
export default Select;