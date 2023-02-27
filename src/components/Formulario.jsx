import React from 'react'
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types'
 

const Formulario = ({guardarCategoria}) => {

    // opciones de la categoria 
    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimientos'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'},
    ]



    // useSelect 
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    // submit al boton  el Formulario pasara la categoria al componente padre 
    const buscarNoticias = event => {
        event.preventDefault();

        guardarCategoria(categoria);

    } 


    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={buscarNoticias}>
                    <h2 className={styles.heading}>Find News by Category</h2>

                    <SelectNoticias/>

                    <div className='input-field col s12'>
                        <input 
                        type="submit" 
                        className={`${styles.btn_block} btn-large amber darken-2`}
                        value="search"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;