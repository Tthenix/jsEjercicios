var n = 1;
var suma = 0;
var num = 1
while(num > 0 ){
    num = prompt("ingrese un numero");
    num = parseInt(num);
    suma = suma + num;
    n = n + 1;
    media = suma / 2 
    alert("suma de todos: " + suma + "y la media es "  + media)
}