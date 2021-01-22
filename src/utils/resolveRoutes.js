/* resolveRoutes va tener que pasar un valor muy particular en este caso la ruta (route) obtenida por la función anterior*/
const resolveRoutes = (route) => {
  /* aqui tengo que comprobar si route es igual a / y si no es igual a un id, en dado caso contrario seria a una sección por la cual el usaurio esta navegando



NOTA: al analizar nuestro proyecto (api) tiene "n" cantidad de personajes no mayor a 1000, entoces nuestros caracteres tienen 3 niveles y si no obtuve un id entonces se regresa un /
*/
  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }

  return `/${route}`; // /about
};
export default resolveRoutes;
