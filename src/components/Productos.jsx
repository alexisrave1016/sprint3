import React, { useEffect }  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/actionLogin'
import { useForm } from '../hooks/useForm'
import { fileUpload } from '../helpers/FileUpload'
import { ProductoAsincronico, ListarAsincronico} from '../actions/actionProducto'
import { ListarProductos } from './ListarProductos'


export const Productos = ({history}) => {
    const dispatch = useDispatch()

    const [ values, handleInputChange]= useForm({
        documento:'',
        nombres:'',
        apellidos:'',
        telefono:'',
        celular:'',
        direccion:'',
        email:'',
        imagen:''
    })

    let {documento,nombres,apellidos,telefono,celular,direccion,email,imagen}=values;

    const handleRegistro=(e)=>{
        e.preventDefault();
        dispatch(ProductoAsincronico(documento,nombres,apellidos,telefono,celular,direccion,email,imagen))

    }

    const handleLogout =()=>{
        dispatch(logout());
        history.replace('/portada') // se supone q caundo cirre el logut me debe rediregir a esta pagina
                                    //aca va login originalmente
    }
    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
   }
   const handleFileChanged = (e) => {
       const file = e.target.files[0];
       fileUpload(file)
       .then(response => {
           imagen = response
           console.log(response);
       })
       .catch(error => {
           console.log(error.message);
       })
   }

   useEffect(() => {
       dispatch(ListarAsincronico())
   }, [])


    return (
        <div>
             <form onSubmit={handleRegistro}>
                <h1>Estudiantes</h1>
                <div className="form-group">
                    <div className="form-group col-md-4">
                        <label htmlFor="documento">Documento</label>
                        <input className="form-control" type="text" name="documento" id="documento" value={documento} onChange={handleInputChange}/>
                    </div>
 
                    <div className="form-group col-md-4">
                        <label htmlFor="nombres">Nombres</label>
                        <input className="form-control" type="text" name="nombres" id="nombres" value={nombres} onChange={handleInputChange}/>
                    </div>
 
                    <div className="form-group col-md-4">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input className="form-control" type="text" name="apellidos" id="apellidos" value={apellidos} onChange={handleInputChange}/>
                    </div>
 
                    <div className="form-group col-md-4">
                        <label htmlFor="telefono">Teléfono</label>
                        <input className="form-control" type="text" name="telefono" id="telefono" value={telefono} onChange={handleInputChange}/>
                    </div>
 
                    <div className="form-group col-md-4">
                        <label htmlFor="celular">Celular</label>
                        <input className="form-control" type="text" name="celular" id="celular" value={celular} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="direccion">Dirección</label>
                        <input className="form-control" type="text" name="direccion" id="direccion" value={direccion} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="direccion">Email</label>
                        <input className="form-control" type="email" name="email" id="email" value={email} onChange={handleInputChange}/>
                    </div>
                     <br/>
                    <div className="form-group col-md-4">
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChanged}
                            value={imagen}
                        />
 
                        <button className="btn btn-success" type="button"
                        onClick={handlePictureClick}
                        >Imagen</button>
                    </div>
                    <button className="btn btn-success" type="submit">Guardar</button>
 
                    <div>
                        <button className="btn btn-primary" type="button"
                        onClick={handleLogout}
                       >Logout</button>
                    </div>
 
                </div>
            </form>
            <ListarProductos />
        </div>
    )
}
