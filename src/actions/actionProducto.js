import { typesProductos } from "../types/types";

export const AgregarProducto = (producto) => {
    return {
        type: typesProductos.registro,
        payload: producto,
    };
}
