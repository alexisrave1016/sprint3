import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "@firebase/firestore";
import { db } from "../firebase/firebase";
import { typesProductos } from "../types/types";


export const eliminarAsincrono = (email) => { //este email es latercer consicion del whre que es con lo q lo vamosa  comparar, este y el del where tienen que ser igual
    return async (dispatch)=>{
        const articulos =collection(db, 'productosCollection')
        const q = query(articulos, where('email','==',email))//aca tengo q cambiar por lo q quiero eliminar uando modifique el archivo
        const resultado = await getDocs(q)
        resultado.forEach((elem)=>{
            deleteDoc(doc(db,'productosCollection',elem.id))
        })
        
       dispatch(eliminarProducto(email)) 
    }
}


export const eliminarProducto = (email) => {
    return{
        type: typesProductos.eliminar,
        payload: email,
    }
   
}



export const ListarAsincronico=()=>{
    return async(dispatch)=>{
        const datos= await getDocs(collection(db, 'productosCollection'))
        
        const productosArray=[];
        datos.forEach((doc)=>{
           productosArray.push({...doc.data()})
        })
        dispatch(ListarSincrono(productosArray))
        console.log(productosArray)
    }
}


export const ListarSincrono = (producto) => {
    return {
        type: typesProductos.listar,
        payload: producto
    }
}









//---------------------registro------------------------------

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
