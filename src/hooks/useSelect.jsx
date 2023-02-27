import React, {useState} from 'react'

const useSelect = (stateInicial, opciones) => {

    // definir el state del hook
    const[state, actualizarState] = useState(stateInicial);

    const SelectNoticias = () => (
        <select 
        className='browser-default'
        value={state}
        onChange={event => actualizarState(event.target.value)}
        >
            {opciones.map(opcion => (
                <option
                key={opcion.value}
                value={opcion.value}
                >{opcion.label}</option>
            ))}
        </select>
    );

    return [state, SelectNoticias];
}
 
export default useSelect;