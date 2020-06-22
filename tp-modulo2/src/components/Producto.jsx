import React from 'react'
import {Link} from "react-router-dom";

const Producto = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/producto/detalle/'+props.data.id}>{props.data.name}</Link>
                </li>
            </ul>
        </div>
    )
}

export default Producto
