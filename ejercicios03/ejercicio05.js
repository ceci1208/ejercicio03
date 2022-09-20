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

/**
 * 2. La función minMax recibe un arreglo de números.
 * 
 *  Realizar la implementación para regresar en un objeto el número
 *  mínimo y el número máximo.
 */

 function minMax(array) {

    const maximo = Math.max(...array);
    const minimo = Math.min(...array);
    return(`Maximo: ${maximo}, minimo: ${minimo}`)
}

console.log(minMax([1, 2, 3, -100])); // { min: -100, max: 3 }

/**
 * 3. La función unique recibe un arreglo de números.
 * 
 * Realizar la implementación para regresar los elementos únicos del arreglo.
 */
 function unique(array) {
    let array_unique = [...new Set(array)]
    return array_unique
}

console.log(unique([1,1,1,1,2,2,2,2,2,2,1,1,2,2,2,3,3,3,3,4])); // [1,2,3,4];