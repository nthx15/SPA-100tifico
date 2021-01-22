import getData from '../utils/getData';

/*Dentro de la logíca de home vamos a hacer el llamado de getData pero para ello debemos convertirla en async y await, para ello creamos una constante llamada characters con await para que espere en lo que se retorna algo;

como esta sección en nuestro Home, no vamos a pasar un ID (hará un llamado a la API estandar)
*/
const Home = async () => {
  const characters = await getData();

  /* Ahora vamos a convertir nuestro template para que podamos hacer iteracion por cada uno de los personajes que estamos recibiendo
  
  traeré un valor nuevo (en este caso seria un asignacion en memoria de estos personajes), como todos los resultados que nos manda esta dentro de results y al ser un elemento que se puede iterar va a permitir retornar un nuevo arreglo de la estrucctura que yo le estoy pasando en esta caso el template que se tiene establecido pero con los valores que yo voy a iterar, ya qeu tengo a map voy a iterar por personaje, por cada uno voy a generar un template, ahora dentro del template voy a poder acceder a las variables (nombre, imagen, etc... (${character.name})), una vez hecho esto debemos unirlo ya que nos generara un arreglo y para eso utilizamos Join y le decimos que no utilice ninguna forma de separarlo
  */
  const view = `
  <div class="Characters">
      ${characters.results
        .map(
          (character) => `
        <article class="Character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      `
        )
        .join('')}

    </div>
  `;
  return view;
};

export default Home;
