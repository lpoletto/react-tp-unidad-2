import React from 'react';
/**
 * Colocar el evento para el preventDefault() en el boton
 * 
 */
const Login = () => {
    const handleSubmitLogin = (event) => {
        event.preventDefault();
        event.stopPropagation();

        console.log('login');

    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmitLogin}>
                <label>Usuario:</label>
                <input type="text" name="user" id="user"/>
                <br/>
                <label>Contraseña</label>
                <input type="password" name="password" id="password"/>
                <hr/>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    )
}

export default Login;
