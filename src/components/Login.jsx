import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { loginGoogle, loginEmailPassword, loginFacebook} from '../actions/actionLogin';



function Login({history}) {

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
   dispatch(loginEmailPassword(email,password));
   history.replace('/');
    
}

const handleGoogle = ()=>{
    dispatch(loginGoogle());
    history.replace('/');
}

const handleFacebook = ()=>{
    dispatch(loginFacebook());
    history.replace('/');
}


    return (
        
        
           
        <div className="login">
            <Link to="/portada">
            <img className="login_logo" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632590351/sprint3/Amazon-Logo_xzuxyg.png" alt="" srcset="" />
            </Link>
            <div className="login_container">
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleLogin}>
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

                <button type="submit" variant="primary" className="login_button" >Continuar</button>
            </form>
                <button className="login_google" onClick={handleGoogle}><img className="logo_google" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1632601095/sprint3/google-logo_cqfi6y.png" alt="" srcset="" /> Sign In Google</button>
                <button className="login_facebook" onClick={handleFacebook}><img className="logo_face" src="https://res.cloudinary.com/dd01p9lb9/image/upload/v1633317615/social-facebook-button-blue-icon_cqwfbz.png" alt="no disponible" srcset="" />Sign In Facebook</button>
            <p>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Amazon.</p>

        </div>
        
        <hr className="linea"/> <span className="title_nuevo_amazon">¿Eres nuevo en Amazon?</span>
        
        <button className="login_registro">
            <Link to="/registro" className="linkRegistro">
            Crea tu cuenta de Amazon
            </Link>
            </button>
        
    </div>
   

    );
}

export default Login;


        


















    




