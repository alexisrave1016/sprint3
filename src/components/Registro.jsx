import { Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import {registroEmailPasswordNombre} from '../actions/actionRegister';
import {useDispatch} from 'react-redux'

export const Registro = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: ''
    });

    const { nombre, email, pass1, pass2 } = values;

    const handleRegistro = e => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email,pass1,nombre))
    }

    return (
        <div className="registro"> 
            <Form onSubmit={handleRegistro} className="container">
                  <Link to="/">  <img className="login_logo" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632590351/sprint3/Amazon-Logo_xzuxyg.png" alt="no disponible" srcset="" /></Link>
                <div className="registro_contianer">
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <h5 className="titulos">Tu nombre</h5>
                        <Form.Control 
                            className="registro_casillas"
                            type="text"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <h5 className="titulos">Correo electronico</h5>
                        <Form.Control 
                            className="registro_casillas"
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <h5 className="titulos">Contraseña</h5>
                        <Form.Control 
                            className="registro_casillas"
                            type="password"
                            placeholder="Como minimo 6 caracteres"
                            name="pass1"
                            value={pass1}
                            onChange={handleInputChange}
                        />
                        <span className="informacion_contrasñea"> 𝒾    La contraseña debe contener al menos seis caracteres.</span>
                    </Form.Group>
                    

                    <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                        <h5 className="titulos">Vuelva a escribir la contraseña</h5>
                        <Form.Control 
                            className="registro_casillas"
                            type="password"
                            placeholder="Password"
                            name="pass2"
                            value={pass2}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    

                    <Button variant="primary" type="submit" className="registrar_nuevo">
                        Crea tu cuenta en Amazon
                    </Button>

                    <span className="inf_adicional">Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de amazon.com.</span>
                    <hr className="linea1"/>
                    <br />
                    <span className="inf_adicional">¿Ya tienes una cuenta? Iniciar sesión
                                                    ¿Compras para el trabajo? Crea una cuenta corporativa gratis</span>
                    <Link to="/login" className="regreso">Login</Link>
                </div>
            </Form>

        </div>
    )
}