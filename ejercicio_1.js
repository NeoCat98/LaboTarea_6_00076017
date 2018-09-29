ListaProductos=[];
ventasRealizadas=[];

function agregarProducto(){
    var ncodigo=prompt('Codigo del producto:');
    var ndescripcion = prompt('descripcion del producto:');
    var ntipo = prompt('Tipo de producto: ');
    var nprecioCompra = prompt('Precio de compra: ');
    var nprecioVenta = prompt('Precio de venta: ');
    var ncantidad = prompt('Cantidad: ');
    var producto = {
        codigo: ncodigo,
        descripcion: ndescripcion,
        tipo: ntipo,
        precioCompra: nprecioCompra,
        precioVenta: nprecioVenta,
        cantidad: ncantidad,
    }
    ListaProductos.push(producto);
}

function modificarStock(){
    var ncodigo=prompt('Codigo del producto que desea modificar:');
    var ncantidad = prompt('Nueva cantidad: ');
    modifico = false;
    for (i of ListaProductos){
        if(i.codigo==ncodigo){
            i.cantidad = ncantidad;
            modifico = true;
        }
    }
    if(modifico){
        console.log('Se modifico el producto');
    }
    else{
        console.log('No se encontro el producto, por lo tanto no se modifico');
    }
}

function registrarVenta(){
    var ncodigo=prompt('Codigo del producto que desea registrar:');
    seRegistro = false;
    for ( i of ListaProductos){
        if(i.codigo==ncodigo){
            i.cantidad = paseInt(i.cantidad)-1;
            ventasRealizadas.push({
                codigo: i.codigo,
                descripcion: i.descripcion,
                tipo: i.tipo,
                precioCompra: i.precioCompra,
                precioVenta: i.precioVenta,
                cantidad: 1,
            })
            seRegistro = true;
        }
    }
    if(seRegistro){
        console.log('Se registro la venta del producto');
    }
    else{
        console.log('No se encontro el producto, por lo tanto no se registro la venta');
    }
}

function mostrarVentas(){
    ganancia=0;
    totalObtenido=0;
    cantidad=0;
    for (i of ventasRealizadas){
        totalObtenido = totalObtenido + (i.precioVenta);
        ganancia = ganancia + (i.precioVenta-i.precioCompra);
        cantidad++;
    }
    c='Cantidad de producto vendidos: '+cantidad;
    t = 'Cantidad total obtenida: '+totalObtenido;
    prom = 'Promedio de la cantidad obtenida: '+totalObtenido/cantidad;
    g = 'Ganancia: '+ganancia;
    return c+'\n'+t+'\n'+prom+'\n'+ganancia;
}

function mostrarProducto(){
    for (i of ListaProductos){
        if(i.cantidad=="0"){
            console.log(i);
        }
    }
}

function menu(){
    salir = false;
    while(!salir){
        opcion= prompt("1.Agregar producto.\n2.Modificar Stock.\n3.Registrar venta y reducir stock\n4.Mostrar promedio de ventas realizadas\n5.Mostrar productos con stock 0\n6.Salir del sistema");
        switch(opcion){
            case "1":
                agregarProducto();
                break;
            case "2":
                modificarStock();
                break;
            case "3":
                registrarVenta();
                break;
            case "4":
                mostrarVentas();
                break;
            case "5":
                mostrarProducto();
                break;
            case "6":
                salir = true;
                break;
        }
    }
}