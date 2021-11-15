
const pokemonContainer = document.querySelector(".pokemon-container");      
const spinner = document.querySelector('.loader');
const previous = document.querySelector('#previous');      
const next = document.querySelector('#next');


let offset = 1;         
let limit = 8;

previous.addEventListener('click', () =>{   
    if (offset != 1){                              
        offset -= 9 ;
        removeChildNodes(pokemonContainer);          
        (fetchPokemons(offset, limit))
    }
})

next.addEventListener('click', () =>{
    offset += 9 ;                                     
    removeChildNodes(pokemonContainer);
    (fetchPokemons(offset, limit))
})

const fetchPokemon = (id)=> {                           
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res) => res.json())
        .then((data) => createPokemon(data));  
        spinner.style.display = 'none';                    
    }

const fetchPokemons = (offset, limit) =>{            
    let i = offset;        
    spinner.style.display = 'block';                       
    for(; i <= offset+limit; i++){                   
        fetchPokemon(i)
    }
}

const createPokemon = (pokemon) => {
    const flipCard = document.createElement('div');         //Comienzo a crear Flipcard
    flipCard.classList.add('flip-card');

    const cardContainer = document.createElement('div');         // Flipcard
    cardContainer.classList.add('card-container');

    flipCard.appendChild(cardContainer);                        // Flipcard

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

    const cardBack = document.createElement('div');             //Parte de atras de la carta al voltearse
    cardBack.classList.add('pokemon-block-back');
                                                  //Cambio flip por stats container 
    cardBack.appendChild(progressBars(pokemon.stats));                       
                            
    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);
    pokemonContainer.appendChild(flipCard);
}

const progressBars = (stats) => {                               //Creo funcion para crear barra de stats
    const statsContainer = document.createElement('div');         //Creo sus contenedores
    statsContainer.classList.add('stats-container');

    for (let i = 0; i < 3; i++){            //Solo quiero que muestre 3 stats
        const stat = stats[i];

    const statPercent = stat.base_state /2 + '%';    //Propiedad tomada del objeto se divide entre 2 porque va a ser un witdth
    const statContainer = document.createElement('div');         
    statContainer.classList.add('stat-container');

    const statName = document.createElement('div');         //La mayor parte de las clases son de bootstrap
    statName.textContent = stat.stat.name;

    const progress = document.createElement('div');
    progress.classList.add('progress');

    const progressBar = document.createElement('div');          //Estos atributos salen de los atributos de las barras de bootstrap
    progressBar.classList.add('progress-bar');   
    progressBar.setAttribute('aria-valuenow', stat.base_stat);      //Va a tomar este valor para llenarse
    progressBar.setAttribute('aria-valuemin', 0);           
    progressBar.setAttribute('aria-valuemax', 200);         //El valor maximo que toma de stat es 200
    progressBar.style.width = statPercent; 

    progressBar.textContent = stat.base_stat;           //El texto que va dentro de la barra

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);
    statsContainer.appendChild(statContainer);
    }

    return statsContainer;
}


const  removeChildNodes= (parent) => {              
    while (parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}

fetchPokemons(offset, limit)

