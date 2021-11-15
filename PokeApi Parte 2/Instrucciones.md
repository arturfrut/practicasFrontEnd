# PokeApi parte 2

* Hay que recordar que fetch trae los pokemones como vayan llegando
* Pongo un spinner como loader de carga, primero es visible en el fetchPokemonS, pero una vez se reciben (al final del fetchPokemon) debe desaparecer con un style none
* Copio componente de paginacion de bootstrap
* Cambio a funcion fetchPokemonS los parametros a offset y limit, para que tenga un valor base y un limite
* Declaro el offset arriba con un let
* Selecciono botones del DOM 
* Les asigno funciones para que cambien los offsets y limits 
* Hago if para que el offset no pase a negativo (funciona en relacion al id que permite la API)
* Creo funcion removeChildNodes para que cuando llame pokemones nuevos elimine de la pantalla los anteriores
* Agrego removeChildNodes a prev y next, para que cuando haga click me elimine los poke anteriores, y despues va el fetch que llama a los proximos
