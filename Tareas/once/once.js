let numeros = +(prompt("Ingrese la cant d numeros a ingresar "));
let lista = [];

for (var i =0; i<numeros; i++){
    var numeros2 = parseInt(prompt("ingresa un numero "))
    function comparar(a,b){
        return b - a
    }
    lista.push(numeros2)

    }

console.log(lista.sort(comparar));