const productos = [
  {
    id: 1,
    nombre: 'Remera Nike',
    precio: 5000,
    colores: ['Blanca', 'Negro', 'Azul'],
  },
  {
    id: 2,
    nombre: 'Pantalón Gucci',
    precio: 12000,
    colores: ['Gris', 'Negro'],
  },
  {
    id: 3,
    nombre: 'Vestido Markova',
    precio: 11000,
    colores: ['Rojo', 'Blanco', 'Violeta'],
  },
  {
    id: 4,
    nombre: 'Zapatillas Deportivas Adidas',
    precio: 9500,
    colores: ['Blanco', 'Rojo', 'Azul'],
  },
  {
    id: 5,
    nombre: 'Teclado Redragon',
    precio: 7500,
    colores: ['Blanco', 'Negro'],
  },
  {
    id: 6,
    nombre: 'Camperon del Milan del Duki',
    precio: 55000,
    colores: ['Negro'],
  },
];

// Imprimir por consola (por cada producto) : "El producto *nombre* sale $*precio*"
const imprimirNombreYPrecio = () =>
  productos.forEach((producto) =>
    console.log(`El producto ${producto.nombre} sale $${producto.precio} `)
  );

// imprimirNombreYPrecio();

// Filtrar:
// A) Filtrar los productos mayores a 10 Lucas y devolverlos en un array nuevo

const mayoresA10mil = productos.filter((producto) => producto.precio > 10000);
// console.log(mayoresA10mil);

// B) Filtrar/Incluir Todos los productos disponibles en Negro (cuidado con las mayusculas)
const disponiblesEnNegro = productos.filter((producto) =>
  producto.colores.includes('Negro')
);
// console.log(disponiblesEnNegro);

// C) Repetir los ejercicios anteriores pero parametrizar precio y color (Hacer una función)
// Precio
const mayoresA = (precio) =>
  productos.filter((producto) => producto.precio > precio);
// console.log(mayoresA(200));

// Colores
const disponiblesEn = (color) =>
  productos.filter((producto) => producto.colores.includes(color));
// console.log(disponiblesEn('Blanco'));

//Mapear
// A) Usar destructuring para traer los nombres de los productos en un nuevo array
const nombreProductos = productos.map(({ nombre }) => nombre);
// console.log(nombreProductos);

// B) Hacer una función que devuelva un nuevo array con los productos
// actuales pero que aquellos que valgan mas de $10000 tengan un descuento del 50%
const productosConDescuento = productos.map((producto) =>
  producto.precio > 10000
    ? { ...productos, precio: producto.precio * 0.5 }
    : producto
);

const productosConDescuentoIf = productos.map((producto) => {
  if (producto.precio > 10000) {
    return { ...productos, precio: producto.precio * 0.5 };
  } else {
    return producto;
  }
});

// console.log(productosConDescuentoIf);

// Existe o no:
// A) Indicar si existe algún producto que este disponible en 3 colores o mas.
// La respuesta mostrada debe ser user friendly
const masDe3Colores = () => {
  if (productos.some((producto) => producto.colores.length >= 3)) {
    return 'Existen productos disponibles en mas de 3 colores';
  } else {
    return 'No existen productos disponibles en mas de 3 colores';
  }
};
// console.log(masDe3Colores());

// B) Indicar si todos los productos tienen mas de 1 color
const masDe1Color = () => {
  if (productos.every((producto) => producto.colores.length > 1)) {
    return 'Todos los productos tienen mas de 1 color';
  } else {
    return 'No todos los productos tienen mas de un color';
  }
};

// console.log(masDe1Color());

// Ordenar productos de menor a mayor por precio:
const ordenarPrecio = productos.sort((a, b) => a.precio - b.precio);

// console.log(ordenarPrecio);
