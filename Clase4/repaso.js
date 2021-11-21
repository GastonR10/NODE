import fetch from 'node-fetch';

async function getSwapi() {
    try {
        const result = [];
        const data = {
            personaje: {},
            planeta: {},
        };

        const getSwapiPeople = await fetch("https://swapi.dev/api/people/1/");
        
        const character = await getSwapiPeople.json();
        
        const planet = await fetch(character.homeworld);
        const planetJson = await planet.json();

        data.personaje = {
            nombre: character.name,
            altura: character.height,
            color_ojo: character.eye_color,
        };

        data.planeta = {
            nombre: planetJson.name,
            gravedad: planetJson.gravity,
            terreno: planetJson.terrain,
        };

        result.push(data);

        
        return result;        
    } catch (error) {
        console.log(error);
    }
}

const retornoFuncion = await getSwapi();

console.log(retornoFuncion);