import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
// como buena practica no se pone la extensión ya que obviamos esto, y esta sucediendo al momento de ser exportado en donde se declaro la function y se ve mas amigable.

/*Creamos un elemento muy importante el cual son las rutas, para eso generamos un objeto y dentro vamos a establecer cuales son las rutas y que va a hacer render dentro de cada una de ellas

generamos una constante, la llamamos routes y como va a ser un objeto llenamos dentro las rutas que téndra la aplicación,
el id sera un valor dinamico,
*/

const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact',
};

/*Una vez tengamos nuestras rutas, tendremos que crear un manejador (Router) que se encargara de mostrar los elementos, según la lógica que vamos a establecer, aqui tambien vamos a trabajar como obtener valores del navegador y como vamos a estructurarlos para así saber cual es la ruta en la cual nuestro usuario a querido moverse 

Aquí algo muy importante es que a router lo vamos a establecer async (trabajaremos async y await dentro de nuestra función), ya que vamos a esperar hasta que algo este sucediendo para asi continuar con nuestro bloque de nuestra aplicación.

Ahora que creamos esta estructura (router), vamos a establecer los templates que ya tenemos hacia un elemento del DOM (en public>index.html) establecimos un id header y un id content y estos son los elementos que vamos a estructurar dentro de nuestro router y ahi vamos a empujar nuestro render > hacia las secciones establecidas por los ids.

la constante header como content les pasamos el valor null en caso de que no las encuentre y encontrara el ID mediante ¨document.getElementById('header');¨,

header.innerHtml manda a el template de header a la vista par ver que tenemos en el template

y await va a esperar a que suceda el render
*/

const router = async () => {
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  header.innerHTML = await Header();

  /* crearemos unas variables
     let hash = getHash();// hago el llamado a getHash (obtengo el hash donde se encuentre o la sección donde se esta moviendo)

     seguido manejamos la ruta, usamos await ya que 'resolve' se puede tardar en obtener primero el hash y luego pasarselo a esta función, hacer las validaciones necesarias y retornar el valor en dado caso que sea necesario.
     de esta forma tenemos listo route para trabajar
     let route = await resolveRoutes(hash);
  */
  let hash = getHash();
  let route = await resolveRoutes(hash);
  /*creamos una nueva variable render que va a contener el valor de las rutas que se tienen comparada con la que vamos a obteniendo en la navegación del usuario

  le pasaremos una validación por if ternario, usaremos a routes y brackets notation [] para pasar el string que queremos encontrar
  lo mismo seria usar routes.'/' el cual retornaria el home;

  lo que hace el if ternario es comprobar si esto routes[route] retorna un elemanto pues mando el valor, de otra forma el error404

  entonces a content donde va a vivir, tengo que hacerle in innerHTML de render,  y render hara el trabajo
  */
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();
};
export default router;
