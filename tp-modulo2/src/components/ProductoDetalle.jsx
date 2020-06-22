import React, {useEffect, useState} from 'react';

const ProductoDetalle = (props) => {
    const [producto, setProducto] = useState({});
    const [mensaje, setMensaje] = useState('');

    useEffect( () => {
        fetch(`https://jsonfy.com/items/${props.match.params.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setProducto(result[0])
                },
                (error) => {
                    alert(error);
                }
            )
    }, [props.match.params.id]);

    const handeClick = () => {
        setMensaje("¡Gracias por su compra!");
    }
    
    return (
        <div className="App">
            <h3>{producto.name}</h3>
            <p>Descripción: {producto.description}</p>
            <img src={producto.photo_url} alt=""/>
            <p>Unidades: {producto.stock}</p>
            <p>Precio: ${producto.price}</p>
            <hr/>
            <div>
                <button onClick={handeClick}>Comprar</button><br/>
                <p>{mensaje}</p>
            </div>
        </div>
    )
}

export default ProductoDetalle;
