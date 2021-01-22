/*console.log('hello');
Haremos el import de router desde routes

window me permite saber si esta en el contexto de la aplicacion
y el addEventListener es un manejador de eventos y va estar escuchando si la carga de la pagina ha sucedido, en este caso el valor es load y despues se pasa algo (en este caso la funcion de routes, aunque puede ser anonima) las rutas
*/
import router from './routes';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
