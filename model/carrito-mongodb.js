import mongoose from 'mongoose'
import Mongo_DB from './DB_mongo.js'

/* ---------------------------------------------------------------- */
/* Esquema del documento carrito */
const carritoSchema = mongoose.Schema({
    carrito: Array
})


/* Modelo del documento almacenado en una colección */
const CarritoModel = mongoose.model('carritos', carritoSchema)
/* ---------------------------------------------------------------- */

class CarritoModelMongoDB {

    /* CRUD -> C (Create) */
    async createCarrito(carrito) {
        if(!Mongo_DB.conexionOk) return {}
        try {
            const carritoSave = new CarritoModel({carrito : carrito})
            await carritoSave.save()

            return carrito
        }
        catch(error) {
            console.log(`Error en createCarrito: ${error.message}`)
            return {}
        }
    }
}

//exports
export default CarritoModelMongoDB