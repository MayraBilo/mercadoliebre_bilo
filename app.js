const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

const publicPath = path.join(__dirname, "./Public");

const mainRoutes = require("./routes/mainRoutes");
const crearProducto = require("./routes/crearProductoRoutes");
app.set("view engine", "ejs");

app.use(express.static(publicPath));

app.use(mainRoutes);
app.use(crearProducto);

app.get("/cargarproducto.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/cargarProducto.html"));
});

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});
