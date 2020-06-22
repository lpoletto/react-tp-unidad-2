import React from 'react';
/**
 * corregir eveto preventDefault() del boton 
 */
const Registro = () => {
    const handleSubmitRegistro = (event) => {
        event.preventDefault();
        event.stopPropagation();

        console.log('registro');
    }

    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleSubmitRegistro}>
                <label>Nombre: </label>
                <input type="text" name="name" id="name"/>
                <br/>
                <label>Apellido: </label>
                <input type="text" name="surname" id="surname"/>
                <br/>
                <label>Nombre de usuario: </label>
                <input type="text" name="user-name" id="user-name"/>
                <br/>
                <label>Contraseña: </label>
                <input type="password" name="password" id="password"/>
                <br/>
                <label>Confirmar contraseña: </label>
                <input type="password-confirm" name="password-confirm" id="password-confirm"/>
                <hr/>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default Registro;
