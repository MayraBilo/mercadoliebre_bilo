const fs = require("fs");
const path = require("path");

const model = {
  // ruta del archivo
  route: "../data/productos.json",
  //Función que traiga todos los productos
  findAll: function () {
    //Llamo al archivo .JSON con readFileSync para que lo pueda traer a la función
    const productsJSON = fs.readFileSync(
      path.join(__dirname, this.route),
      "utf-8"
    );
    //traducir de JSON a JS
    const products = JSON.parse(productsJSON);
    //La funcion nos retorna el listado de productos
    return products;
  },
  //Funcion que busque un producto por ID
  findById: function (id) {
    const products = this.findAll();

    let searched = products.find((product) => product.id === id);

    if (!searched) {
      console.log("El producto no existe");
      //Se pone null porque no se encontro el producto,
      //si no se aclara, saldria undefined y se asociaria a un error
      searched = null;
    }
    return searched;
  },

  //Eliminar producto
  deleteById: function (id) {
    //Declaro la variable como LET porque la estoy modificando en la linea 38 (no es constante)
    let products = this.findAll();
    //Hago un nuevo array, dejando afuera al id que estoy queriendo eliminar
    products = products.filter((product) => product.id != id);
    // Pasamos la variable a formato JSON para poder actualizar el archivo .json
    const productsJSON = JSON.stringify(products);
    //Sobreescribimos el archivo completo con lo que le pasemos en el segundo parámetro
    fs.writeFileSync(path.join(__dirname, this.route), productsJSON);
    return products;
  },
  //Editar producto
  updateById: function (id, newData) {
    let products = this.findAll();

    const index = products.findIndex((product) => product.id === id);

    products[index].nombreProducto = newData.nombreProducto;
    products[index].precioProducto = newData.precioProducto;
    products[index].descripcion = newData.descripcion;
    products[index].descuento = newData.descuento;
    products[index].imagenProducto = newData.imagenProducto;

    const productsJSON = JSON.stringify(products);
    fs.writeFileSync(path.join(__dirname, this.route), productsJSON);

    return products;
  },
  //Crear producto nuevo
  createOne: function (newProduct) {
    let products = this.findAll();

    newProduct.id = products[products.length - 1].id + 1;

    products.push(newProduct);

    const productsJSON = JSON.stringify(products);

    fs.writeFileSync(path.join(__dirname, this.route), productsJSON);
  },
};

module.exports = model;
