productoproductolet fs = require('fs');

class DAO {
    constructor(archivo) {
        this.archivo = archivo;
        let contenido = fs.readFileSync(archivo, 'utf8');
        this.informacion = JSON.parse(contenido);
    }

    existenciaMayor(valor){
        return this.informacion.filter(producto => producto.stock > valor);
    }

    existenciaMenor(valor){
        return this.informacion.filter(producto => producto.stock < valor);
    }

    mismaClasificacionyPrecioMayor(precio, clasificacion){
        return this.informacion.filter( producto => producto.precio > precio && producto.clasificacion === clasificacion);
    }

    precioMayoryMenor(num1,num2){
        return this.informacion.filter(producto => producto.precio > num1 && producto.precio < num2);
    }

    porClasificacion(clasificacion){
        return this.informacion.filter(producto => producto.clasificacion === clasificacion);
    }
}

module.exports = DAO;
