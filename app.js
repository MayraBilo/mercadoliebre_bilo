const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const port = process.env.PORT || 3001;

const publicPath = path.join(__dirname, "./Public");

const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");

app.set("view engine", "ejs");

/*MIDDLEWARES*/
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

/* ROUTERS */
app.use(mainRoutes);
app.use("/products", productsRoutes);

app.use((req, res, next) => {
  res.status(404).render("not-found");
});

app.listen(port, () => {
  console.log(
    "Servidor corriendo en el puerto " + port + " http://localhost:3001"
  );
});
