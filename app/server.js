const mongoose = require('mongoose');
const FrontRouter = require('./routes/front');
const bodyParse = require('body-parser');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');
const express = require('express');
const app = express();


const moment = require('moment');
app.locals.moment = moment;


app.use(bodyParse.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
    console.log('Development mode: Enabling Live Reload');
    const livereload = require('livereload');
    const connectLiveReload = require('connect-livereload');
    const liveReloadServer = livereload.createServer();
    liveReloadServer.server.once("connection", () => {
        setTimeout(() => {
            liveReloadServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload()); // Aplicar middleware solo en desarrollo
}

// ... resto de la configuración de Express ...
// Set ejs template engine
app.set('view engine', 'ejs');
// ... bodyParse, app.locals, etc ...

// Database connection
// ... tu código de conexión a mongoose ...
const dbURI = process.env.MONGO_URI || require('./config/keys').mongoProdURI; // ¿Cómo obtienes la URI? ¿Así, o de otra forma?

console.log(`Intentando conectar a MongoDB en: ${dbURI}`); // Es útil mantener este log

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true, // Si usas Mongoose v5 o anterior
    // ¿Tienes otras opciones aquí?
})
.then(() => {
    console.log('¡¡Conectado a MongoDB!!');
})
.catch(err => {
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.error('ERROR AL CONECTAR A MONGODB:', err.message); // Muestra el mensaje de error
    console.error('Stack:', err.stack); // Muestra más detalles
    console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    // process.exit(1); // Considera salir si la conexión falla en producción
});

app.use(FrontRouter);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});