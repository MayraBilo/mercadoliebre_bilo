let productos = [
  {
    id: 1,
    nombreProducto: "Cafetera Moulinex",
    precioProducto: "2500",
    descripcion: "asds",
    imagen: "img-cafetera-moulinex.jpg",
    descuento: "20",
  },
  {
    id: 2,
    nombreProducto: "Samsung S10",
    precioProducto: "6500",
    descripcion: "qweqwe",
    imagen: "img-samsung-galaxy-s10.jpg",
    descuento: "30",
  },
  {
    id: 3,
    nombreProducto: "Macbook Pro 2019",
    precioProducto: "8500",
    descripcion: "qweafqwe",
    imagen: "img-macbook-pro-2019.jpg",
    descuento: "10",
  },
  {
    id: 4,
    nombreProducto: "TV Samsung Smart",
    precioProducto: "10500",
    descripcion: "qweqwe",
    imagen: "img-tv-samsung-smart.jpg",
    descuento: "25",
  },
];

const controllers = {
  getProductList: (req, res) => {
    res.render("productList", { title: "Productos", productos });
  },
  getCreate: (req, res) => {
    res.render("createProduct", { title: "Crear producto nuevo", productos });
  },
  getProductDetail: (req, res) => {
    const id = Number(req.params.id);
    const productoAMostrar = productos.find(
      (productoActual) => productoActual.id === id
    );

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

    const productoAModificar = productos.find(
      (productoActual) => productoActual.id === id
    );

    if (!productoAModificar) {
      return res.send("El producto no es válido");
    }

    res.render("updateProduct", {
      title: "Editar productos",
      product: productoAModificar,
    });
  },
  postProductList: (req, res) => {
    let datos = req.body;

    datos.id = productos.length + 1;

    productos.push(datos);

    res.redirect("/products");
  },
  deleteProduct: (req, res) => {
    const id = Number(req.params.id);

    const nuevosProductos = productos.filter(
      (productoActual) => productoActual.id !== id
    );
    productos = nuevosProductos;

    res.redirect("/products");
  },
  updateProduct: (req, res) => {
    const id = Number(req.params.id);
    const productoAActualizar = productos.find(
      (productoActual) => productoActual.id === id
    );

    const indice = productos.indexOf(productoAActualizar);
    const nuevosDatos = req.body;

    productos[indice].nombreProducto = nuevosDatos.nombreProducto;
    productos[indice].precioProducto = nuevosDatos.precioProducto;
    productos[indice].descripcion = nuevosDatos.descripcion;

    res.redirect("/products");
  },
};

module.exports = controllers;
