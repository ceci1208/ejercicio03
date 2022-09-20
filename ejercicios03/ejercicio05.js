/**
 * 1. la funcion create container recibe como parametro un arreglo de usuarios donde cada uno tiene "id"
 * y "name"
 * 
 * Realizar la implementacion para regresar un <table>
 * de html para regresar la columna del ID y NOMBRE
 * 
 * <table>
 *  <thead>
 * </thead>
 *  <tbody>
 */

function createTable(users){

    const $cuerpoTabla = document.querySelector("#cuerpoTabla");
// Recorrer todos los productos
    users.forEach(users => {
    const $tr = document.createElement("tr");
    let $tdid = document.createElement("td");
    $tdid.textContent = users.id; 
    $tr.appendChild($tdid);
    let $tdname = document.createElement("td");
    $tdname.textContent = users.name;
    $tr.appendChild($tdname);
    $cuerpoTabla.appendChild($tr);
});

}
createTable([
    {
      id: 1,
      name: "Jorge"
    },
    {
      id: 2,
      name: "Francisco"
    }
  ]);

