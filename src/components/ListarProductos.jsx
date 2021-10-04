import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {eliminarAsincrono} from '../actions/actionProducto'
 
export const ListarProductos = () => {

    const {producto} = useSelector(store => store.producto)
    const dispatch = useDispatch()
    
    return (
        <div>
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Documento</th>
                        <th>Nombres</th>
                        <th>Descripcion del producto</th>
                        <th>Precio</th>
                        <th>Celular</th>
                        <th>Dirección</th>
                        <th>Correo</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                   { 
                      (producto)?
                      (  producto.map((productoNuevo, index)=>(
                        <tr key={index}>
                            <td className="informacion_producto">{productoNuevo.doc}</td>
                            <td className="informacion_producto">{productoNuevo.nom}</td>
                            <td className="informacion_producto">{productoNuevo.ape}</td>
                            <td className="informacion_producto">{productoNuevo.tel}</td>
                            <td className="informacion_producto">{productoNuevo.cel}</td>
                            <td className="informacion_producto">{productoNuevo.dir}</td>
                            <td className="informacion_producto">{productoNuevo.email}</td>
                            <td className="informacion_producto"><img src={productoNuevo.img} alt="no disponible" className="img_producto" /></td>
                            <td><button onClick={()=>dispatch(eliminarAsincrono(productoNuevo.email))}>Eliminar</button></td>

                        </tr> 
                 )))
                 :(<span>No se encuentran los Datos</span>)  
                    }
               
                </tbody>
            </Table>
        </div>
    )
}
