import React from 'react'
import Producto from './Producto';

const Home = (props) => {
    return (
        <div>
            <h1>Bienvenidos a tienda online</h1>
            <h2>Ofertas de la semana</h2>
            {
                props.productos.map(item => <Producto key={item.id} data={item}/>)
            }
        </div>
    )
}

export default Home
