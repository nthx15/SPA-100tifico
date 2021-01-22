const API = 'https://rickandmortyapi.com/api/character/';

/* Craemos la funcion getData usando async y await, recibirá un id(puede ser el id del personaje que estemos utilizando (hacer render));

  Logica: si nuestra función no recibe un id entonces va a traer el llamado por defecto (en este caso sería API), pero si mandamos un id como parametroa esta función entoces vamos a generar una nueva url la cual va a llamar al personaje que nosotros desemos.

  generamos una constante apiURL a este valor y le aplicamos un if ternario, si if existe entonces vamos a retornar (usando template literas) una estructura nueva que nos va a decir trae a ${API} y concatenale el ${id} que estas recibiendo, en dado caso que id no exista retornamos : API y va a traer todos los personajes para hacer render del home, de esta forma vamos a identificar hacia a donde se esta moviendo nuestro usario 
  
  seguido hacemos el llamado al fetch de estos elementos
  pero para eso debomos trabajar como el estandar nos lo dice en este caso encapsular estos llamados en un trycatch,
  generamos una constante llamada response (va a hacer el llamado a fetch), usamos await (que espera a que esto suceda), usamos fetch a apiURL, ahora que tenemos esta estructura tenemos que convertir nuestro elemento en este caso la respuesta que nos da el servidor aun objeto json que pueda ser iterable para eso usaremos una constantante que llamaremos data que sera igual a await a response.json(); y con esto ya lo estamos convirtiendo, si todo esto es correcto hacemos un return de data. Haremos el catch del error en dado case que ocurra y pasamos el error en un console.log, ahora exportamos
  */
const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('fetch error', error);
  }
};

export default getData;
