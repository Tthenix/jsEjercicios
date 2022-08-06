var num1 = parseInt(prompt("ingrese num1"));
var num2 = parseInt(prompt("ingrese num2"));

if (num1 <=0 || num2 <=0 ) {
    alert("uno de los numeros introducidos es menor o igual a 0")
    
} else if(isNaN(num1)== true || isNaN(num2)== true){
    alert("el valor intrducido no es un numero")
}

while(isNaN(num1) == true || isNaN(num2) == true || num1 <=0 || num2 <=0);