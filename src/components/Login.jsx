import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { loginSincrono } from '../actions/actionLogin';


function Login() {

    // dispatch envia o dispra un accion
    const dispatch = useDispatch();

    const [ values, handleInputChange ]= useForm({
        email: '',
        password: ''

    })

const {email,password} = values;

const handleLogin = (e)=>{
    e.preventDefault();
    //dispatch es pra enciar en ridux en la crossOriginIsolated, si no esta fallando esto
   dispatch(loginSincrono(email,password));
    
}

    return (
        
        
           
        <div className="login">
            <Link to="/">
            <img className="login_logo" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632590351/sprint3/Amazon-Logo_xzuxyg.png" alt="" srcset="" />
            </Link>
            <div className="login_container">
            <h1>Iniciar sesión</h1>
            <form>
                <h5>Email</h5>
                <input className="texto" 
                type="email" 
                name="email" 
                value={email}
                onChange={handleInputChange} 
                />

                <h5>Password</h5>
                <input className="texto" 
                type="password" 
                name="password"
                value={password}
                onChange={handleInputChange}
                />

                <button type="submit" variant="primary" className="login_button" onClick={handleLogin}>Continuar</button>
            </form>
                <button className="login_google"><img className="logo_google" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632601095/sprint3/google-logo_cqfi6y.png" alt="" srcset="" /> Sign In Google</button>
                
            <p>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Amazon.</p>

        </div>
        <hr className="linea"/> <span className="title_nuevo_amazon">¿Eres nuevo en Amazon?</span>
        <button className="login_registro">Crea tu cuenta de Amazon</button>
    </div>
   

    );
}

export default Login;


        


















    




