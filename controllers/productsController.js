const productsModel = require("../models/products");

const controllers = {
  getProductList: (req, res) => {
    const productos = productsModel.findAll();
    res.render("productList", { title: "Productos", productos });
  },
  getCreate: (req, res) => {
    const productos = productsModel.findAll();
    res.render("createProduct", { title: "Crear producto nuevo", productos });
  },
  getProductDetail: (req, res) => {
    const id = Number(req.params.id);
    const productoAMostrar = productsModel.findById(id);

    if (!productoAMostrar) {
      return res.send("El producto no es válido");
    }

    res.render("productDetail", {
      title: "Detalle de producto",
      product: productoAMostrar,
    });
  },
  getUpdate: (req, res) => {
    const id = Number(req.params.id);

    const productoAModificar = productsModel.findById(id);
    if (!productoAModificar) {
      return res.send("El producto no es válido");
    }

    res.render("updateProduct", {
      title: "Editar productos",
      product: productoAModificar,
    });
  },
  postProduct: (req, res) => {
    let datos = req.body;
    datos.precioProducto = Number(datos.precioProducto);
    datos.imagenProducto = req.file ? req.file.filename : "sin foto";
    datos.descuento = Number(datos.descuento);
    productsModel.createOne(datos);

    res.redirect("/products");
  },
  deleteProduct: (req, res) => {
    const id = Number(req.params.id);

    productsModel.deleteById(id);

    res.redirect("/products");
  },
  updateProduct: (req, res) => {
    const id = Number(req.params.id);

    const nuevosDatos = req.body;

    productsModel.updateById(id, nuevosDatos);

    res.redirect("/products");
  },
};

module.exports = controllers;
