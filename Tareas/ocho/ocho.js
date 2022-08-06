let numeros = +(prompt("Ingrese la cant d numeros a ingresar "));
let lista = [];
var maxNum = Number.MIN_VALUE;
var minNum = Number.MAX_VALUE;

for (var i =0; i<numeros; i++){
    var numeros2 = parseInt(prompt("ingresa un numero "))
    lista.push(numeros2)
    
    if (numeros2 < minNum){ 
        minNum = numeros2;
    }
    if (numeros2 > maxNum){
        maxNum = numeros2;
    }
}
console.log("max: " + maxNum + " Minimo: " + minNum)