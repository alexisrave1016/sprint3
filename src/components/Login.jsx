import React from 'react';
import { Link } from 'react-router-dom';

function Login() {

  
    return (
        
        <div className="login">
            <Link to="/">
            <img className="login_logo" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632590351/sprint3/Amazon-Logo_xzuxyg.png" alt="" srcset="" />
            </Link>
            <div className="login_container">
            <h1>Iniciar sesión</h1>
            <form>
                <h5>Email</h5>
                <input className="texto" type="email" />
                <h5>Password</h5>
                <input className="texto" type="password" />
                <button type="submit" className="login_button">Continuar</button>
            </form>
                <button className="login_google"><img className="logo_google" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632601095/sprint3/google-logo_cqfi6y.png" alt="" srcset="" /> Sign In Google</button>
                
            <p>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Amazon.</p>

        </div>
        <button className="login_registro">Crea tu cuenta de Amazon</button>
    </div>

    );
}

export default Login;


        


















    




