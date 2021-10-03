import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
 
export const ListarProductos = () => {

    const {producto} = useSelector(store => store.producto)
    
    return (
        <div>
             <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Documento</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Telefono</th>
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
                            <td>{productoNuevo.doc}</td>
                            <td>{productoNuevo.nom}</td>
                            <td>{productoNuevo.ape}</td>
                            <td>{productoNuevo.tel}</td>
                            <td>{productoNuevo.cel}</td>
                            <td>{productoNuevo.dir}</td>
                            <td>{productoNuevo.email}</td>
                            <td><img src={productoNuevo.img} alt="no disponible"/></td>
                            <td><button>Eliminar</button></td>

                        </tr> 
                 )))
                 :(<span>No se encuentran los Datos</span>)  
                    }
               
                </tbody>
            </Table>
        </div>
    )
}
