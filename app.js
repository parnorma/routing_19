const path = require("path");
const express = require("express");
const app = express();
const mainRouter = require("./routers/mainRoute.js");

app.listen(3000, () => {
  console.log("Servidor corriendo por el puerto 3000");
});
app.use(express.static(path.join(__dirname, "public")));

// busca el enrutador que comience con barra por eso es el unico que va aca
// ojo que lo que le ponga aca es un prefijo que le agregaraa a mis rutas
app.use("/", mainRouter); // si arranca con barra se va al mainRoute
