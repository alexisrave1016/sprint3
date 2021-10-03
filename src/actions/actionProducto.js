import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase/firebase";
import { typesProductos } from "../types/types";

export const ProductoAsincronico=(doc,nom,ape,tel,cel,dir,email,img)=>{

    return (dispatch)=>
    {
        const producto ={
        doc,nom,ape,tel,cel,dir,email,img
        };
    
    addDoc(collection(db, 'productosCollection'),producto)
        .then(resp=>{
        dispatch(AgregarProducto(producto))
    })
        .catch(error=>{
        console.log(error)
    })

    };
}

export const AgregarProducto = (producto) => {
    return {
        type: typesProductos.registro,
        payload: producto,
    };
}
