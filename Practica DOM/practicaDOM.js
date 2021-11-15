const modelo = {
    nombreProducto:'Garnier',
    descripcion:'Garnier Pure Active Micellar',
    descripcion2:'Cleansing Water, 125 ml',
    precio:'$60',
    estrellas: '***',
    foto: 'https://us.123rf.com/450wm/azlala/azlala1712/azlala171200185/91056067-reloj-de-pared-clásico-azul-clásico-aislado-en-blanco-ilustración-vectorial.jpg?ver=6'
}


const container = document.querySelector('#containerFull');


const divContainer = document.createElement('div');
const divImg= document.createElement('div');
const img = document.createElement('img');
const title = document.createElement('h1')
const descrition1 = document.createElement('p')
const descrition2 = document.createElement('p')
const descrition3 = document.createElement('p')
const descrition4 = document.createElement('p') 
const button = document.createElement('button') 



container.appendChild(divContainer);
divContainer.appendChild(divImg,title,descrition1,descrition2,descrition3,descrition4,button)



/*
<div class="divContainer">
    <div class="imgContainer">
        <img src="direccion de imagen">
    </div>
    <h1>nombre</h1>
    <p class="descripcion" >descripcion1</p>
    <p class="descripcion">descripcion2</p>
    <p class="precio">precio</p>
    <p class="estrella">stars</p>
    <button class="btn" >ADD TO CART</button>
    </div>
    */
       
       
       
       /*
       container.innerHTML = `
       <div class="divContainer">
       <div class="imgContainer">
           <img src=${modelo.foto}>
       </div>
       <h1>nombre</h1>
       <p class="descripcion" >descripcion1</p>
       <p class="descripcion">descripcion2</p>
       <p class="precio">precio</p>
       <p class="estrella">stars</p>
       <button class="btn" >ADD TO CART</button>`
       */