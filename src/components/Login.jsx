import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { useDispatch} from 'react-redux';
import { loginSincrono, LoginGoogle } from '../actions/actionLogin';

function Login() {

    const dispatch = useDispatch()
    const [values, handleInputChange, reset]= useForm({
        email:'',
        password:''
    })
    
    const {email, password}= values;

    const handleLogin=(e)=>{
        e.preventDefault();
        dispatch(loginSincrono(email,password));
    }
    const handleGoogle=()=>{
        dispatch(LoginGoogle())
    }
    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
            </Button>

            <Container className="auth__social-networks">
                <Container
                    className="google-btn"
                    onClick={handleGoogle}
                >
                    <Container className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                </Container>
            </Container>
            <Link to="/registro">Registrarse</Link>

        </Form>

    );
}

export default Login;


        

















    //   <div className="login">
    //       <div className="login_container">
    //           <h1>Sign in</h1>
    //           <form>
    //               <h5>email</h5>
    //               <input type="email" />
    //               <h5>Password</h5>
    //               <input type="password" />
    //               <button type="submit" className="login_button">Sign In</button>
    //               <p>By signing-in, you agree to Amazon's Terms and Conditions</p>

    //           </form>
    //       </div>
    //   </div>
    



