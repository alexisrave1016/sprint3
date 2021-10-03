import { typesProductos } from "../types/types"

const initialState={
    producto:[]
}

export const productoReducer = (state = initialState, action) => {
   switch (action.type) {
       case typesProductos.registro:
           
          return{
              producto:[action.payload]  //enviando a producto q lo resivimos como parametro
          }

       case typesProductos.listar:
           
          return{
              producto: [...action.payload]
          }
   
       default:
           return state;
   }
}
