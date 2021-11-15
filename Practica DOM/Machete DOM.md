SELECTORES

//Prestar atencion a las S

const elem = document.getElementById('nombreId') //Devuelve un elemento
const elem = document.getElementsByTagName('li') //devuelve arreglo
const elem = document.querySelector('#nombreElemento') //devuelve primer elemento
const elem = document.getElementsByClassName('nombreClase') //Devuelve arreglo
const elem = document.querySelectorAll('div, .clase, #id') //devuelve lista

--------------------------------------------

const elem = document.getElementById('Cosa');
const hijos = elem.childNodes; //devuelve Lista 
const padre = elem.parentNode; //Devuelve elemento

//Array.from(hijos)

///////////////////////////////////////////////////////////////////////////////

CREAR ELEMENTOS

const nuevoH1 = document.createElement('h1');
const nuevoParrafo = document.createElement('p');

const textH1 = document.createTextNode('Hola mundo');  //   <h1>seria el texto que va entre los nodos</h1>
const textParrafo = document.createTextNode('Soy un parrafo');

nuevoH1.appendChild(textH1);   //Agrego el texto a su elemento
nuevoParrafo.appendChild(textParrafo);

//Otra version puede ser

nuevoH1.innerHTML = textH1;                 //En este caso se modifica la propiedad
nuevoParrafo.innerHTML = textParrafo; 

////////////////////////////////////////////////////////////////////////////////

ANADIR ELEMENTOS AL DOM


cabecera.appendChild(nuevoH1);
cabecera.appendChild(nuevoParrafo);

//Puedo anadir elementos antes del seleccionado

const padre = cabecera.parentNode;
padre.insertBefore(nuevoH1, cabecera);

/////////////////////////////////////////////////////////////////////////////////

CLASES

const cabecera = document.getElementById('cabecera');

cabecera.classList.remove('foo')
cabecera.classList.add('foo')
cabecera.classList.remove('foo','bar')
cabecera.classList.add('foo','bar')
cabecera.classList.toggle('visible')  //Si esta la quita, si no esta la agrega
cabecera.classList.contains('foo') //Devuelve True o False
