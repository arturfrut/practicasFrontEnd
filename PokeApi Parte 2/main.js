const pokemonContainer = document.querySelector(".pokemon-container");      //Es buena practica hacer selecciones arriba
const spinner = document.querySelector('.loader');
const previous = document.querySelector('#previous');       //Selecciono los botones
const next = document.querySelector('#next');


let offset = 1;         //Cantidad de pokemons que voy a llamar
let limit = 8;

previous.addEventListener('click', () =>{   
    if (offset != 1){                               //El if es porque el id no puede ser negativo
        offset -= 9 ;
        removeChildNodes(pokemonContainer);          //Remueve los pokemons anteriores, para que luego aparezcan los nuevos
        (fetchPokemons(offset, limit))
    }
})

next.addEventListener('click', () =>{
    offset += 9 ;                                     //Podria hacerce uno sabiendo la cantidad de pokemones que hay
    removeChildNodes(pokemonContainer);
    (fetchPokemons(offset, limit))
})

const fetchPokemon = (id)=> {                           
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => createPokemon(data));  
        spinner.style.display = 'none';                     //Cuando se termina la busqueda el display debe desaparecer
    }

const fetchPokemons = (offset, limit) =>{            //desde /hasta 
    let i = offset;        
    spinner.style.display = 'block';                        //Mientras llegan los fetch el spinner sera visible, genera buena Ux usar loaders
    for(; i <= offset+limit; i++){                   
        fetchPokemon(i)
    }
    
}

const createPokemon = (pokemon) => {
    const card = document.createElement('div');     
    card.classList.add('pokemon-block');            

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');       
    sprite.src = pokemon.sprites.front_default;          

    spriteContainer.appendChild(sprite);                

    const number = document.createElement('p');         
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;    

    const name = document.createElement('p');
    name.classList.add('name');                         
    name.textContent = pokemon.name;                    

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card)
}

const  removeChildNodes= (parent) => {              //Si el elemento tiene padre, lo elimina, sirve para que me saque los elementos anteriores cuando llamo nuevos pokemons
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

fetchPokemons(offset, limit)

