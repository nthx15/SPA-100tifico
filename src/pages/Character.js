/*
CREAMOS UNA CONSTANTE QUE LLAMAREMOS "Character" Y A ESTA CONSTANTE LE ASIGNAREMOS UNA FUNCION MEDIANTE UNA ARROW FUNCTION QUE NOS RETORNARA UNA VISTA EN ESTE CASO EL Character (esta es la vista del personaje)
*/

import getHash from '../utils/getHash';
import getData from '../utils/getData';
/*En el template generaremos una constante id que va hacer un llamado a getHash(aqui ya obtenemos el hash donde se esta moviendo), tambien actualizaremos la función completa usando async, seguido usamos await en una constante llamada character sobre la petición de getData() y le pasaremos un id y de esta forma queda actualizado nuestro template que nos va a permitir hacer render de los elementos que estamos trayendo del personaje*/

const Character = async () => {
  const id = getHash();
  const character = await getData(id);

  /*ahora no vamos iterar por que cuando ya obtenemos un personaje, este nos regresa un objeto entonces vamos a iterar sobre este elemento y vamos a verificar donde hacer iteraciones ejemplo nobre imagen etc. de la siguiente manera ${character.image} ${character.name} */
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Episodes:<span> ${character.episode.length}</span></h3>
        <h3>Status:<span> ${character.status}</span></h3>
        <h3>Species:<span> ${character.species}</span></h3>
        <h3>Gender:<span> ${character.gender}</span></h3>
        <h3>Origin:<span> ${character.origin.name}</span></h3>
        <h3>Last Location:<span> ${character.location.name}</span></h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;
