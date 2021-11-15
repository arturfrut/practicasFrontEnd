const pokemonContainer = document.querySelector(".pokemon-container");      //Selecciono contenedor desde HTML

const fetchPokemon = (id)=> {                           //pide UN pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => createPokemon(data));             //Para las pruebas se uso console.log, para que envie datos se pasa directamente la card completa
    }

const fetchPokemons = (nroPokemons) =>{             //pide una cantidad de pokemons
    let i = 1;                                    //Los id de la API comienzan en 1
    for(; i <= nroPokemons; i++){                   
        fetchPokemon(i)
    }
}

const createPokemon = (pokemon) => {
    const card = document.createElement('div');     //Creo div, puedo crear cualquier elemento, y accedo a el por su nombre de variable
    card.classList.add('pokemon-block');            //Le agrego clase, que previamente fue creada

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');       //Creo imagen
    sprite.src = pokemon.sprites.front_default;          //Puedo cambiar el src de la imagen, la imagen sale de la API, entrando a su propiedad sprite, existe una url en sprite_default

    spriteContainer.appendChild(sprite);                //Agrego a sprite como hide de SpriteContainer

    const number = document.createElement('p');         //Creo un parrafo
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;    //Agrego texto al P, el padStart es un metodo para string, el cual obliga a completar 3 caracteres y si no llega completa con el segundo parametro, en este caso 0

    const name = document.createElement('p');
    name.classList.add('name');                         //Le agrego clase especifica al nombre
    name.textContent = pokemon.name;                    //Propiedad que viene de la data de la API

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card)
}

fetchPokemons(4)


/*

Elemento creado con createPokemon

div pokemon container
    div pokemon block           //uno por cada pokemon que mandemos en el fetchPokemons
        div img-container
            img                 //con sprite_default obtenido de api como Src
        /div
    /div
    p #001                      //Siempre va a tener 3 digitos, y toma id como base
    p nombre pokemon            
*/