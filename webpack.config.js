const path = require('path'); //Nos permite acceder a donde estámos en las carpetas. Ya sea en local o en la nube.
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Archivo necesario para trabajar con HTML.
const CopyWebpackPlugin = require('copy-webpack-plugin'); //este va a encargarse de copiarse nuestros estilos hacia la carpeta dist y de esta forma trabajar dinámicamente
module.exports = {
  entry: './src/index.js',
  output: {
    //Donde se envía el proyecto estructurado y compilado listo para producción.
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js'],
  },

  module: {
    //Se crea un modulo con las reglas necesarias que vamos a utilizar.
    rules: [
      //Reglas
      {
        // Estructura de Babel
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    //Establecemos los plugins que vamos a utilizar
    new HtmlWebpackPlugin(
      //Permite trabajar con los archivos HTML
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),
    //copia los estilos a la carpeta dist
    new CopyWebpackPlugin([
      {
        from: './src/styles/styles.css',
        to: '',
      },
    ]),
  ],
};
