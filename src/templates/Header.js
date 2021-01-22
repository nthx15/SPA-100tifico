/*
CREAMOS UNA CONSTANTE QUE LLAMAREMOS "HEADER" Y A ESTA CONSTANTE LE ASIGNAREMOS UNA FUNCION MEDIANTE UNA ARROW FUNCTION QUE NOS RETORNARA UNA VISTA EN ESTE CASO EL HEADER
*/

const Header = () => {
  const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/">
            100tifi.co
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a href="#/about/">
          About
        </a>
      </div>
    </div>
    `;
  return view;
};

export default Header;
