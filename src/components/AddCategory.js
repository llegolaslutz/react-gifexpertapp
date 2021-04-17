
import React, { useState } from 'react';
import PropTypes from 'prop-types';



  //props.setCategories abajo y aca props. mmas comun desestructurar aca
export const AddCategory = ({ setCat }) => {

    const [inputValue, setInputValue] = useState(['']); // PARA Q NO QUEDE UNDEFINED EN ESTADO INICIAL

    const handleImputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    // atrapo el evento de onSubmit e
    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ){
            setCat (cats => [inputValue, ...cats]);
// se puede llamar como un callback q tiene el estado anterior (cats)
// sino no tengo acceso añ arreglo de categories acá. otra es llamarlo desde las props. a categories
            setInputValue('');
        }
    }

    return (     // mando el primer evento de onSubmit 
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value= { inputValue }
                onChange={ handleImputChange }
            />  
        </form>
    )   
}
 AddCategory.propTypes = {
        setCat: PropTypes.func.isRequired
    }       // MAYUS x q hace referencia al paquete q importamos
