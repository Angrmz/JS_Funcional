const Script  = require('./DAO');
let DAO = new Script('./listaProductos.json');

console.log("1) Número de productos con existencia mayor a 20:");
console.log(DAO.existenciaMayor(20));

console.log("2) Número de productos con existencia menos a 15:");
console.log(DAO.existenciaMenor(15));

console.log("3) Lista de productos con la misma clasificación y precio mayor 15.50:");
console.log(DAO.mismaClasificacionyPrecioMayor(15.5,'frutas'));

console.log("4) Lista de productos con precio mayor a 20.30 y menor a 45.00:");
console.log(DAO.precioMayoryMenor(20.3,45));

console.log("5) Número de productos agrupados por su clasificación:");
console.log(DAO.porClasificacion(''));
