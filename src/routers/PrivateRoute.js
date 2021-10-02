import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRoute  = ({
    isAuthenticated,   //resumen esto parte es para validar si esta auteticado el usuairo y de valida en approuter , ne Route
    component: Component, //se envia con mayuscula por  se envia como componente
    ...rest  //este rest, es el resto q es exact y path
}) =>{
    return (
            <Route {...rest}
            //componente condicional
            component={(props)=>(   //colbac estas props de aca se refieren a las propiedaddes de parans, history, location 
                (isAuthenticated) //vamos a validar si esta el usuario autenticado, lo hacemos con el ternario
                ?(<Component {...props}/>)  //si esta autenticado q le muestre el componente  a cual desea ingresar
                :(<Redirect to="/login"/>)  //si no esta autenticado, hacemos una redireccion a login
            )}
            />
        )
}

PrivateRoute.propTypes={
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
