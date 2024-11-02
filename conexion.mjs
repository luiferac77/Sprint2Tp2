import mongoose from "mongoose";

export const conectar = (uri) => {
    mongoose.connect(uri)
        .then(() => console.log("La conexión ha sido existosa"))
        .catch(err => console.error("Error en la conexión", err))
}