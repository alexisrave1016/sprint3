import { typesProductos } from "../types/types"

const initialState={
    producto:[]
}

export const productoReducer = (state = initialState, action) => {
   switch (action.type) {
       case typesProductos.registro:
           
          return{
              ...state
          }
   
       default:
           return state;
   }
}
