// en esta podemos utilizar todo lo q modifiquemos en la tienda como tal derrsto no cmabiaria

import { createStore, combineReducers,compose, applyMiddleware } from "redux";
import loginReducer from "../reducers/loginReducer";
import thunk from "redux-thunk";


// esto combila los milwer
const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers= combineReducers({
    login: loginReducer,
})

export const store = createStore(
    reducers,
    // applyMiddleware esto resive como parametro a trunk que instalamos
    composeEnhancers(applyMiddleware(thunk))
    
)