import { conectar } from "./conexion.mjs";
import { SuperHero } from "./db.mjs";

const uri = 'mongodb+srv://Grupo-12:grupo12@cursadanodejs.ls9ii.mongodb.net/Node-js';
//const uri = 'mongodb://localhost:27017/Node-js'
conectar(uri);

export const insertSuperHero = async () => {
    const hero  = new SuperHero({
        nombreSuperHeroe: 'SpidermanLFA24', 
        nombreReal: 'Peter Parker', 
        edad: 25, 
        planetaOrigen: 'Tierra', 
        debilidad: 'Radioactiva', 
        poderes: ['Trepar paresdes', 'Sentido arácnido', 'Super fuerza', 'agilidad'], 
        aliados: ['Iron Man'], 
        enemigos: ['Duende verde'], 
        creator: 'LFA2024'
    });
    await hero.save();
    console.log("Superheroe insertado:", hero);
} 

export const updateSuperHeroe = async (nombreSuperHeroe) => {
    const result = await SuperHero.updateOne(
        {nombreSuperHeroe: nombreSuperHeroe}, 
        {$set: {edad: 26}}
    );
    console.log("Resultado de la actualización:", result);
}

export const deleteSuperHero = async (nombreSuperHeroe) => {
    const result = await SuperHero.deleteOne(
        {nombreSuperHeroe: nombreSuperHeroe}
    );
    console.log('Superheroe esliminado', result);
}

export const findSuperHeroes = async () => {
    const heroes = await SuperHero.find(
        //{planetaOrigen: 'Tierra'}
        {nombreSuperHeroe: 'SpidermanLFA24'}
    );
    console.log('Superheroes encontrados: ', heroes);
}