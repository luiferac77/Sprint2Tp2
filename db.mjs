import mongoose from "mongoose";
const {Collection} = mongoose;

const superHeroSchema = new mongoose.Schema({
    nombreSuperHeroe: {type: String, required: true},
    nombreReal: {type: String, requied: true}, 
    edad: {type: Number, min: 0}, 
    planetaOrigen: {type: String, default: 'Desconocido'}, 
    debilidad: String, 
    poderes: [String], 
    aliados: [String], 
    enemigos: [String], 
    createdAt: {type: Date, default: Date.now},
    creator: String  
}, {collection: 'Grupo-12'});

export const SuperHero = mongoose.model('SuperHero', superHeroSchema);