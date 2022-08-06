let numeros = +(prompt("Ingrese la cant d numeros a ingresar "));
let ingreso = +(prompt("Ingresa valor a buscar: "));
let lista = [];


for (var i =0; i<numeros; i++){
    var numeros2 = parseInt(prompt("ingresa un numero "))
    lista.push(numeros2)
}
console.log(lista);
let verificar = lista.includes(ingreso);
console.log(verificar);
    // if (lista.includes == true){
    // console.log("El valor esta en el array")
    // }

    // if (lista.includes == false){
    // console.log("El valor no esta en el array")
    // }