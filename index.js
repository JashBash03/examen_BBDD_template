//importaciones
const express = require("express");
const nunjucks = require("nunjucks");
const { getAll } = require("./scripts/mensajes.js");

//crear app
const app = express();

//njk
nunjucks.configure("views", {
 autoescape: true,
 express: app,
});
app.set('view engine', 'njk')
app.use(express.urlencoded({ extended: true }))

//rutas
const rutasMensajes = require("./routers/rutasMensajes.js");
app.use(rutasMensajes);

app.get('/holamundo',(req,res) => {
  res.send("hola mundo")

}); 

app.get('/hola', (req, res) => {
    const nombre = req.query.nombre;
    res.send(nombre ? `Hola ${nombre}!` : 'Hola!');
  });

  /*app.get('/fecha', (req, res) => {
    const fecha = new Date().toLocaleDateString();
    res.send(`Fecha Actual: ${fecha}`);
});

app.get('/leet', (req, res) => {
    const palabra = req.query.palabra;


    const convertirALeet = (word) => {
      const leetMap = {
        'a': '4',
        'e': '3',
        'l': '1',
        'o': '0',
        't': '7'
      };

      return word.split('').map(char => leetMap[char.toLowerCase()] || char).join('');
    };

    const palabraLeet = convertirALeet(palabra);
    res.send(`Versión Leet: ${palabraLeet}`);
  });*/



 //arrancar servidor
 app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
    });